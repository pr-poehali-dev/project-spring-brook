export default function Introduction() {
  return (
    <section id="about" className="relative z-10 bg-[#020d1a] text-white px-6 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">

        {/* Divider ornament */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-amber-400/60" />
          <span className="text-amber-400 text-xl">⚜</span>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-amber-400/60" />
        </div>

        <p className="text-amber-300/80 text-xs uppercase tracking-widest mb-4 font-light text-center">
          Интерактивный литературный квест
        </p>

        <h2 className="text-3xl md:text-4xl font-light text-white mb-8 leading-snug text-center">
          Три сестрицы под окном
          <br />
          <span className="italic text-amber-200">пряли поздно вечерком…</span>
        </h2>

        {/* Приветствие */}
        <div className="mb-10">
          <h3 className="text-amber-400 text-xs uppercase tracking-widest mb-3 font-light">Добро пожаловать!</h3>
          <p className="text-white/70 text-sm leading-relaxed mb-4">
            Дорогой читатель! Перед тобой — интерактивный квест по великой сказке Александра Сергеевича Пушкина
            «Сказка о царе Салтане, о сыне его славном и могучем богатыре князе Гвидоне Салтановиче и о прекрасной
            царевне Лебеди» (1831).
          </p>
          <p className="text-white/70 text-sm leading-relaxed">
            Тебя ждёт путешествие по страницам этой удивительной сказки: от тайного разговора трёх сестёр до
            счастливой встречи царя Салтана с семьёй на острове Буяне. Разгадывай загадки, расставляй события
            по порядку и докажи, что знаешь сказку Пушкина от начала до конца!
          </p>
        </div>

        {/* Уровни по Блуму */}
        <div className="mb-8">
          <h3 className="text-amber-400 text-xs uppercase tracking-widest mb-4 font-light">Три уровня по таксономии Блума</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { lvl: "1", name: "Знание", desc: "Вспомни и назови факты из сказки. 3 задания.", color: "border-sky-400/40 bg-sky-400/5 text-sky-300" },
              { lvl: "2", name: "Понимание", desc: "Объясни смысл событий и поступков героев. 3 задания.", color: "border-violet-400/40 bg-violet-400/5 text-violet-300" },
              { lvl: "3", name: "Применение", desc: "Используй знания, чтобы решить новую задачу. 3 задания.", color: "border-amber-400/40 bg-amber-400/5 text-amber-300" },
            ].map(({ lvl, name, desc, color }) => (
              <div key={lvl} className={`rounded-xl border px-4 py-4 ${color}`}>
                <div className="text-xs uppercase tracking-widest opacity-60 mb-1">Уровень {lvl}</div>
                <div className="text-sm font-medium mb-1">{name}</div>
                <div className="text-xs opacity-60 leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Инструкция */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 mb-8">
          <h3 className="text-amber-400 text-xs uppercase tracking-widest mb-4 font-light">Как проходить квест</h3>
          <ul className="space-y-3">
            {[
              { icon: "①", text: "Квест состоит из трёх уровней по таксономии Блума: Знание → Понимание → Применение." },
              { icon: "②", text: "На каждом уровне — 3 задания разного типа: выбор ответа, расстановка по порядку или выбор нескольких вариантов." },
              { icon: "③", text: "Читай инструкцию к каждому заданию — в ней указано, что именно нужно сделать." },
              { icon: "④", text: "Нажми «Проверить» или «Ответить» — сразу увидишь результат и объяснение." },
              { icon: "⑤", text: "В конце получишь итоговую школьную оценку по всем 9 заданиям." },
            ].map(({ icon, text }) => (
              <li key={icon} className="flex gap-3 text-sm text-white/60 leading-relaxed">
                <span className="text-amber-400 shrink-0 font-light">{icon}</span>
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Критерии оценивания */}
        <div className="bg-white/[0.03] border border-amber-400/20 rounded-2xl p-6 mb-12">
          <h3 className="text-amber-400 text-xs uppercase tracking-widest mb-4 font-light">Критерии оценивания</h3>
          <p className="text-white/50 text-xs mb-4">За каждый правильный ответ начисляется 1 балл. Итоговая оценка выставляется по результатам всех 9 заданий.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { grade: "5", label: "Отлично", range: "8–9 баллов", color: "border-green-400/40 bg-green-400/5 text-green-300" },
              { grade: "4", label: "Хорошо", range: "6–7 баллов", color: "border-blue-400/40 bg-blue-400/5 text-blue-300" },
              { grade: "3", label: "Удовлетворительно", range: "4–5 баллов", color: "border-amber-400/40 bg-amber-400/5 text-amber-300" },
              { grade: "2", label: "Неудовлетворительно", range: "0–3 балла", color: "border-red-400/40 bg-red-400/5 text-red-300" },
            ].map(({ grade, label, range, color }) => (
              <div key={grade} className={`rounded-xl border px-4 py-3 text-center ${color}`}>
                <div className="text-2xl font-light mb-1">{grade}</div>
                <div className="text-xs font-medium mb-0.5">{label}</div>
                <div className="text-xs opacity-60">{range}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mb-12">
          <div className="text-center">
            <div className="text-3xl font-light text-amber-300 mb-1">7</div>
            <div className="text-xs text-white/40 uppercase tracking-widest">глав</div>
          </div>
          <div className="h-8 w-px bg-amber-400/20 hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl font-light text-amber-300 mb-1">9</div>
            <div className="text-xs text-white/40 uppercase tracking-widest">заданий</div>
          </div>
          <div className="h-8 w-px bg-amber-400/20 hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl font-light text-amber-300 mb-1">∞</div>
            <div className="text-xs text-white/40 uppercase tracking-widest">волшебства</div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#quest"
            className="inline-block px-10 py-3.5 rounded-full bg-amber-400 text-black font-normal text-xs uppercase tracking-widest transition-all duration-200 hover:bg-amber-300 cursor-pointer"
          >
            Начать путешествие
          </a>
        </div>

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