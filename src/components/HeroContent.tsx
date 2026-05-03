export default function HeroContent() {
  return (
    <main className="absolute bottom-8 left-8 z-20 max-w-lg">
      <div className="text-left">
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-white/90 text-xs font-light relative z-10">✦ Интерактивный квест по сказке А.С. Пушкина</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl md:leading-16 tracking-tight font-light text-white mb-4">
          <span className="font-medium italic">Сказка</span> о царе
          <br />
          <span className="font-light tracking-tight text-amber-200">Салтане</span>
        </h1>

        {/* Description */}
        <p className="text-xs font-light text-white/70 mb-4 leading-relaxed">
          Отправься в захватывающее путешествие по волшебному миру Пушкина. Разгадывай загадки, помогай героям
          и открывай тайны острова Буяна вместе с богатырями и царевной-лебедью.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4 flex-wrap">
          <button className="px-8 py-3 rounded-full bg-transparent border border-amber-300/40 text-white font-normal text-xs transition-all duration-200 hover:bg-amber-300/10 hover:border-amber-300/60 cursor-pointer">
            О квесте
          </button>
          <button className="px-8 py-3 rounded-full bg-amber-300 text-black font-normal text-xs transition-all duration-200 hover:bg-amber-200 cursor-pointer">
            Начать квест
          </button>
        </div>
      </div>
    </main>
  )
}