import { SiteFooter } from './components/layout/SiteFooter'
import { SiteHeader } from './components/layout/SiteHeader'
import { HeroSection } from './components/sections/HeroSection'
import { OrientationSection } from './components/sections/OrientationSection'
import { RelevanceSection } from './components/sections/RelevanceSection'

export default function App() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <HeroSection />
        <OrientationSection />
        <RelevanceSection />
      </main>
      <SiteFooter />
    </>
  )
}
