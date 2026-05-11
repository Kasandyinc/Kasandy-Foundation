'use client'

import Image from 'next/image'

interface LogoProps {
  variant?: 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
}

const heights: Record<string, number> = { sm: 52, md: 64, lg: 80 }

export default function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const h = heights[size]
  return (
    <Image
      src={variant === 'light' ? '/KF_Logo_transparent.png' : '/KF_Logo.png'}
      alt="The Kasandy Foundation"
      height={h}
      width={h * 1.05}
      style={{
        height: h,
        width: 'auto',
        filter: variant === 'light' ? 'brightness(0) invert(1)' : 'none',
      }}
      priority
    />
  )
}
