import type { University } from '../types/university'

const IMG = {
  spbgu:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Spb_Vasilievsky_Island_Twelve_Collegiums_asv2019-09.jpg/960px-Spb_Vasilievsky_Island_Twelve_Collegiums_asv2019-09.jpg',
  polytech:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Polytechnical_Institute.jpg/960px-Polytechnical_Institute.jpg',
  itmo:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/ITMO_University%27s_main_building%2C_August_2016.jpg/960px-ITMO_University%27s_main_building%2C_August_2016.jpg",
  spbgeu:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3%D1%81%D0%BA%D0%B8%D0%B9_%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82.jpg/960px-%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3%D1%81%D0%BA%D0%B8%D0%B9_%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82.jpg',
  mining:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Saint-Petersburg_Mining_University_08.jpg/960px-Saint-Petersburg_Mining_University_08.jpg',
  bonch:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/%D0%9A%D0%BE%D1%80%D0%BF%D1%83%D1%81_%D0%A1%D0%9F%D0%B1%D0%93%D0%A3%D0%A2.jpg/960px-%D0%9A%D0%BE%D1%80%D0%BF%D1%83%D1%81_%D0%A1%D0%9F%D0%B1%D0%93%D0%A3%D0%A2.jpg',
  gutuMarata:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/%D0%9C%D0%B0%D1%80%D0%B0%D1%82%D0%B0_27_02.jpg/960px-%D0%9C%D0%B0%D1%80%D0%B0%D1%82%D0%B0_27_02.jpg',
  gasu:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/5023._St._Petersburg._Moskovsky_prospekt%2C_29.jpg/960px-5023._St._Petersburg._Moskovsky_prospekt%2C_29.jpg',
  leti:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Electrotechnical_University_SPB_01.jpg/960px-Electrotechnical_University_SPB_01.jpg',
  herzen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Herzen_State_Pedagogical_University_of_Russia%2C_main_building.jpg/960px-Herzen_State_Pedagogical_University_of_Russia%2C_main_building.jpg',
} as const

/** Топ‑10 по `stacks.md`. */
export const universities: readonly University[] = [
  {
    rank: 1,
    shortName: 'СПбГУ',
    fullName: 'Санкт-Петербургский государственный университет',
    vuzopediaUrl: 'https://vuzopedia.ru/vuz/1239',
    officialUrl: 'https://spbu.ru',
    summary:
      'Классический исследовательский университет: естественные науки, гуманитарные направления и междисциплинарные программы с сильной школой.',
    imageUrl: IMG.spbgu,
    imageAlt:
      'Здание Двенадцати коллегий на Васильевском острове — главный комплекс СПбГУ',
  },
  {
    rank: 2,
    shortName: 'СПбПУ',
    fullName:
      'Санкт-Петербургский политехнический университет Петра Великого',
    vuzopediaUrl: 'https://vuzopedia.ru/vuz/1271',
    officialUrl: 'https://www.spbstu.ru',
    summary:
      'Крупнейший политех страны: инженерия, высокие технологии, предпринимательские траектории и тесные связи с промышленностью.',
    imageUrl: IMG.polytech,
    imageAlt: 'Главное здание Санкт-Петербургского политехнического университета',
  },
  {
    rank: 3,
    shortName: 'ИТМО',
    fullName: 'Национальный исследовательский университет ИТМО',
    vuzopediaUrl: 'https://vuzopedia.ru/vuz/1189',
    officialUrl: 'https://itmo.ru',
    summary:
      'Национальный исследовательский университет с сильным ИТ, робототехникой, оптикой и продуктовым подходом к обучению.',
    imageUrl: IMG.itmo,
    imageAlt: 'Главное здание университета ИТМО в Санкт-Петербурге',
  },
  {
    rank: 4,
    shortName: 'СПбГЭУ',
    fullName:
      'Санкт-Петербургский государственный экономический университет',
    vuzopediaUrl: 'https://vuzopedia.ru/vuz/1174',
    officialUrl: 'https://unecon.ru',
    summary:
      'Один из крупнейших экономических вузов: финансы, менеджмент, право, аналитика и сервис в единой экосистеме.',
    imageUrl: IMG.spbgeu,
    imageAlt: 'Фасад здания Санкт-Петербургского государственного экономического университета',
  },
  {
    rank: 5,
    shortName: 'Горный',
    fullName: 'Санкт-Петербургский горный университет',
    vuzopediaUrl: 'https://vuzopedia.ru/vuz/1073',
    officialUrl: 'https://www.spmi.ru',
    summary:
      'Уникальный профиль: горное дело, геология, нефтегаз, промышленная безопасность и материалы.',
    imageUrl: IMG.mining,
    imageAlt: 'Здание Санкт-Петербургского горного университета',
  },
  {
    rank: 6,
    shortName: 'СПбГУТ',
    fullName:
      'Санкт-Петербургский государственный университет телекоммуникаций им. проф. М.А. Бонч-Бруевича',
    vuzopediaUrl: 'https://vuzopedia.ru/vuz/1297',
    officialUrl: 'https://sut.ru',
    summary:
      'Сильная школа связи, сетей, информационной безопасности и радиотехники для цифровой инфраструктуры.',
    imageUrl: IMG.bonch,
    imageAlt: 'Корпус СПбГУТ имени Бонч-Бруевича в Санкт-Петербурге',
  },
  {
    rank: 7,
    shortName: 'СПбУТУиЭ',
    fullName:
      'Санкт-Петербургский университет технологий управления и экономики',
    vuzopediaUrl: 'https://vuzopedia.ru/vuz/1064',
    officialUrl: 'https://www.gutu.ru',
    summary:
      'Управление, госуправление и экономика прикладного уровня: готовит специалистов для организаций и госсектора.',
    imageUrl: IMG.gutuMarata,
    imageAlt:
      'Здание на улице Марата в Санкт-Петербурге — иллюстрация кампусов инженерно-экономического профиля (оформление карточки СПбУТУиЭ)',
  },
  {
    rank: 8,
    shortName: 'СПбГАСУ',
    fullName:
      'Санкт-Петербургский государственный архитектурно-строительный университет',
    vuzopediaUrl: 'https://vuzopedia.ru/vuz/1108',
    officialUrl: 'https://www.spbgasu.ru',
    summary:
      'Архитектура, дизайн среды, градостроительство и инженерные системы зданий.',
    imageUrl: IMG.gasu,
    imageAlt:
      'Учебный корпус СПбГАСУ на Московском проспекте в Санкт-Петербурге',
  },
  {
    rank: 9,
    shortName: 'ЛЭТИ',
    fullName:
      'Санкт-Петербургский государственный электротехнический университет «ЛЭТИ» им. В.И. Ульянова (Ленина)',
    vuzopediaUrl: 'https://vuzopedia.ru/vuz/1230',
    officialUrl: 'https://etu.ru',
    summary:
      'Электроника, приборостроение, радиотехника и ИТ-инженерия с богатой лабораторной базой.',
    imageUrl: IMG.leti,
    imageAlt: 'Корпус электротехнического университета ЛЭТИ в Санкт-Петербурге',
  },
  {
    rank: 10,
    shortName: 'РГПУ',
    fullName:
      'Российский государственный педагогический университет имени А. И. Герцена',
    vuzopediaUrl: 'https://vuzopedia.ru/vuz/1147',
    officialUrl: 'https://herzen.spb.ru',
    summary:
      'Педагогика, психология, дефектология и гуманитарные программы в историческом кампусе на Мойке.',
    imageUrl: IMG.herzen,
    imageAlt: 'Главное здание РГПУ им. А. И. Герцена в Санкт-Петербурге',
  },
] as const

export function findUniversityByShortName(
  shortName: string,
): University | undefined {
  return universities.find((u) => u.shortName === shortName)
}
