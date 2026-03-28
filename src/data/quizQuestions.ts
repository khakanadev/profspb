import type { QuizQuestion } from '../types/quiz'

export const quizQuestions: readonly QuizQuestion[] = [
  {
    id: 'q1',
    prompt: 'Что в учёбе даёт вам наибольший заряд?',
    options: [
      {
        id: 'q1-a',
        label: 'Доказательства, строгие выводы и «почему так устроено»',
        weights: { science: 3, electronics: 1 },
      },
      {
        id: 'q1-b',
        label: 'Проекты и устройства, которые можно собрать и потрогать',
        weights: { stem: 3, electronics: 2 },
      },
      {
        id: 'q1-c',
        label: 'Код, продукты и то, как софт влияет на людей',
        weights: { digital: 3, telecom: 1 },
      },
      {
        id: 'q1-d',
        label: 'Люди: мотивация, общение, развитие других',
        weights: { pedagogy: 3, management: 1 },
      },
    ],
  },
  {
    id: 'q2',
    prompt: 'Какой школьный предмет вы бы выбрали первым для углубления?',
    options: [
      { id: 'q2-a', label: 'Математика / физика', weights: { science: 2, stem: 2, digital: 1 } },
      {
        id: 'q2-b',
        label: 'Информатика',
        weights: { digital: 3, telecom: 1 },
      },
      {
        id: 'q2-c',
        label: 'Общество, экономика, право',
        weights: { econ: 2, management: 2 },
      },
      {
        id: 'q2-d',
        label: 'Литература / языки / психология',
        weights: { pedagogy: 2, science: 1 },
      },
    ],
  },
  {
    id: 'q3',
    prompt: 'Какая задача звучит интереснее?',
    options: [
      {
        id: 'q3-a',
        label: 'Упрочнить конструкцию или просчитать узел детали',
        weights: { stem: 3, arch: 1 },
      },
      {
        id: 'q3-b',
        label: 'Оптимизировать алгоритм или интерфейс',
        weights: { digital: 3 },
      },
      {
        id: 'q3-c',
        label: 'Разнести бюджет и риски по сценариям',
        weights: { econ: 3, management: 1 },
      },
      {
        id: 'q3-d',
        label: 'Провести занятие или мастер-класс так, чтобы всем было ясно',
        weights: { pedagogy: 3 },
      },
    ],
  },
  {
    id: 'q4',
    prompt: 'Где вам комфортнее мыслить?',
    options: [
      { id: 'q4-a', label: 'В лаборатории или в полевых условиях', weights: { geology: 2, science: 2 } },
      {
        id: 'q4-b',
        label: 'В чертежах, моделях и 3D',
        weights: { arch: 3, stem: 1 },
      },
      {
        id: 'q4-c',
        label: 'В терминале, IDE и документации',
        weights: { digital: 3, telecom: 1 },
      },
      {
        id: 'q4-d',
        label: 'В аудитории, школе или с клиентом один на один',
        weights: { pedagogy: 2, management: 1, econ: 1 },
      },
    ],
  },
  {
    id: 'q5',
    prompt: 'Что ближе к вашей мечте через 5–7 лет?',
    options: [
      { id: 'q5-a', label: 'Исследование и публикации', weights: { science: 3 } },
      {
        id: 'q5-b',
        label: 'Инженерный лид проекта в технике',
        weights: { stem: 3, electronics: 1 },
      },
      {
        id: 'q5-c',
        label: 'Продукт или стартап в цифре',
        weights: { digital: 3, econ: 1 },
      },
      {
        id: 'q5-d',
        label: 'Руководитель команды / госслужба / управление школой',
        weights: { management: 3, pedagogy: 1 },
      },
    ],
  },
  {
    id: 'q6',
    prompt: 'Как относитесь к «железу» и схемам?',
    options: [
      {
        id: 'q6-a',
        label: 'Обожаю: паяльник, платы, радиодетали',
        weights: { electronics: 3, telecom: 2 },
      },
      {
        id: 'q6-b',
        label: 'Спокойно, если есть смысл для продукта',
        weights: { digital: 2, stem: 1 },
      },
      {
        id: 'q6-c',
        label: 'Предпочитаю абстракции и софт',
        weights: { digital: 2, econ: 1, science: 1 },
      },
      {
        id: 'q6-d',
        label: 'Скорее про людей и процессы, не про технику',
        weights: { pedagogy: 2, management: 2 },
      },
    ],
  },
  {
    id: 'q7',
    prompt: 'Экономика и финансы для вас — это…',
    options: [
      { id: 'q7-a', label: 'Главный интерес: рынки и модели', weights: { econ: 3 } },
      {
        id: 'q7-b',
        label: 'Инструмент для управления проектом',
        weights: { management: 2, stem: 1 },
      },
      { id: 'q7-c', label: 'Фон, важный, но не центр жизни', weights: { science: 1, digital: 1 } },
      {
        id: 'q7-d',
        label: 'Тема для обсуждения с людьми и в политике',
        weights: { pedagogy: 1, management: 2 },
      },
    ],
  },
  {
    id: 'q8',
    prompt: 'Городская среда и здания:',
    options: [
      {
        id: 'q8-a',
        label: 'Хочу проектировать и менять облик города',
        weights: { arch: 3 },
      },
      {
        id: 'q8-b',
        label: 'Больше про инфраструктуру связи и умный дом',
        weights: { telecom: 2, digital: 2 },
      },
      {
        id: 'q8-c',
        label: 'Интересует подземка, шахты, промышленная безопасность',
        weights: { geology: 3 },
      },
      {
        id: 'q8-d',
        label: 'Не моя центральная тема',
        weights: { science: 1 },
      },
    ],
  },
  {
    id: 'q9',
    prompt: 'Связь и сети (интернет, мобильная связь):',
    options: [
      { id: 'q9-a', label: 'Хочу разбираться в протоколах и архитектуре сетей', weights: { telecom: 3, digital: 1 } },
      {
        id: 'q9-b',
        label: 'Интересна только как пользователь',
        weights: { pedagogy: 1 },
      },
      {
        id: 'q9-c',
        label: 'Важна для моего ИТ-продукта',
        weights: { digital: 2 },
      },
      {
        id: 'q9-d',
        label: 'Не в фокусе',
        weights: { science: 1 },
      },
    ],
  },
  {
    id: 'q10',
    prompt: 'На открытом дне вуза вы бы пошли слушать про…',
    options: [
      { id: 'q10-a', label: 'Физика / химия / биология как наука', weights: { science: 3 } },
      {
        id: 'q10-b',
        label: 'Роботы и машиностроение',
        weights: { stem: 2, electronics: 2 },
      },
      {
        id: 'q10-c',
        label: 'Горное дело и материалы',
        weights: { geology: 3 },
      },
      {
        id: 'q10-d',
        label: 'Педагогические и социальные программы',
        weights: { pedagogy: 3 },
      },
    ],
  },
  {
    id: 'q11',
    prompt: 'Как вы переносите рутину?',
    options: [
      {
        id: 'q11-a',
        label: 'Ок, если есть чёткий результат и метрика',
        weights: { digital: 1, econ: 2, stem: 1 },
      },
      {
        id: 'q11-b',
        label: 'Нужна смена контекста и творческий вызов',
        weights: { arch: 2, science: 1, digital: 1 },
      },
      {
        id: 'q11-c',
        label: 'Лучше с людьми и живым общением',
        weights: { pedagogy: 2, management: 1 },
      },
      {
        id: 'q11-d',
        label: 'Нужны полевые выезды и разнообразие',
        weights: { geology: 2, stem: 1 },
      },
    ],
  },
  {
    id: 'q12',
    prompt: 'После ЕГЭ вас больше пугает…',
    options: [
      {
        id: 'q12-a',
        label: 'Не пройти по баллам на мечту',
        weights: { science: 1, digital: 1, stem: 1 },
      },
      {
        id: 'q12-b',
        label: 'Остаться в профессии «не своей»',
        weights: { pedagogy: 1, arch: 1, econ: 1 },
      },
      {
        id: 'q12-c',
        label: 'Выбрать слишком узко и заскучать',
        weights: { science: 2, management: 1 },
      },
      {
        id: 'q12-d',
        label: 'Сложности с переездом или бытом — вы остаётесь в Петербурге',
        weights: { digital: 1, telecom: 1, stem: 1 },
      },
    ],
  },
] as const
