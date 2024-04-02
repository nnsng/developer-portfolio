import { getBlogData } from '@/services/getBlogData'
import AboutSection from './components/homepage/about'
import Blog from './components/homepage/blog'
import ContactSection from './components/homepage/contact'
import Education from './components/homepage/education'
import Experience from './components/homepage/experience'
import HeroSection from './components/homepage/hero-section'
import Projects from './components/homepage/projects'
import Skills from './components/homepage/skills'

export default async function Home() {
  const blogs = await getBlogData()

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      {blogs.length > 0 && <Blog blogs={blogs} />}
      <ContactSection />
    </>
  )
}
