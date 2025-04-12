import {
  AboutSection,
  BlogSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  HeroSection,
  ProjectSection,
  SkillSection,
} from '@/components/homepage'

export default function HomePage() {
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
