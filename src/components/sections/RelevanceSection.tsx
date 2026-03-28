import { SiteShell } from '../layout/SiteShell'
import {
  ContentSection,
  EmphasisBlock,
  EmphasisText,
  SectionIntro,
  SectionLead,
  SectionTitle,
} from './SectionPrimitives'

export function RelevanceSection() {
  return (
    <ContentSection id="why-site" aria-labelledby="why-site-title">
      <SiteShell>
        <SectionIntro>
          <SectionTitle id="why-site-title">
            Почему этот сайт актуален для петербургских одиннадцатиклассников
          </SectionTitle>
          <SectionLead>
            После года интенсивной подготовки к ЕГЭ легко принять решение
            «ногами вперёд»: по баллам, по совету родственников или по
            одному знакомому факультету. «ПрофСПб» заточен под вашу
            ситуацию: вы уже в финишной прямой школы, город богат вузами, а
            времени на исследование каталогов всё меньше.
          </SectionLead>
        </SectionIntro>
        <EmphasisBlock>
          <EmphasisText>
            Здесь — короткое введение без лишней «воды», ориентир по сильным
            петербургским вузам (подборка из 10) и опрос, который помогает
            сформулировать, какой тип задач и учебы вам ближе. Это не заменяет
            разговор с профориентологом или школьным консультантом, но даёт
            общий каркас до встречи с ними и до открытых дней в вузах.
          </EmphasisText>
        </EmphasisBlock>
      </SiteShell>
    </ContentSection>
  )
}
