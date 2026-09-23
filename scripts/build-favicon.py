#!/usr/bin/env python3
"""Generate the Kasandy Foundation favicon set from the real logo artwork.

Run from the repo root:
    pip install pillow numpy scipy --break-system-packages
    python3 scripts/build-favicon.py

Writes app/favicon.ico, app/icon.png, app/apple-icon.png.

Everything is derived from public/KF_Logo_transparent.png so the mark is the
brand's own geometry and lettering, never a redraw or a substitute typeface.

Brand Guidelines v1.0, p.9:
    "Favicon / avatar - Use the arcs alone, or the arcs with a single K.
     Never shrink the full lockup below 96 px."
Jackee asked for KF rather than a single K. Everything else follows the book:
one ink per placement, no shadow / glow / outline / gradient, circle never closes.
"""
import io
import os
import struct

import numpy as np
from PIL import Image, ImageDraw
from scipy import ndimage

LOGO = 'public/KF_Logo_transparent.png'
OUTDIR = 'app'

OXBLOOD = (131, 12, 18)    # #830C12  brand primary
WHITE = (252, 252, 252)    # #FCFCFC  brand white

# Circle fitted by least squares to the two arc components in the source art:
# centre (3303.3, 2348.1), r = 1914.1, residual sd 9.4px over 1.9k radius.
# Angular extents measured off the same components, counter-clockwise from 3 o'clock.
ARCS = [(13, 104), (194, 284)]

# Connected-component ids in the source artwork.
COMP_K = 7    # the K of KASANDY
COMP_F = 16   # the F of FOUNDATION (KASANDY contains no F)

# Proportions tuned so the letters clear the arc stroke at every size.
FULL = dict(radius_frac=0.445, stroke_frac=0.050, letter_frac=0.300, gap_frac=0.045)
TINY = dict(radius_frac=0.445, stroke_frac=0.000, letter_frac=0.600, gap_frac=0.085)

# Below this the arcs collapse into grey fuzz and drag the letters down with them,
# so the small entries in the .ico carry the letters alone.
ARCS_MIN_PX = 24


def load_glyphs():
    im = Image.open(LOGO).convert('RGBA')
    alpha = np.array(im)[..., 3]
    lab, _ = ndimage.label(alpha > 40, structure=np.ones((3, 3)))

    def glyph(comp_id):
        m = (lab == comp_id)
        if not m.any():
            raise SystemExit(f'component {comp_id} not found - has {LOGO} changed?')
        ys, xs = np.nonzero(m)
        sub = (alpha * m)[ys.min():ys.max() + 1, xs.min():xs.max() + 1]
        return Image.fromarray(sub.astype(np.uint8), 'L')

    return glyph(COMP_K), glyph(COMP_F)


K, F = load_glyphs()


def _paste(mask, g, box_h, cx, cy):
    w, h = g.size
    nw = max(1, round(w * box_h / h))
    gg = g.resize((nw, box_h), Image.LANCZOS)
    mask.paste(gg, (round(cx - nw / 2), round(cy - box_h / 2)), gg)
    return nw


def build(letters='KF', size=512, ss=4, *,
          radius_frac, stroke_frac, letter_frac, gap_frac):
    """Render the mark as an alpha mask, supersampled then downsampled."""
    S = size * ss
    mask = Image.new('L', (S, S), 0)
    d = ImageDraw.Draw(mask)
    cx = cy = S / 2

    if stroke_frac > 0:
        r = radius_frac * S
        w = max(1, round(stroke_frac * S))
        bbox = [cx - r, cy - r, cx + r, cy + r]
        # PIL measures arcs clockwise from 3 o'clock; the artwork angles are
        # counter-clockwise, so negate to keep the gaps where the logo has them.
        for a0, a1 in ARCS:
            d.arc(bbox, -a1, -a0, fill=255, width=w)

    lh = round(letter_frac * S)
    if letters == 'K':
        _paste(mask, K, lh, cx, cy)
    else:
        gap = gap_frac * S
        kw = round(K.size[0] * lh / K.size[1])
        fw = round(F.size[0] * lh / F.size[1])
        total = kw + gap + fw
        _paste(mask, K, lh, cx - total / 2 + kw / 2, cy)
        _paste(mask, F, lh, cx + total / 2 - fw / 2, cy)

    return mask.resize((size, size), Image.LANCZOS)


MASK_FULL = build('KF', 512, **FULL)
MASK_TINY = build('KF', 512, **TINY)


def flatten(mask, ink, ground, size=None):
    if size and size != mask.size[0]:
        mask = mask.resize((size, size), Image.LANCZOS)
    img = Image.new('RGB', mask.size, ground)
    img.paste(ink, (0, 0), mask)
    return img


def render(size):
    m = MASK_TINY if size < ARCS_MIN_PX else MASK_FULL
    return flatten(m, WHITE, OXBLOOD, size=size).convert('RGBA')


def write_ico(path, sizes):
    """ICO with PNG-encoded entries, so each size carries its own artwork.

    Pillow's own ICO writer resizes a single source image, which would force
    the arcs into the 16px entry. Hand-rolling the container avoids that.
    """
    blobs = []
    for s in sizes:
        buf = io.BytesIO()
        render(s).save(buf, format='PNG', optimize=True)
        blobs.append(buf.getvalue())

    header = struct.pack('<HHH', 0, 1, len(sizes))
    offset = len(header) + 16 * len(sizes)
    entries, data = b'', b''
    for s, blob in zip(sizes, blobs):
        dim = 0 if s >= 256 else s          # 0 means 256 in the ICO spec
        entries += struct.pack('<BBBBHHII', dim, dim, 0, 0, 1, 32, len(blob), offset)
        offset += len(blob)
        data += blob
    with open(path, 'wb') as fh:
        fh.write(header + entries + data)


def main():
    if not os.path.exists(LOGO):
        raise SystemExit(f'run me from the repo root - {LOGO} not found')
    os.makedirs(OUTDIR, exist_ok=True)

    write_ico(f'{OUTDIR}/favicon.ico', [16, 32, 48, 64, 128, 256])
    render(512).convert('RGB').save(f'{OUTDIR}/icon.png', optimize=True)

    # iOS applies its own rounded-rect mask, so inset the artwork a little.
    apple = Image.new('RGB', (180, 180), OXBLOOD)
    apple.paste(flatten(MASK_FULL, WHITE, OXBLOOD, size=158), (11, 11))
    apple.save(f'{OUTDIR}/apple-icon.png', optimize=True)

    for n in ('favicon.ico', 'icon.png', 'apple-icon.png'):
        print(f'  {OUTDIR}/{n:<16} {os.path.getsize(f"{OUTDIR}/{n}"):>7,} bytes')


if __name__ == '__main__':
    main()
