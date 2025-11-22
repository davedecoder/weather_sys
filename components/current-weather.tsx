"use client"

import { getWeatherDescription, getWeatherIcon } from '@/lib/weather-utils'

export default function CurrentWeather({ current }: any) {
  const weatherDesc = getWeatherDescription(current?.weather_code || 0)
  const weatherIcon = getWeatherIcon(current?.weather_code || 0)
  
  const temp = current?.temperature_2m ?? 0
  const apparentTemp = current?.apparent_temperature ?? 0
  const humidity = current?.humidity ?? 0
  const windSpeed = current?.wind_speed_10m ?? 0
  const precipitation = current?.precipitation ?? 0

  return (
    <div className="relative border border-neon-cyan/40 rounded-lg p-8 bg-gradient-to-br from-space-700/40 to-space-900/40 backdrop-blur-md overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 via-transparent to-neon-pink/5 pointer-events-none"></div>
      
      {/* LED corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-cyan/60"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-cyan/60"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-cyan/60"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-cyan/60"></div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left side - Temperature display */}
        <div className="text-center md:text-left">
          <div className="inline-block md:block">
            <p className="font-pixel text-neon-cyan/60 text-xs tracking-widest mb-3">[ CURRENT ]</p>
            <div className="text-7xl md:text-8xl font-pixel text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-cyan/60 leading-none">
              {Math.round(temp)}°
            </div>
            <p className="font-pixel text-neon-cyan/50 text-sm mt-2">Feels like {Math.round(apparentTemp)}°</p>
            <p className="font-pixel text-neon-pink text-xs mt-4 tracking-wider">{weatherDesc.toUpperCase()}</p>
          </div>
        </div>

        {/* Right side - Weather icon */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
            {/* Outer glow circle */}
            <div className="absolute inset-0 rounded-full border border-neon-cyan/30 animate-pulse"></div>
            <div className="absolute inset-2 rounded-full border border-neon-cyan/20"></div>
            
            {/* Icon container */}
            <div className="relative z-10 text-6xl md:text-7xl filter drop-shadow-lg" style={{textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'}}>
              {weatherIcon}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="relative mt-8 pt-6 border-t border-neon-cyan/20 grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="font-pixel text-neon-cyan/50 text-xs mb-1">HUMIDITY</p>
          <p className="font-pixel text-neon-pink text-lg">{Math.round(humidity)}%</p>
        </div>
        <div>
          <p className="font-pixel text-neon-cyan/50 text-xs mb-1">WIND</p>
          <p className="font-pixel text-neon-pink text-lg">{Math.round(windSpeed)} km/h</p>
        </div>
        <div>
          <p className="font-pixel text-neon-cyan/50 text-xs mb-1">RAIN</p>
          <p className="font-pixel text-neon-pink text-lg">{Math.round(precipitation * 10) / 10}mm</p>
        </div>
      </div>
    </div>
  )
}
