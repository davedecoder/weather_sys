"use client"

import { useEffect, useState } from 'react'
import WeatherDashboard from '@/components/weather-dashboard'
import LoadingScreen from '@/components/loading-screen'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [weatherData, setWeatherData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getWeather = async () => {
      try {
        // Get user's geolocation
        if (!navigator.geolocation) {
          throw new Error('Geolocation not supported')
        }

        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords
            
            // Fetch weather data from Open-Meteo API (free, no key needed)
            // `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,wind_speed_10m,wind_direction_10m,humidity,apparent_temperature,uv_index,precipitation,relative_humidity_2m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,uv_index_max,relative_humidity_2m_max&timezone=auto`
            const response = await fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,precipitation,wind_speed_10m,wind_direction_10m,relative_humidity_2m,uv_index&timezone=auto`
            )
            
            const data = await response.json()
            
            // Reverse geocode to get location name
            const geoResponse = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            )
            const geoData = await geoResponse.json()
            
            console.log('Weather Data:', data)
            console.log('Location Data:', geoData)
            
            setWeatherData({
              ...data,
              location: {
                city: geoData.address?.city || geoData.address?.town || 'Unknown',
                country: geoData.address?.country || ''
              }
            })
            setIsLoading(false)
          },
          (err) => {
            setError('Unable to get your location. Please enable location services.')
            setIsLoading(false)
          }
        )
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        setIsLoading(false)
      }
    }

    getWeather()
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-space-900 via-space-800 to-space-900 flex items-center justify-center p-4">
        <div className="text-center">
          <p className="text-neon-cyan text-lg mb-4">⚠️ ERROR</p>
          <p className="text-neon-cyan/70 font-pixel text-sm">{error}</p>
          <p className="text-neon-cyan/50 font-pixel text-xs mt-4">Please refresh and enable location access</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-space-900 via-space-800 to-space-900 p-4 md:p-8">
      {weatherData && <WeatherDashboard data={weatherData} />}
    </main>
  )
}
