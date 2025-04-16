import type { Personal, Social, SocialKey } from '@/types/data'
import { BiLogoLinkedin } from 'react-icons/bi'
import { FaDev, FaFacebook, FaStackOverflow } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io'
import { SiLeetcode } from 'react-icons/si'

export const getSocialLinks = (personalData: Personal, keys: SocialKey[]) => {
  const socials: Social[] = [
    {
      key: 'github',
      icon: IoLogoGithub,
      link: `https://github.com/${personalData.github}`,
    },
    {
      key: 'linkedIn',
      icon: BiLogoLinkedin,
      link: `https://www.linkedin.com/in/${personalData.linkedIn}`,
    },
    {
      key: 'dev',
      icon: FaDev,
      link: `https://dev.to/${personalData.dev}`,
    },
    {
      key: 'leetcode',
      icon: SiLeetcode,
      link: `https://leetcode.com/${personalData.leetcode}`,
    },
    {
      key: 'stackOverflow',
      icon: FaStackOverflow,
      link: `https://stackoverflow.com/users/${personalData.stackOverflow}`,
    },
    {
      key: 'facebook',
      icon: FaFacebook,
      link: `https://www.facebook.com/${personalData.facebook}`,
    },
  ]

  const filteredSocials = socials.filter((social) => {
    return keys.includes(social.key) && !!personalData[social.key]
  })

  return filteredSocials
}
