"use client"

export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-space-900 via-space-800 to-space-900 flex flex-col items-center justify-center">
      <div className="relative w-24 h-24 mb-8">
        {/* Rotating rings */}
        <div className="absolute inset-0 border-2 border-transparent border-t-neon-cyan rounded-full animate-spin" style={{animationDuration: '3s'}}></div>
        <div className="absolute inset-4 border-2 border-transparent border-t-neon-pink rounded-full animate-spin" style={{animationDuration: '2s', animationDirection: 'reverse'}}></div>
        <div className="absolute inset-8 border-2 border-neon-cyan/40 rounded-full"></div>
      </div>
      
      <p className="font-pixel text-neon-cyan text-lg mb-2">INITIALIZING</p>
      <p className="font-pixel text-neon-cyan/50 text-xs tracking-widest">LOCATING... FETCHING DATA...</p>
      
      <div className="flex gap-1 mt-6">
        <div className="w-1 h-8 bg-neon-cyan/60 animate-pulse" style={{animationDelay: '0s'}}></div>
        <div className="w-1 h-8 bg-neon-cyan/60 animate-pulse" style={{animationDelay: '0.2s'}}></div>
        <div className="w-1 h-8 bg-neon-cyan/60 animate-pulse" style={{animationDelay: '0.4s'}}></div>
      </div>
    </div>
  )
}
