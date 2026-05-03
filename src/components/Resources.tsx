export default function Resources() {
  const resources = [
    {
      category: "Основной текст",
      items: [
        {
          title: "Пушкин А.С. «Сказка о царе Салтане»",
          description: "Полный текст сказки на сайте РВБ (Русская виртуальная библиотека)",
          url: "https://rvb.ru/pushkin/01text/03fables/01fables/0792.htm",
          label: "rvb.ru",
        },
        {
          title: "Сказка о царе Салтане — Wikisource",
          description: "Текст сказки с примечаниями в Викитеке",
          url: "https://ru.wikisource.org/wiki/%D0%A1%D0%BA%D0%B0%D0%B7%D0%BA%D0%B0_%D0%BE_%D1%86%D0%B0%D1%80%D0%B5_%D0%A1%D0%B0%D0%BB%D1%82%D0%B0%D0%BD%D0%B5_(%D0%9F%D1%83%D1%88%D0%BA%D0%B8%D0%BD)",
          label: "wikisource.org",
        },
      ],
    },
    {
      category: "Иллюстрации",
      items: [
        {
          title: "Иллюстрации И.Я. Билибина к сказкам Пушкина",
          description: "Коллекция оригинальных иллюстраций Ивана Билибина в высоком разрешении",
          url: "https://www.livelib.ru/author/12027/top-ivan-bilibin",
          label: "livelib.ru",
        },
        {
          title: "Мультфильм «Сказка о царе Салтане» (Союзмультфильм, 1984)",
          description: "Классический советский мультипликационный фильм по сказке Пушкина",
          url: "https://www.youtube.com/watch?v=_8jxkEi_tog",
          label: "youtube.com",
        },
      ],
    },
    {
      category: "Для углублённого изучения",
      items: [
        {
          title: "Пушкин А.С. — Собрание сочинений в 10 томах",
          description: "М.: Государственное издательство художественной литературы, 1959–1962. Том 3.",
          url: null,
          label: "Книга",
        },
        {
          title: "Непомнящий В.С. «Поэзия и судьба»",
          description: "Статьи и заметки о Пушкине. М.: Советский писатель, 1983.",
          url: null,
          label: "Книга",
        },
        {
          title: "Энциклопедия «Пушкин и его время»",
          description: "Подробный разбор мотивов, героев и истории создания сказок Пушкина",
          url: "https://pushkin.niv.ru",
          label: "pushkin.niv.ru",
        },
      ],
    },
  ]

  return (
    <section className="relative bg-[#010b16] px-6 py-20 border-t border-white/5">
      <div className="max-w-3xl mx-auto">

        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400/40" />
          <span className="text-amber-400/60 text-sm">⚜</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400/40" />
        </div>

        <p className="text-amber-300/70 text-xs uppercase tracking-widest mb-2 text-center font-light">Список источников</p>
        <h2 className="text-white text-2xl font-light text-center mb-10">Ресурсы и литература</h2>

        <div className="space-y-8">
          {resources.map(({ category, items }) => (
            <div key={category}>
              <h3 className="text-amber-400/70 text-xs uppercase tracking-widest mb-4 font-light">{category}</h3>
              <div className="space-y-3">
                {items.map(({ title, description, url, label }) => (
                  <div key={title} className="flex gap-4 bg-white/[0.02] border border-white/8 rounded-xl px-5 py-4 hover:border-amber-400/20 transition-colors duration-200">
                    <div className="flex-1 min-w-0">
                      <p className="text-white/90 text-sm font-light mb-1">{title}</p>
                      <p className="text-white/40 text-xs leading-relaxed">{description}</p>
                    </div>
                    {url ? (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 self-center px-3 py-1.5 rounded-lg border border-amber-400/30 text-amber-400 text-xs hover:bg-amber-400/10 transition-colors duration-200"
                      >
                        {label}
                      </a>
                    ) : (
                      <span className="shrink-0 self-center px-3 py-1.5 rounded-lg border border-white/10 text-white/30 text-xs">
                        {label}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-12">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-amber-400/20" />
          <span className="text-white/20 text-xs">А.С. Пушкин · 1831</span>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-amber-400/20" />
        </div>

      </div>
    </section>
  )
}
