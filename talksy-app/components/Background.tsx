'use client'

import { useTheme } from 'next-themes'
import PrismaticBurst from './PrismaticBurst'
import LiquidEther from './LiquidEther'

export default function Background() {
  const { theme } = useTheme()

  return (
    <div className="fixed inset-0 -z-10">
      {theme === 'light' ? (
        <div className="w-full h-full bg-[#121212]">
          <PrismaticBurst />
        </div>
      ) : (
        <LiquidEther />
      )}
    </div>
  )
}
