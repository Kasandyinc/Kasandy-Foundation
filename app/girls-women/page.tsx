import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Girls & Women Education — Canada + Kenya',
  description:
    'Kasandy Foundation funds bursaries and scholarships for Black girls and women in Canada, and partners with One Girl Can Foundation for girls\' education in Kenya.',
}

export default function GirlsWomenPage() {
  return (
    <>
      {/* PHOTO HERO */}
      <section
        className="relative min-h-[500px] flex items-end bg-cover bg-center"
        style={{
          backgroundImage:
            'url(/photos/edu_hero.jpg), linear-gradient(135deg, #4A7C62 0%, #2E5240 100%)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brown-deep/80 to-brown-deep/25" />
        <div className="relative z-10 px-10 md:px-16 py-14 max-w-2xl text-white">
          <p className="font-montserrat text-[10px] font-bold tracking-[3px] uppercase text-white/70 mb-2">
            GIRLS &amp; WOMEN EDUCATION
          </p>
          <h1 className="font-montserrat font-black text-4xl md:text-5xl leading-[1.1] mb-4">
            Canada + Kenya
          </h1>
          <p className="text-[15px] text-white/85 leading-relaxed mb-6">
            Everything the Kasandy Foundation does in Canada, we also do in Kenya.
          </p>
          <div className="flex gap-4 mb-7">
            <span className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 font-montserrat text-[11px] font-bold text-white">
              🇨🇦 Canada
            </span>
            <span className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 font-montserrat text-[11px] font-bold text-white">
              🇰🇪 Kenya
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#apply"
              className="bg-kf-red text-white font-montserrat text-[12px] font-bold tracking-wide px-6 py-3 rounded-sm hover:bg-[#a82b22] transition-colors"
            >
              Apply for a bursary &rarr;
            </Link>
            <Link
              href="/donate"
              className="border-2 border-white/70 text-white font-montserrat text-[12px] font-bold px-6 py-3 rounded-sm hover:bg-white/10 transition-colors"
            >
              Fund education &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CANADA STREAM */}
      <section className="bg-cream py-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="kicker mb-3">Canada Stream</p>
            <h2 className="font-montserrat font-extrabold text-3xl text-kf-text leading-snug mb-5">
              Opening doors to higher education for Black girls and women.
            </h2>
            <p className="text-[15px] text-text-body leading-relaxed mb-4">
              Black women in Canada face documented, systemic barriers to accessing and completing
              post-secondary education. Financial barriers are real — but so are the less visible ones:
              institutions that weren&rsquo;t built for them, and a student loan system that leaves them carrying
              disproportionate debt.
            </p>
            <p className="text-[15px] text-text-body leading-relaxed mb-6">
              Kasandy Foundation&rsquo;s Canada stream funds bursaries and scholarships for Black girls and women
              pursuing college and university education — removing financial barriers so talent and
              determination are what decide who succeeds.
            </p>
            <Link
              id="apply"
              href="/donate"
              className="inline-block bg-kf-red text-white font-montserrat text-[12px] font-bold tracking-wide px-7 py-3 rounded-sm hover:bg-[#a82b22] transition-colors"
            >
              Apply now &rarr;
            </Link>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { value: '6',  label: 'Bursaries awarded (Canada)', badge: '2026–2028 Target', color: 'text-kf-red' },
                { value: '20', label: 'Girls supported in Kenya (One Girl Can)', badge: '2026–2028 Target', color: 'text-brown' },
              ].map(s => (
                <div key={s.label} className="bg-white rounded-xl border border-kf-border shadow-kf p-6 text-center">
                  <div className={`font-montserrat font-black text-4xl leading-none ${s.color} mb-2`}>
                    {s.value}
                  </div>
                  <div className="font-montserrat text-[10px] font-bold tracking-[2px] uppercase text-text-muted mb-2">
                    {s.label}
                  </div>
                  <span className="font-montserrat text-[8px] font-bold tracking-wide uppercase px-2 py-0.5 rounded-full bg-red-pale text-kf-red">
                    {s.badge}
                  </span>
                </div>
              ))}
            </div>
            <div
              className="rounded-xl overflow-hidden min-h-[240px] bg-cover bg-center shadow-kf-lg"
              style={{
                backgroundImage:
                  'url(/photos/edu_content.jpg), linear-gradient(135deg, #7A4028 0%, #C4956A 100%)',
              }}
            />
          </div>
        </div>
      </section>

      {/* KENYA STREAM */}
      <section className="bg-green-pale py-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="kicker-green mb-3">Kenya Stream</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-10">
            One Girl Can Foundation partnership.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="bg-white rounded-xl border border-kf-border shadow-kf border-t-4 border-t-kf-green p-7">
              <p className="font-montserrat text-[9px] font-bold tracking-[3px] uppercase text-kf-green mb-1">
                Partnership
              </p>
              <h3 className="font-montserrat font-bold text-[20px] text-kf-text mb-4">
                One Girl Can Foundation
              </h3>
              <p className="text-[14px] text-text-body leading-relaxed mb-4">
                One Girl Can is a registered charity working to break the cycle of poverty through education
                and empowerment of girls in East Africa. Their model has reached thousands of girls across
                Kenya, Uganda, and Tanzania.
              </p>
              <p className="text-[14px] text-text-body leading-relaxed mb-6">
                Kasandy Foundation partners with One Girl Can to promote, support, and extend their work for
                girls&rsquo; education in Kenya. The principle is simple: everything we do in Canada, we also do
                in Kenya. Both streams are equal in ambition, powered by the same values.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.onegirlcan.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-montserrat text-[12px] font-bold text-kf-green hover:underline"
                >
                  Learn about One Girl Can &rarr;
                </a>
              </div>
            </div>
            <div>
              <div
                className="rounded-xl overflow-hidden min-h-[280px] bg-cover bg-center shadow-kf-lg mb-6"
                style={{
                  backgroundImage:
                    'url(/photos/edu_gallery.jpg), linear-gradient(135deg, #4A7C62 0%, #2E5240 100%)',
                }}
              />
              <Link
                href="/donate"
                className="inline-block border-2 border-kf-green text-kf-green font-montserrat text-[12px] font-bold px-6 py-3 rounded-sm hover:bg-kf-green hover:text-white transition-colors"
              >
                Donate to Kenya stream &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="bg-white py-10 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="kicker-green mb-6">Photo Gallery</p>
          <div className="grid grid-cols-3 gap-3">
            {['/photos/edu_hero.jpg', '/photos/edu_content.jpg', '/photos/edu_gallery.jpg'].map((src, i) => (
              <div key={i} className="aspect-[4/3] rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${src}), linear-gradient(135deg, #4A7C62 0%, #2E5240 100%)` }} />
            ))}
          </div>
        </div>
      </section>

      {/* THE PRINCIPLE */}
      <section className="bg-white py-14 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="kicker mb-3">The Principle</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-5">
            Two countries. One ambition.
          </h2>
          <p className="text-[15px] text-text-body leading-relaxed mb-4">
            The Kasandy Foundation is not a Canadian organization with a Kenya project. It is an international
            foundation with two equally important homes. Both the Canada stream and the Kenya stream receive
            the same commitment, the same energy, and the same strategic ambition.
          </p>
          <p className="text-[15px] text-text-body leading-relaxed">
            A girl in Nairobi deserves the same chance as a girl in Vancouver. Full stop.
          </p>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-brown-deep py-14 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <p className="font-montserrat text-[10px] font-bold tracking-[3px] uppercase text-white/60 mb-3">
            Take Action
          </p>
          <h2 className="font-montserrat font-extrabold text-3xl mb-4">
            Apply for education support or fund a girl&rsquo;s education.
          </h2>
          <p className="text-[14px] text-white/75 leading-relaxed mb-8">
            Whether you are a Black girl or woman seeking support for post-secondary education, or an individual
            or institution wanting to fund the next generation — there is a place for you here.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/donate"
              className="bg-kf-red text-white font-montserrat text-[12px] font-bold tracking-wide px-7 py-3 rounded-sm hover:bg-[#a82b22] transition-colors"
            >
              Apply for a bursary &rarr;
            </Link>
            <Link
              href="/donate"
              className="border-2 border-white/60 text-white font-montserrat text-[12px] font-bold px-7 py-3 rounded-sm hover:bg-white/10 transition-colors"
            >
              Fund education &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
