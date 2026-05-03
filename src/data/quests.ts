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

export interface Quest {
  id: number
  title: string
  chapter: string
  instruction: string
  task: Task
  successMessage: string
  image?: string
}

export const quests: Quest[] = [
  {
    id: 1,
    title: "Три сестрицы",
    chapter: "Глава 1 · Начало сказки",
    instruction: "Прочитай вопрос и выбери один правильный ответ. Вспомни самое начало сказки!",
    task: {
      type: "choice",
      question: "Что пообещала первая сестрица, если бы стала царицей?",
      options: [
        "Приготовить пир на весь мир",
        "Наткать полотна на весь мир",
        "Родить богатыря",
      ],
      correct: 0,
    },
    successMessage: "Верно! Первая сестрица обещала устроить пир на весь мир.",
    image: "https://cdn.poehali.dev/projects/04626ec3-f7bb-46e9-a2f3-fa2bce633ddf/files/6f435e94-6e74-4f74-aac6-f17b94c08335.jpg",
  },
  {
    id: 2,
    title: "Царица",
    chapter: "Глава 1 · Начало сказки",
    instruction: "Выбери правильный ответ. Царь Салтан подслушал разговор трёх сестёр и принял важное решение.",
    task: {
      type: "choice",
      question: "Какое обещание дала третья сестрица, которую царь взял в жёны?",
      options: [
        "Испечь хлеб для всего царства",
        "Родить богатыря для царя",
        "Соткать ковёр невиданной красоты",
        "Сшить кафтан из золотой нити",
      ],
      correct: 1,
    },
    successMessage: "Правильно! Третья сестрица обещала родить богатыря — и стала царицей.",
    image: "https://cdn.poehali.dev/projects/04626ec3-f7bb-46e9-a2f3-fa2bce633ddf/files/6f435e94-6e74-4f74-aac6-f17b94c08335.jpg",
  },
  {
    id: 3,
    title: "Письмо царю",
    chapter: "Глава 2 · Злой умысел",
    instruction:
      "Расставь события по порядку — перетащи карточки так, чтобы получилась правильная цепочка. Что произошло, когда царица родила сына?",
    task: {
      type: "drag-drop",
      question: "Расставь события в правильном порядке:",
      items: [
        "Царица родила сына Гвидона",
        "Завистницы подменили письмо царю",
        "Царь Салтан ушёл на войну",
        "Царицу с сыном посадили в бочку",
        "Бочку бросили в море",
      ],
      correctOrder: [2, 0, 1, 3, 4],
    },
    successMessage: "Отлично! Ты правильно восстановил ход событий.",
    image: "https://cdn.poehali.dev/projects/04626ec3-f7bb-46e9-a2f3-fa2bce633ddf/files/6f435e94-6e74-4f74-aac6-f17b94c08335.jpg",
  },
  {
    id: 4,
    title: "Остров Буян",
    chapter: "Глава 3 · Чудесное спасение",
    instruction: "Введи ответ с клавиатуры. Вспомни, как называлось волшебное место, где оказался Гвидон.",
    task: {
      type: "text-input",
      question: "Как называется остров, на котором оказались царица и Гвидон?",
      hint: "Подсказка: «мимо острова … корабли плывут»",
      correct: ["буян", "остров буян"],
    },
    successMessage: "Верно! Остров Буян — волшебное место в сказке Пушкина.",
    image: "https://cdn.poehali.dev/projects/04626ec3-f7bb-46e9-a2f3-fa2bce633ddf/files/6bfa0b6b-cf63-4a6f-bac9-37ac608e9279.jpg",
  },
  {
    id: 5,
    title: "Белка-чудесница",
    chapter: "Глава 3 · Чудеса острова",
    instruction: "Выбери правильный ответ. На острове Буяне Гвидон увидел необычную белку.",
    task: {
      type: "choice",
      question: "Что делала волшебная белка под елью на острове Буяне?",
      options: [
        "Пела песни и плясала",
        "Грызла золотые орешки с изумрудными ядрами",
        "Ткала золотую ткань",
        "Охраняла дворец Гвидона",
      ],
      correct: 1,
    },
    successMessage: "Правильно! Белочка грызла орешки с золотой скорлупой и изумрудными ядрами.",
    image: "https://cdn.poehali.dev/projects/04626ec3-f7bb-46e9-a2f3-fa2bce633ddf/files/fc19b04f-f259-4e26-a60a-490896343df0.jpg",
  },
  {
    id: 6,
    title: "Царевна-лебедь",
    chapter: "Глава 4 · Волшебница",
    instruction:
      "Выбери все правильные ответы — отметь слова, которые описывают царевну-лебедь. Перечитай описание из сказки!",
    task: {
      type: "find-word",
      question: "Отметь все слова, которые Пушкин использует для описания царевны-лебедь:",
      words: ["месяц под косой", "звезда во лбу", "золотые крылья", "синие глаза", "зари алее"],
      correct: ["месяц под косой", "звезда во лбу", "зари алее"],
    },
    successMessage: "Верно! Месяц под косой, звезда во лбу — так описывает Пушкин царевну.",
    image: "https://cdn.poehali.dev/projects/04626ec3-f7bb-46e9-a2f3-fa2bce633ddf/files/39f9351b-6582-4557-9fea-ec49f0844288.jpg",
  },
  {
    id: 7,
    title: "Тридцать три богатыря",
    chapter: "Глава 4 · Чудеса",
    instruction: "Введи число с клавиатуры. Это одно из самых известных чудес острова Буяна!",
    task: {
      type: "text-input",
      question: "Сколько богатырей выходило из моря вместе с дядькой Черномором?",
      hint: "Подсказка: «… витязей прекрасных»",
      correct: ["33", "тридцать три"],
    },
    successMessage: "Отлично! Тридцать три богатыря — грозная дружина острова Буяна.",
    image: "https://cdn.poehali.dev/projects/04626ec3-f7bb-46e9-a2f3-fa2bce633ddf/files/6bfa0b6b-cf63-4a6f-bac9-37ac608e9279.jpg",
  },
  {
    id: 8,
    title: "Превращения Гвидона",
    chapter: "Глава 5 · Путешествия",
    instruction:
      "Расставь в правильном порядке — в кого превращался Гвидон, когда летел к отцу на корабли купцов?",
    task: {
      type: "drag-drop",
      question: "В каком порядке Гвидон превращался в насекомых?",
      items: ["Шмель", "Комар", "Муха"],
      correctOrder: [1, 2, 0],
    },
    successMessage: "Правильно! Сначала комар, потом муха, а потом шмель.",
    image: "https://cdn.poehali.dev/projects/04626ec3-f7bb-46e9-a2f3-fa2bce633ddf/files/39f9351b-6582-4557-9fea-ec49f0844288.jpg",
  },
  {
    id: 9,
    title: "Ткачиха и повариха",
    chapter: "Глава 6 · Злодеи",
    instruction: "Выбери правильный ответ. Завистницы снова и снова мешали царю узнать правду об острове Буяне.",
    task: {
      type: "choice",
      question: "Кто постоянно мешал царю Салтану узнать правду о чудесном острове?",
      options: [
        "Злой колдун и его слуги",
        "Ткачиха, повариха и сватья баба Бабариха",
        "Три морских царя",
        "Завистливые купцы",
      ],
      correct: 1,
    },
    successMessage: "Верно! Ткачиха, повариха и Бабариха — главные злодейки сказки.",
    image: "https://cdn.poehali.dev/projects/04626ec3-f7bb-46e9-a2f3-fa2bce633ddf/files/6f435e94-6e74-4f74-aac6-f17b94c08335.jpg",
  },
  {
    id: 10,
    title: "Счастливый конец",
    chapter: "Глава 7 · Развязка",
    instruction:
      "Последнее задание! Выбери все правильные ответы — что произошло в конце сказки? Вспомни финал!",
    task: {
      type: "find-word",
      question: "Отметь всё, что случилось в счастливой развязке сказки:",
      words: [
        "Царь Салтан узнал сына",
        "Гвидон женился на царевне-лебедь",
        "Злодеек казнили",
        "Царица воссоединилась с царём",
        "Остров Буян исчез",
      ],
      correct: ["Царь Салтан узнал сына", "Гвидон женился на царевне-лебедь", "Царица воссоединилась с царём"],
    },
    successMessage:
      "Поздравляем! Ты прошёл квест и узнал всю сказку о царе Салтане. Царь нашёл семью, Гвидон обрёл невесту — и все жили счастливо!",
    image: "https://cdn.poehali.dev/projects/04626ec3-f7bb-46e9-a2f3-fa2bce633ddf/files/39f9351b-6582-4557-9fea-ec49f0844288.jpg",
  },
]