import type { University } from '../types/university'

/** Топ‑10 по `stacks.md`; официальные сайты и фото — в следующих фазах. */
export const universities: readonly University[] = [
  {
    rank: 1,
    shortName: 'СПбГУ',
    fullName: 'Санкт-Петербургский государственный университет',
    vuzopediaUrl: 'https://vuzopedia.ru/vuz/1239',
  },
  {
    rank: 2,
    shortName: 'СПбПУ',
    fullName:
      'Санкт-Петербургский политехнический университет Петра Великого',
    vuzopediaUrl: 'https://vuzopedia.ru/vuz/1271',
  },
  {
    rank: 3,
    shortName: 'ИТМО',
    fullName: 'Национальный исследовательский университет ИТМО',
    vuzopediaUrl: 'https://vuzopedia.ru/vuz/1189',
  },
  {
    rank: 4,
    shortName: 'СПбГЭУ',
    fullName:
      'Санкт-Петербургский государственный экономический университет',
    vuzopediaUrl: 'https://vuzopedia.ru/vuz/1174',
  },
  {
    rank: 5,
    shortName: 'Горный',
    fullName: 'Санкт-Петербургский горный университет',
    vuzopediaUrl: 'https://vuzopedia.ru/vuz/1073',
  },
  {
    rank: 6,
    shortName: 'СПбГУТ',
    fullName:
      'Санкт-Петербургский государственный университет телекоммуникаций им. проф. М.А. Бонч-Бруевича',
    vuzopediaUrl: 'https://vuzopedia.ru/vuz/1297',
  },
  {
    rank: 7,
    shortName: 'СПбУТУиЭ',
    fullName:
      'Санкт-Петербургский университет технологий управления и экономики',
    vuzopediaUrl: 'https://vuzopedia.ru/vuz/1064',
  },
  {
    rank: 8,
    shortName: 'СПбГАСУ',
    fullName:
      'Санкт-Петербургский государственный архитектурно-строительный университет',
    vuzopediaUrl: 'https://vuzopedia.ru/vuz/1108',
  },
  {
    rank: 9,
    shortName: 'ЛЭТИ',
    fullName:
      'Санкт-Петербургский государственный электротехнический университет «ЛЭТИ» им. В.И. Ульянова (Ленина)',
    vuzopediaUrl: 'https://vuzopedia.ru/vuz/1230',
  },
  {
    rank: 10,
    shortName: 'РГПУ',
    fullName:
      'Российский государственный педагогический университет имени А. И. Герцена',
    vuzopediaUrl: 'https://vuzopedia.ru/vuz/1147',
  },
] as const

export function findUniversityByShortName(
  shortName: string,
): University | undefined {
  return universities.find((u) => u.shortName === shortName)
}
