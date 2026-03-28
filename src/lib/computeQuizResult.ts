import {
  CAREER_TRACK_IDS,
  type CareerTrack,
  type CareerTrackId,
  careerTracksById,
} from '../data/careerTracks'
import type { QuizQuestion } from '../types/quiz'
import type { University } from '../types/university'

export type QuizComputedResult = {
  track: CareerTrack
  university: University
  scores: Record<CareerTrackId, number>
}

function emptyScores(): Record<CareerTrackId, number> {
  return Object.fromEntries(CAREER_TRACK_IDS.map((id) => [id, 0])) as Record<
    CareerTrackId,
    number
  >
}

function addWeights(
  scores: Record<CareerTrackId, number>,
  weights: Partial<Record<CareerTrackId, number>>,
): void {
  for (const id of CAREER_TRACK_IDS) {
    const w = weights[id]
    if (w !== undefined) scores[id] += w
  }
}

function pickWinningTrack(scores: Record<CareerTrackId, number>): CareerTrackId {
  let best: CareerTrackId = CAREER_TRACK_IDS[0]
  let max = scores[best]
  for (const id of CAREER_TRACK_IDS) {
    const v = scores[id]
    if (v > max) {
      max = v
      best = id
    }
  }
  return best
}

/** `answers[i]` — индекс выбранного варианта для `questions[i]`. */
export function computeQuizResult(
  questions: readonly QuizQuestion[],
  answers: readonly number[],
  resolveUniversity: (shortName: string) => University | undefined,
): QuizComputedResult | null {
  if (questions.length === 0) return null
  if (answers.length !== questions.length) return null

  const scores = emptyScores()

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i]
    const idx = answers[i]
    const option = q.options[idx]
    if (!option) return null
    addWeights(scores, option.weights)
  }

  const trackId = pickWinningTrack(scores)
  const track = careerTracksById[trackId]
  const university = resolveUniversity(track.universityShortName)

  if (!university) return null

  return { track, university, scores }
}
