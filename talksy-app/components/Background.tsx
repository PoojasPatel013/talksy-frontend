 'use client'

import Aurora from './Aurora'
import LiquidEther from './LiquidEther'
import { useTheme } from './ThemeProvider'

export default function Background() {
  const { theme } = useTheme()

  return (
    <div className="fixed inset-0 -z-10">
      {theme === 'aurora' ? (
        <Aurora speed={0.3} />
      ) : (
        <LiquidEther autoSpeed={0.1} />
      )}
    </div>
  )
}
