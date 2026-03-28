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
    <ContentSection
      id="about-orientation"
      aria-labelledby="about-orientation-title"
    >
      <SiteShell>
        <SectionIntro>
          <SectionTitle id="about-orientation-title">
            Что такое профориентация и зачем она нужна
          </SectionTitle>
          <SectionLead>
            Профориентация — это не «тест на профессию раз и навсегда», а
            процесс, в котором вы постепенно собираете картину: кто вы,
            куда идёт рынок труда в Петербурге и России и какие шаги нужны,
            чтобы попасть на интересную программу.
          </SectionLead>
        </SectionIntro>
        <PointList>
          {ORIENTATION_POINTS.map((point) => (
            <PointCard key={point.title}>
              <PointTitle>{point.title}</PointTitle>
              <PointText>{point.text}</PointText>
            </PointCard>
          ))}
        </PointList>
      </SiteShell>
    </ContentSection>
  )
}
