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
    <div className="relative">
      {/* Vertical line with enhanced cyberpunk glow */}
      <div className="absolute left-8 top-4 h-[calc(100%-2rem)] w-1 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/80 glow-line rounded-full" />

      {/* Timeline items */}
      <div className="space-y-12">
        {items.map((item, index) => (
          <div key={index} className="relative pl-20 group">
            {/* Glowing dot with pulse effect */}
            <div className="absolute left-8 top-8 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 -translate-y-1/2
                          shadow-[0_0_15px_5px_rgba(var(--primary),.3)]
                          group-hover:shadow-[0_0_20px_8px_rgba(var(--primary),.5)]
                          animate-pulse transition-shadow duration-300" />

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