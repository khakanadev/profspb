export type University = {
  rank: number
  shortName: string
  fullName: string
  vuzopediaUrl: string
  /** Официальный сайт вуза (проверяйте при смене домена). */
  officialUrl: string
  /** 1–2 предложения для карточки на сайте. */
  summary: string
  /** Прямая ссылка на фото (здесь — Wikimedia Commons). */
  imageUrl: string
  /** Описание для screen readers и подписи. */
  imageAlt: string
}
