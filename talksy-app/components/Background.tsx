'use client'

import PrismaticBurst from './PrismaticBurst'
import LiquidEther from './LiquidEther'
import { useTheme } from './ThemeProvider'

export default function Background() {
  const { theme } = useTheme()

  return (
    <div className="fixed inset-0 -z-10">
      {theme === 'prismatic' ? (
        <PrismaticBurst intensity={1.5} speed={0.3} animationType="rotate3d" />
      ) : (
        <LiquidEther />
      )}
    </div>
  )
}
