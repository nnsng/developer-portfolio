import {
  AboutSection,
  BlogSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  HeroSection,
  ProjectSection,
  SkillSection,
} from './components/homepage'

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillSection />
      <ProjectSection />
      <EducationSection />
      <BlogSection />
      <ContactSection />
    </>
  )
}
