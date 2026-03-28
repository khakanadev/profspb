import styled from 'styled-components'
import { SiteShell } from '../layout/SiteShell'
import {
  ContentSection,
  PointCard,
  PointList,
  PointText,
  PointTitle,
  SectionIntro,
  SectionLead,
  SectionTitle,
} from './SectionPrimitives'

const OrientationRoot = styled(ContentSection)`
  border-top: 1px solid
    color-mix(
      in srgb,
      ${({ theme }) => theme.color.accent} 32%,
      ${({ theme }) => theme.color.borderSubtle}
    );
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.color.accentSurfaceStrong} 0%,
    transparent 36%
  );
`

const OrientationIntro = styled(SectionIntro)`
  padding-left: ${({ theme }) => theme.space.md};
  border-left: 2px solid
    color-mix(
      in srgb,
      ${({ theme }) => theme.color.accent} 38%,
      ${({ theme }) => theme.color.border}
    );
  border-radius: 0 ${({ theme }) => theme.radius.md}
    ${({ theme }) => theme.radius.md} 0;
`

const ORIENTATION_POINTS = [
  {
    title: 'Самопознание',
    text: 'Разобраться, что вам интересно, что получается лучше всего и какие задачи заряжают, а не выматывают.',
  },
  {
    title: 'Мир профессий',
    text: 'Увидеть, какие направления и профессии существуют, чем они отличаются на практике и куда можно вырасти со временем.',
  },
  {
    title: 'Связка «школа — вуз — карьера»',
    text: 'Понять, какие предметы ЕГЭ открывают нужные программы, а какой путь после бакалавриата выглядит правдоподобно именно для вас.',
  },
  {
    title: 'Поддержка решения',
    text: 'Свести воедино пожелания семьи, собственные мечты и реальные требования вузов — без спешки и в последний день приёма.',
  },
] as const

export function OrientationSection() {
  return (
    <OrientationRoot
      id="about-orientation"
      aria-labelledby="about-orientation-title"
    >
      <SiteShell>
        <OrientationIntro>
          <SectionTitle id="about-orientation-title">
            Что такое профориентация и зачем она нужна
          </SectionTitle>
          <SectionLead>
            Профориентация — это не «тест на профессию раз и навсегда», а
            процесс, в котором вы постепенно собираете картину: кто вы,
            куда идёт рынок труда в Петербурге и России и какие шаги нужны,
            чтобы попасть на интересную программу.
          </SectionLead>
        </OrientationIntro>
        <PointList>
          {ORIENTATION_POINTS.map((point) => (
            <PointCard key={point.title}>
              <PointTitle>{point.title}</PointTitle>
              <PointText>{point.text}</PointText>
            </PointCard>
          ))}
        </PointList>
      </SiteShell>
    </OrientationRoot>
  )
}
