import { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'
import { computeQuizResult } from '../../lib/computeQuizResult'
import { findUniversityByShortName } from '../../data/universities'
import { quizQuestions } from '../../data/quizQuestions'
import {
  ContentSection,
  EmphasisBlock,
  EmphasisText,
  SectionIntro,
  SectionLead,
  SectionTitle,
} from '../sections/SectionPrimitives'
import { SiteShell } from '../layout/SiteShell'

const Fieldset = styled.fieldset`
  margin: 0 0 ${({ theme }) => theme.space.lg};
  padding: 0;
  border: none;
`

const Legend = styled.legend`
  margin: 0 0 ${({ theme }) => theme.space.md};
  padding: 0;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.35;
  color: ${({ theme }) => theme.color.text};
`

const OptionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
`

const OptionLabel = styled.label<{ $checked: boolean }>`
  display: flex;
  cursor: pointer;
  align-items: flex-start;
  gap: ${({ theme }) => theme.space.sm};
  padding: ${({ theme }) => theme.space.md};
  border: 1px solid
    ${({ theme, $checked }) =>
      $checked ? theme.color.accent : theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme, $checked }) =>
    $checked ? theme.color.accentSurface : theme.color.surface};
  box-shadow: ${({ theme, $checked }) =>
    $checked ? `0 0 0 1px ${theme.color.accent}` : 'none'};

  &:has(:focus-visible) {
    outline: 2px solid ${({ theme }) => theme.color.accent};
    outline-offset: 2px;
  }
`

const Radio = styled.input`
  flex-shrink: 0;
  margin: 0.2rem 0 0;
  accent-color: ${({ theme }) => theme.color.accent};
`

const OptionText = styled.span`
  font-size: 0.9375rem;
  line-height: 1.45;
  color: ${({ theme }) => theme.color.text};
`

const Progress = styled.p`
  margin: 0 0 ${({ theme }) => theme.space.md};
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.textMuted};
`

const BarTrack = styled.div`
  height: 6px;
  margin-bottom: ${({ theme }) => theme.space.lg};
  overflow: hidden;
  border-radius: 4px;
  background: ${({ theme }) => theme.color.border};
`

const BarFill = styled.div<{ $ratio: number }>`
  width: ${({ $ratio }) => `${Math.round($ratio * 100)}%`};
  height: 100%;
  border-radius: 4px;
  background: ${({ theme }) => theme.color.accent};
  transition: width 0.2s ease;
`

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space.sm};
`

const ResultActions = styled(Actions)`
  margin-top: ${({ theme }) => theme.space.md};
`

const FineNote = styled.p`
  margin: ${({ theme }) => theme.space.md} 0 0;
  font-size: 0.85rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.textMuted};
`

const ResultEmphasis = styled(EmphasisBlock)`
  margin-top: ${({ theme }) => theme.space.md};
`

const Button = styled.button<{ $variant?: 'primary' | 'ghost' }>`
  cursor: pointer;
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.md}`};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-family: inherit;
  font-size: 0.9375rem;
  font-weight: 600;

  ${({ theme, $variant }) =>
    $variant === 'ghost'
      ? `
    border: 1px solid ${theme.color.border};
    background: ${theme.color.surface};
    color: ${theme.color.textMuted};
    &:hover:not(:disabled) {
      border-color: ${theme.color.accent};
      color: ${theme.color.accent};
    }
  `
      : `
    border: none;
    background: ${theme.color.accent};
    color: #fff;
    &:hover:not(:disabled) {
      background: ${theme.color.accentHover};
    }
  `}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.45;
  }
`

const ResultCard = styled.div`
  padding: ${({ theme }) => theme.space.md};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: 0 1px 3px ${({ theme }) => theme.color.accentShadow};
`

const ResultHeading = styled.h3`
  margin: 0 0 ${({ theme }) => theme.space.sm};
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.text};
`

const ResultBody = styled.p`
  margin: 0 0 ${({ theme }) => theme.space.md};
  font-size: 0.95rem;
  line-height: 1.55;
  color: ${({ theme }) => theme.color.textMuted};
`

const UniLine = styled.p`
  margin: 0 0 ${({ theme }) => theme.space.xs};
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.text};
`

const ExternalLink = styled.a`
  font-weight: 600;
  color: ${({ theme }) => theme.color.accent};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.color.accentHover};
    text-decoration: underline;
  }
`

function initialAnswers(): (number | null)[] {
  return Array.from({ length: quizQuestions.length }, () => null)
}

export function QuizSection() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(initialAnswers)
  const [showResult, setShowResult] = useState(false)

  const total = quizQuestions.length
  const question = quizQuestions[step]
  const selected = answers[step]

  const progressRatio = showResult ? 1 : (step + 1) / total

  const result = useMemo(() => {
    if (!showResult) return null
    const filled = answers.every((a) => a !== null)
    if (!filled) return null
    const nums = answers as number[]
    return computeQuizResult(quizQuestions, nums, findUniversityByShortName)
  }, [showResult, answers])

  const selectOption = useCallback((optionIndex: number) => {
    setAnswers((prev) => {
      const next = [...prev]
      next[step] = optionIndex
      return next
    })
  }, [step])

  const goBack = useCallback(() => {
    if (showResult) {
      setShowResult(false)
      setStep(total - 1)
      return
    }
    setStep((s) => Math.max(0, s - 1))
  }, [showResult, total])

  const goNext = useCallback(() => {
    if (selected === null) return
    if (step < total - 1) {
      setStep((s) => s + 1)
    } else {
      setShowResult(true)
    }
  }, [selected, step, total])

  const restart = useCallback(() => {
    setStep(0)
    setAnswers(initialAnswers())
    setShowResult(false)
  }, [])

  const nextLabel = step < total - 1 ? 'Далее' : 'Результат'

  return (
    <ContentSection id="quiz" aria-labelledby="quiz-title">
      <SiteShell>
        <SectionIntro>
          <SectionTitle id="quiz-title">Короткий опрос про вас</SectionTitle>
          <SectionLead>
            Двенадцать вопросов без «правильных» ответов: так мы подберём
            ориентир по направлению и одному из вузов нашей петербургской
            подборки. Результат не заменяет профориентолога и официальные
            правила приёма.
          </SectionLead>
        </SectionIntro>

        {!showResult && (
          <>
            <Progress aria-live="polite">
              Вопрос {step + 1} из {total}
            </Progress>
            <BarTrack aria-hidden>
              <BarFill $ratio={progressRatio} />
            </BarTrack>

            <Fieldset>
              <Legend>{question.prompt}</Legend>
              <OptionList>
                {question.options.map((opt, index) => {
                  const id = `${question.id}-${opt.id}`
                  const checked = selected === index
                  return (
                    <OptionLabel key={opt.id} $checked={checked}>
                      <Radio
                        type="radio"
                        id={id}
                        name={question.id}
                        value={index}
                        checked={checked}
                        onChange={() => selectOption(index)}
                      />
                      <OptionText>{opt.label}</OptionText>
                    </OptionLabel>
                  )
                })}
              </OptionList>
            </Fieldset>

            <Actions>
              <Button
                type="button"
                $variant="ghost"
                disabled={step === 0}
                onClick={goBack}
              >
                Назад
              </Button>
              <Button
                type="button"
                disabled={selected === null}
                onClick={goNext}
              >
                {nextLabel}
              </Button>
            </Actions>
          </>
        )}

        {showResult && !result && (
          <ResultCard>
            <ResultBody>
              Не удалось сопоставить результат с вузом. Нажмите «Пройти
              снова» или обновите страницу.
            </ResultBody>
            <ResultActions>
              <Button type="button" onClick={restart}>
                Пройти снова
              </Button>
            </ResultActions>
          </ResultCard>
        )}

        {showResult && result && (
          <div aria-live="polite">
            <ResultCard>
              <ResultHeading>{result.track.title}</ResultHeading>
              <ResultBody>{result.track.description}</ResultBody>
              <UniLine>
                Вуз из подборки: {result.university.fullName} (
                {result.university.shortName})
              </UniLine>
              <ResultEmphasis>
                <EmphasisText>{result.track.scoreOrientir}</EmphasisText>
              </ResultEmphasis>
              <FineNote>
                <ExternalLink
                  href={result.university.vuzopediaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Карточка вуза на Vuzopedia
                </ExternalLink>{' '}
                — справочно; при подаче документов ориентируйтесь на сайт вуза.
              </FineNote>
            </ResultCard>
            <ResultActions>
              <Button type="button" onClick={restart}>
                Пройти снова
              </Button>
            </ResultActions>
          </div>
        )}
      </SiteShell>
    </ContentSection>
  )
}
