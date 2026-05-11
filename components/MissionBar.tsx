export default function MissionBar() {
  return (
    <div className="bg-brown-deep px-6 md:px-8 py-2.5 flex flex-wrap items-center justify-between gap-2">
      <span className="font-montserrat text-[10px] font-bold tracking-[2.5px] uppercase text-white/90">
        Nothing and No One Is Wasted
      </span>
      <div className="flex items-center gap-2">
        <span className="font-montserrat text-[9px] uppercase tracking-[1.5px] text-white/50">
          Supported by
        </span>
        {['FFBC', 'SBCCI', 'City of Vancouver'].map(name => (
          <span
            key={name}
            className="bg-white/15 border border-white/25 text-white font-montserrat text-[10px] font-bold px-2.5 py-0.5 rounded-full"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}
