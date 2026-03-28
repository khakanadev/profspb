import type { CareerTrackId } from '../data/careerTracks'

export type QuizOption = {
  id: string
  label: string
  weights: Partial<Record<CareerTrackId, number>>
}

export type QuizQuestion = {
  id: string
  prompt: string
  options: readonly QuizOption[]
}
