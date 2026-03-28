import styled from 'styled-components'
import { universities } from '../../data/universities'
import {
  ContentSection,
  SectionIntro,
  SectionLead,
  SectionTitle,
} from '../sections/SectionPrimitives'
import { SiteShell } from '../layout/SiteShell'

const PhotoCredit = styled.p`
  margin: ${({ theme }) => theme.space.md} 0
    ${({ theme }) => theme.space.lg};
  font-size: 0.78rem;
  line-height: 1.45;
  color: ${({ theme }) => theme.color.textMuted};
`

const CardGrid = styled.ul`
  display: grid;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: ${({ theme }) => theme.space.lg};
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
`

const Card = styled.li`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: 0 1px 3px ${({ theme }) => theme.color.accentShadow};
`

const RankBadge = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.space.sm};
  left: ${({ theme }) => theme.space.sm};
  padding: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.sm};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 0.75rem;
  font-weight: 700;
  color: #fff;
  background: ${({ theme }) => theme.color.accent};
`

const ImageWrap = styled.div`
  position: relative;
  aspect-ratio: 16 / 10;
  background: ${({ theme }) => theme.color.border};
`

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const CardBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
  padding: ${({ theme }) => theme.space.md};
`

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1.3;
  color: ${({ theme }) => theme.color.text};
`

const CardMeta = styled.p`
  margin: 0;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.accent};
`

const CardSummary = styled.p`
  flex: 1;
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.textMuted};
`

const ScoreNote = styled.p`
  margin: 0;
  padding: ${({ theme }) => theme.space.sm};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 0.78rem;
  line-height: 1.45;
  color: ${({ theme }) => theme.color.text};
  background: ${({ theme }) => theme.color.accentSurface};
`

const LinkRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
  margin-top: auto;
  padding-top: ${({ theme }) => theme.space.sm};
`

const CardLink = styled.a`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.accent};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.color.accentHover};
    text-decoration: underline;
  }
`

export function UniversitiesSection() {
  return (
    <ContentSection id="universities" aria-labelledby="universities-title">
      <SiteShell>
        <SectionIntro>
          <SectionTitle id="universities-title">
            Топ‑10 вузов Санкт‑Петербурга
          </SectionTitle>
          <SectionLead>
            Подборка из десяти сильных петербургских вузов — как в нашем
            справочнике проекта. У каждого: кратко о профиле, ориентир по
            баллам (не догма) и ссылки на официальный сайт и справочник
            Vuzopedia.
          </SectionLead>
        </SectionIntro>

        <PhotoCredit>
          Фотографии зданий взяты с Wikimedia Commons (свободные лицензии);
          условия указаны на страницах файлов.
        </PhotoCredit>

        <CardGrid>
          {universities.map((u) => (
            <Card key={u.shortName}>
              <ImageWrap>
                <RankBadge>#{u.rank}</RankBadge>
                <CardImage
                  src={u.imageUrl}
                  alt={u.imageAlt}
                  loading="lazy"
                  decoding="async"
                  width={640}
                  height={400}
                />
              </ImageWrap>
              <CardBody>
                <CardMeta>{u.shortName}</CardMeta>
                <CardTitle>{u.fullName}</CardTitle>
                <CardSummary>{u.summary}</CardSummary>
                <ScoreNote>{u.scoreOrientir}</ScoreNote>
                <LinkRow>
                  <CardLink
                    href={u.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Официальный сайт
                  </CardLink>
                  <CardLink
                    href={u.vuzopediaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vuzopedia
                  </CardLink>
                </LinkRow>
              </CardBody>
            </Card>
          ))}
        </CardGrid>
      </SiteShell>
    </ContentSection>
  )
}
