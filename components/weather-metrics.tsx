"use client"

export default function WeatherMetrics({ current }: any) {
  const uv = current?.uv_index ?? 0
  const windDir = current?.wind_direction_10m ?? 0
  const apparentTemp = current?.apparent_temperature ?? 0
  const humidity = current?.relative_humidity_2m ?? 0

  const metrics = [
    {
      label: 'HUMIDITY',
      value: Math.round(humidity),
      unit: '%',
      icon: '💧',
      color: 'neon-cyan'
    },
    {
      label: 'UV INDEX',
      value: Math.round(uv * 10) / 10,
      unit: '',
      icon: '☀️',
      color: 'neon-pink'
    },
    {
      label: 'WIND DIR',
      value: Math.round(windDir),
      unit: '°',
      icon: '💨',
      color: 'neon-cyan'
    },
    {
      label: 'FEELS LIKE',
      value: Math.round(apparentTemp),
      unit: '°C',
      icon: '🌡️',
      color: 'neon-pink'
    },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, idx) => (
        <div
          key={idx}
          className={`border border-${metric.color}/30 rounded-lg p-6 bg-space-800/40 backdrop-blur-sm hover:border-${metric.color}/60 transition-all duration-300 relative group overflow-hidden`}
        >
          {/* Hover glow */}
          <div className={`absolute inset-0 bg-gradient-to-r from-${metric.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
          
          {/* LED corner */}
          <div className={`absolute top-0 left-0 w-2 h-2 bg-${metric.color}/60`}></div>
          
          <div className="relative z-10">
            <p className="font-pixel text-xs tracking-widest text-neon-cyan/60 mb-4">{metric.label}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl">{metric.icon}</span>
              <div className="font-pixel text-3xl text-neon-cyan">
                {metric.value}
                <span className={`text-lg text-${metric.color} ml-1`}>{metric.unit}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
