'use client'

import Image from 'next/image'

interface LogoProps {
  variant?: 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
}

const heights: Record<string, number> = { sm: 36, md: 44, lg: 56 }

export default function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const h = heights[size]
  return (
    <Image
      src="/KF_Logo.png"
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
