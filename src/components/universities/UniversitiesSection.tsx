import styled from 'styled-components'
import { universities } from '../../data/universities'
import {
  ContentSection,
  SectionIntro,
  SectionTitle,
} from '../sections/SectionPrimitives'
import { SiteShell } from '../layout/SiteShell'

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
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.color.shadowSoft};
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 20px rgb(0 0 0 / 0.07);
  }
`

const RankBadge = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.space.md};
  left: ${({ theme }) => theme.space.md};
  padding: 0.2rem 0.45rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.color.text};
  background: rgb(255 255 255 / 0.92);
  backdrop-filter: blur(6px);
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
  padding: ${({ theme }) => theme.space.lg};
`

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.35;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.text};
`

const CardMeta = styled.p`
  margin: 0;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.textMuted};
`

const CardSummary = styled.p`
  flex: 1;
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.color.textMuted};
`

const LinkRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
  margin-top: auto;
  padding-top: ${({ theme }) => theme.space.sm};
`

const CardLink = styled.a`
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.accent};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.color.accentHover};
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`

export function UniversitiesSection() {
  return (
    <ContentSection id="universities" aria-labelledby="universities-title">
      <SiteShell>
        <SectionIntro>
          <SectionTitle id="universities-title">
            Подборка из десяти сильных петербургских вузов
          </SectionTitle>
        </SectionIntro>

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
