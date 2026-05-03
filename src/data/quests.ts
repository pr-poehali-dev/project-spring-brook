export type TaskType = "choice" | "text-input" | "drag-drop" | "find-word"

export interface ChoiceTask {
  type: "choice"
  question: string
  options: string[]
  correct: number
}

export interface TextInputTask {
  type: "text-input"
  question: string
  hint: string
  correct: string[]
}

export interface DragDropTask {
  type: "drag-drop"
  question: string
  items: string[]
  correctOrder: number[]
}

export interface FindWordTask {
  type: "find-word"
  question: string
  words: string[]
  correct: string[]
}

export type Task = ChoiceTask | TextInputTask | DragDropTask | FindWordTask

export type BloomLevel = 1 | 2 | 3

export interface Quest {
  id: number
  title: string
  chapter: string
  instruction: string
  task: Task
  successMessage: string
  image?: string
  bloomLevel: BloomLevel
}

export const bloomMeta: Record<BloomLevel, { label: string; description: string; color: string; badge: string }> = {
  1: {
    label: "Уровень 1 · Знание",
    description: "Вспомни и назови факты из сказки",
    color: "text-sky-300",
    badge: "border-sky-400/40 bg-sky-400/10 text-sky-300",
  },
  2: {
    label: "Уровень 2 · Понимание",
    description: "Объясни смысл событий и поступков героев",
    color: "text-violet-300",
    badge: "border-violet-400/40 bg-violet-400/10 text-violet-300",
  },
  3: {
    label: "Уровень 3 · Применение",
    description: "Используй знания, чтобы решить новую задачу",
    color: "text-amber-300",
    badge: "border-amber-400/40 bg-amber-400/10 text-amber-300",
  },
}

export const quests: Quest[] = [
  // ─── УРОВЕНЬ 1: ЗНАНИЕ ───────────────────────────────────────────
  {
    id: 1,
    bloomLevel: 1,
    title: "Три сестрицы",
    chapter: "Уровень 1 · Знание",
    instruction: "Вспомни факты из начала сказки и выбери правильный ответ. Этот уровень проверяет, насколько хорошо ты запомнил события.",
    task: {
      type: "choice",
      question: "Что пообещала первая сестрица, если бы стала царицей?",
      options: [
        "Приготовить пир на весь мир",
        "Наткать полотна на весь мир",
        "Родить богатыря для царя",
      ],
      correct: 0,
    },
    successMessage: "Верно! Первая сестрица обещала устроить пир на весь мир.",
    image: "https://cdn.poehali.dev/projects/04626ec3-f7bb-46e9-a2f3-fa2bce633ddf/files/6f435e94-6e74-4f74-aac6-f17b94c08335.jpg",
  },
  {
    id: 2,
    bloomLevel: 1,
    title: "Чудеса острова",
    chapter: "Уровень 1 · Знание",
    instruction: "Вспомни, какие три чуда были на острове Буяне. Назови их, расставив карточки в правильном порядке.",
    task: {
      type: "drag-drop",
      question: "Расставь три чуда острова Буяна в том порядке, в котором они появляются в сказке:",
      items: [
        "Белка с золотыми орешками",
        "Тридцать три богатыря",
        "Царевна-лебедь",
      ],
      correctOrder: [0, 1, 2],
    },
    successMessage: "Правильно! Сначала белка, затем богатыри, а потом царевна-лебедь.",
    image: "https://cdn.poehali.dev/projects/04626ec3-f7bb-46e9-a2f3-fa2bce633ddf/files/fc19b04f-f259-4e26-a60a-490896343df0.jpg",
  },
  {
    id: 3,
    bloomLevel: 1,
    title: "Герои сказки",
    chapter: "Уровень 1 · Знание",
    instruction: "Вспомни и отметь всех персонажей, которые есть в сказке о царе Салтане.",
    task: {
      type: "find-word",
      question: "Отметь только тех персонажей, которые присутствуют в сказке:",
      words: ["Царь Салтан", "Гвидон", "Черномор", "Баба-Яга", "Царевна-лебедь", "Кощей"],
      correct: ["Царь Салтан", "Гвидон", "Черномор", "Царевна-лебедь"],
    },
    successMessage: "Верно! Баба-Яга и Кощей — герои других сказок Пушкина.",
    image: "https://cdn.poehali.dev/projects/04626ec3-f7bb-46e9-a2f3-fa2bce633ddf/files/6bfa0b6b-cf63-4a6f-bac9-37ac608e9279.jpg",
  },

  // ─── УРОВЕНЬ 2: ПОНИМАНИЕ ─────────────────────────────────────────
  {
    id: 4,
    bloomLevel: 2,
    title: "Зачем подменили письмо?",
    chapter: "Уровень 2 · Понимание",
    instruction: "Теперь нужно не просто вспомнить факт, а объяснить смысл поступка. Подумай, почему завистницы подменили письмо царю.",
    task: {
      type: "choice",
      question: "Почему ткачиха, повариха и Бабариха подменили письмо царю Салтану?",
      options: [
        "Они перепутали письма по ошибке",
        "Они завидовали царице и хотели её погубить",
        "Они хотели защитить царя от плохих новостей",
        "Царь сам попросил их изменить письмо",
      ],
      correct: 1,
    },
    successMessage: "Верно! Зависть к царице — главный мотив злодеек на протяжении всей сказки.",
    image: "https://cdn.poehali.dev/projects/04626ec3-f7bb-46e9-a2f3-fa2bce633ddf/files/6f435e94-6e74-4f74-aac6-f17b94c08335.jpg",
  },
  {
    id: 5,
    bloomLevel: 2,
    title: "Смысл превращений",
    chapter: "Уровень 2 · Понимание",
    instruction: "Объясни, зачем Гвидон превращался в насекомых. Выбери наиболее полный и точный ответ.",
    task: {
      type: "choice",
      question: "Для чего царевна-лебедь превращала Гвидона в насекомых?",
      options: [
        "Чтобы он мог летать быстрее ветра",
        "Чтобы он мог незаметно добраться до кораблей и попасть к отцу",
        "Чтобы наказать завистниц укусами",
        "Потому что Гвидон сам этого хотел",
      ],
      correct: 1,
    },
    successMessage: "Правильно! Превращение помогало Гвидону тайно путешествовать к отцу, которого он не мог посетить открыто.",
    image: "https://cdn.poehali.dev/projects/04626ec3-f7bb-46e9-a2f3-fa2bce633ddf/files/39f9351b-6582-4557-9fea-ec49f0844288.jpg",
  },
  {
    id: 6,
    bloomLevel: 2,
    title: "Цепочка событий",
    chapter: "Уровень 2 · Понимание",
    instruction: "Понимание — это умение видеть связь между событиями. Восстанови причинно-следственную цепочку: что за чем следует и почему.",
    task: {
      type: "drag-drop",
      question: "Расставь события в правильном порядке — от причины к следствию:",
      items: [
        "Царь узнаёт о чудесах острова Буяна",
        "Гвидон приглашает отца посетить остров",
        "Завистницы каждый раз отговаривают царя от поездки",
        "Царь всё же отплывает на остров",
        "Семья воссоединяется",
      ],
      correctOrder: [0, 1, 2, 3, 4],
    },
    successMessage: "Отлично! Ты верно выстроил логику развития событий в финальной части сказки.",
    image: "https://cdn.poehali.dev/projects/04626ec3-f7bb-46e9-a2f3-fa2bce633ddf/files/6bfa0b6b-cf63-4a6f-bac9-37ac608e9279.jpg",
  },

  // ─── УРОВЕНЬ 3: ПРИМЕНЕНИЕ ────────────────────────────────────────
  {
    id: 7,
    bloomLevel: 3,
    title: "Узнай героя",
    chapter: "Уровень 3 · Применение",
    instruction: "Применяй знания о героях сказки! Прочитай описание и определи, о ком идёт речь — без подсказки в виде имени.",
    task: {
      type: "choice",
      question: "«Месяц под косой блестит, а во лбу звезда горит; сама величава, выступает будто пава…» — о ком это?",
      options: [
        "О царице — матери Гвидона",
        "О царевне-лебедь",
        "О ткачихе",
        "О Бабарихе",
      ],
      correct: 1,
    },
    successMessage: "Верно! Это описание царевны-лебедь — одно из самых красивых в русской литературе.",
    image: "https://cdn.poehali.dev/projects/04626ec3-f7bb-46e9-a2f3-fa2bce633ddf/files/39f9351b-6582-4557-9fea-ec49f0844288.jpg",
  },
  {
    id: 8,
    bloomLevel: 3,
    title: "Продолжи сказку",
    chapter: "Уровень 3 · Применение",
    instruction: "Самое сложное задание! Представь, что ты продолжаешь сказку. Используй логику сюжета и выбери наиболее подходящее продолжение.",
    task: {
      type: "choice",
      question: "Если бы завистницы не подменили письмо царю, как бы скорее всего развивались события?",
      options: [
        "Царь всё равно отправил бы царицу в бочке — он был жестоким",
        "Царь приехал бы к царице, и семья никогда бы не разлучилась",
        "Гвидон никогда не попал бы на остров Буян",
        "Царевна-лебедь не появилась бы в сказке",
      ],
      correct: 1,
    },
    successMessage: "Правильно! Подмена письма — ключевой злодейский поступок, без которого вся история разлуки не случилась бы.",
    image: "https://cdn.poehali.dev/projects/04626ec3-f7bb-46e9-a2f3-fa2bce633ddf/files/6f435e94-6e74-4f74-aac6-f17b94c08335.jpg",
  },
  {
    id: 9,
    bloomLevel: 3,
    title: "Главная мысль",
    chapter: "Уровень 3 · Применение",
    instruction: "Последнее задание — самое глубокое. Применяй всё, что узнал о сказке, чтобы выбрать главную мысль, которую Пушкин вложил в произведение.",
    task: {
      type: "find-word",
      question: "Отметь все идеи, которые отражают главные мысли сказки о царе Салтане:",
      words: [
        "Зависть и ложь всегда наказуемы",
        "Добро и любовь побеждают зло",
        "Сильный всегда побеждает слабого",
        "Семья и верность важнее богатства",
        "Хитрость — лучшее оружие",
      ],
      correct: ["Зависть и ложь всегда наказуемы", "Добро и любовь побеждают зло", "Семья и верность важнее богатства"],
    },
    successMessage: "Отлично! Ты понял глубокий смысл сказки Пушкина. Добро торжествует, семья воссоединяется, а зло остаётся ни с чем.",
    image: "https://cdn.poehali.dev/projects/04626ec3-f7bb-46e9-a2f3-fa2bce633ddf/files/39f9351b-6582-4557-9fea-ec49f0844288.jpg",
  },
]
