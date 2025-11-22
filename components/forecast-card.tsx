"use client"

import { getWeatherIcon } from '@/lib/weather-utils'

export default function ForecastCard({ day }: any) {
  const icon = getWeatherIcon(day?.weatherCode || 0)
  
  const high = day?.high ?? 0
  const low = day?.low ?? 0
  const precipitation = day?.precipitation ?? 0

  return (
    <div className="border border-neon-cyan/30 rounded-lg p-4 bg-space-800/50 backdrop-blur-sm hover:border-neon-pink/50 hover:bg-space-800/70 transition-all duration-300 text-center relative group">
      {/* LED accent */}
      <div className="absolute top-0 left-0 w-1 h-1 bg-neon-cyan/60 rounded-full"></div>
      
      <p className="font-pixel text-xs text-neon-cyan/60 mb-3 uppercase tracking-wider">{day?.day || 'N/A'}</p>
      <div className="text-4xl mb-3 flex justify-center">{icon}</div>
      <div className="space-y-2">
        <div>
          <p className="font-pixel text-xs text-neon-cyan/50 mb-1">Temp</p>
          <p className="font-pixel text-sm text-neon-cyan">
            {Math.round(high)}° / {Math.round(low)}°
          </p>
        </div>
        <div className="pt-2 border-t border-neon-cyan/20">
          <p className="font-pixel text-xs text-neon-cyan/50 mb-1">Rain</p>
          <p className="font-pixel text-sm text-neon-pink">{Math.round(precipitation * 10) / 10}mm</p>
        </div>
      </div>
    </div>
  )
}
