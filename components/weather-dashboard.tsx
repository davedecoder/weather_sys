"use client"

import { useMemo } from 'react'
import CurrentWeather from './current-weather'
import WeatherMetrics from './weather-metrics'
import ForecastCard from './forecast-card'

export default function WeatherDashboard({ data }: any) {
  const current = data?.current || {}
  const daily = data?.daily || {}
  const location = data?.location || {}

  const weekForecast = useMemo(() => {
    if (!daily.temperature_2m_max || !daily.temperature_2m_min || !daily.weather_code) {
      return []
    }
    
    return Array.from({ length: 7 }).map((_, i) => ({
      day: new Date(new Date().getTime() + i * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'short' }),
      high: daily.temperature_2m_max[i] ?? 0,
      low: daily.temperature_2m_min[i] ?? 0,
      weatherCode: daily.weather_code[i] ?? 0,
      precipitation: daily.precipitation_sum?.[i] ?? 0,
      uv: daily.uv_index_max?.[i] ?? 0,
    }))
  }, [daily])

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* HEADER WITH LOCATION */}
      <div className="border-b border-neon-cyan/20 pb-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-pixel text-neon-cyan/60 text-xs tracking-widest mb-2">[ LOCATION ]</p>
            <h1 className="font-pixel text-neon-cyan text-2xl md:text-4xl mb-1">
              {location.city ? location.city.toUpperCase() : 'LOADING...'}
            </h1>
            <p className="font-pixel text-neon-cyan/50 text-xs">{location.country || ''}</p>
          </div>
          <div className="text-right">
            <p className="font-pixel text-neon-pink text-xs tracking-widest">[ LIVE ]</p>
            <div className="w-2 h-2 bg-neon-pink rounded-full animate-pulse ml-auto mt-1"></div>
          </div>
        </div>
      </div>

      {/* MAIN CURRENT WEATHER */}
      <CurrentWeather current={current} />

      {/* METRICS GRID */}
      <WeatherMetrics current={current} />

      {/* WEEKLY FORECAST */}
      <div className="border border-neon-cyan/30 rounded-lg p-6 bg-space-800/30 backdrop-blur-sm">
        <p className="font-pixel text-neon-cyan/60 text-xs tracking-widest mb-6">[ 7-DAY FORECAST ]</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
          {weekForecast.map((day, idx) => (
            <ForecastCard key={idx} day={day} />
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="border-t border-neon-cyan/20 pt-4 text-center">
        <p className="font-pixel text-neon-cyan/40 text-xs">
          Data powered by Open-Meteo • Last updated {new Date().toLocaleTimeString()}
        </p>
      </div>
    </div>
  )
}
