"use client"

interface TimelineItem {
  year: string
  title: string
  company: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="grid grid-cols-[48px_1fr] gap-4">
      {/* Timeline line and dots container */}
      <div className="relative">
        {/* Vertical line with enhanced cyberpunk glow and particle effects */}
        <div className="absolute left-8 top-4 h-[calc(100%-2rem)] w-1 -translate-x-1/2">
          {/* Main gradient line */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/80 rounded-full glow-line" />
          
          {/* Particle effects along the line */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-primary rounded-full
                         animate-particle opacity-0"
                style={{
                  animationDelay: `${i * 2}s`,
                  left: '50%',
                  transform: 'translateX(-50%)'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Timeline items */}
      <div className="space-y-12">
        {items.map((item, index) => (
          <div key={index} className="relative group">
            {/* Enhanced glowing dot with ripple effect */}
            <div className="absolute -left-10 top-8 -translate-y-1/2">
              {/* Core dot */}
              <div className="relative w-4 h-4">
                {/* Main dot with glow */}
                <div className="absolute inset-0 rounded-full bg-primary z-20
                              shadow-[0_0_15px_5px_rgba(var(--primary),.3)]
                              group-hover:shadow-[0_0_20px_8px_rgba(var(--primary),.5)]
                              transition-all duration-300" />
                
                {/* Ripple effects */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 z-10
                              animate-ripple-1 group-hover:border-primary/50" />
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 z-10
                              animate-ripple-2 group-hover:border-primary/40" />
                
                {/* Inner bright core */}
                <div className="absolute inset-2 rounded-full bg-primary z-30
                              shadow-[0_0_8px_2px_rgba(var(--primary),.4)]
                              group-hover:shadow-[0_0_12px_3px_rgba(var(--primary),.6)]
                              transition-all duration-300" />
              </div>
            </div>

            {/* Content card with enhanced cyberpunk style */}
            <div className="relative p-8 bg-black/80 border border-primary/30 rounded-lg
                          backdrop-blur-sm
                          shadow-[0_0_15px_0px_rgba(var(--primary),.15)]
                          hover:shadow-[0_0_25px_0px_rgba(var(--primary),.25)]
                          group-hover:border-primary/50
                          transition-all duration-300
                          before:absolute before:top-0 before:left-0 before:w-2 before:h-full
                          before:bg-gradient-to-r before:from-primary/30 before:to-transparent
                          after:absolute after:bottom-0 after:left-0 after:w-full after:h-1
                          after:bg-gradient-to-r after:from-primary/30 after:via-primary/10 after:to-transparent">
              
              {/* Year tag with enhanced cyberpunk effect */}
              <div className="inline-block px-4 py-1.5 mb-4 text-sm font-bold text-primary border border-primary/40
                            rounded bg-black/70
                            shadow-[0_0_12px_0px_rgba(var(--primary),.25)]
                            group-hover:shadow-[0_0_16px_0px_rgba(var(--primary),.35)]
                            transition-all duration-300">
                {item.year}
              </div>

              <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <div className="text-md text-primary/90 mb-3 font-semibold tracking-wide">{item.company}</div>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}