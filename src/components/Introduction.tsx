export default function Introduction() {
  return (
    <section className="relative z-10 bg-[#020d1a] text-white px-6 py-20 md:py-28">
      <div className="max-w-3xl mx-auto text-center">

        {/* Divider ornament */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-amber-400/60" />
          <span className="text-amber-400 text-xl">⚜</span>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-amber-400/60" />
        </div>

        <p className="text-amber-300/80 text-xs uppercase tracking-widest mb-4 font-light">
          Интерактивный квест
        </p>

        <h2 className="text-3xl md:text-4xl font-light text-white mb-8 leading-snug">
          Три сестрицы под окном
          <br />
          <span className="italic text-amber-200">пряли поздно вечерком…</span>
        </h2>

        <p className="text-white/60 text-sm leading-relaxed mb-6 font-light">
          Давным-давно, в тридевятом царстве, царь Салтан услышал заветные слова —
          и судьба трёх сестёр изменилась навсегда. Молодая царица отправилась в далёкое
          плаванье, а её сын Гвидон явился на свет прямо посреди бушующего моря.
        </p>

        <p className="text-white/60 text-sm leading-relaxed mb-12 font-light">
          Тебя ждёт путешествие по страницам великой сказки Александра Сергеевича Пушкина.
          Разгадывай загадки, помогай Гвидону, освобождай царевну-лебедь и открывай
          чудеса острова Буяна. Каждый верный ответ приближает тебя к счастливой развязке.
        </p>

        {/* Stats row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mb-12">
          <div className="text-center">
            <div className="text-3xl font-light text-amber-300 mb-1">7</div>
            <div className="text-xs text-white/40 uppercase tracking-widest">глав</div>
          </div>
          <div className="h-8 w-px bg-amber-400/20 hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl font-light text-amber-300 mb-1">30+</div>
            <div className="text-xs text-white/40 uppercase tracking-widest">заданий</div>
          </div>
          <div className="h-8 w-px bg-amber-400/20 hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl font-light text-amber-300 mb-1">∞</div>
            <div className="text-xs text-white/40 uppercase tracking-widest">волшебства</div>
          </div>
        </div>

        <a
          href="#quest"
          className="inline-block px-10 py-3.5 rounded-full bg-amber-400 text-black font-normal text-xs uppercase tracking-widest transition-all duration-200 hover:bg-amber-300 cursor-pointer"
        >
          Начать путешествие
        </a>

        {/* Bottom ornament */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-amber-400/30" />
          <span className="text-amber-400/40 text-sm">✦ ✦ ✦</span>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-amber-400/30" />
        </div>

      </div>
    </section>
  )
}