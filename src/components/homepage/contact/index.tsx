import { getPersonalData } from '@/services/data'
import { getSocialLinks } from '@/utils/social'
import Link from 'next/link'
import { CiLocationOn } from 'react-icons/ci'
import { IoMdCall } from 'react-icons/io'
import { MdAlternateEmail } from 'react-icons/md'
import { ContactForm } from './contact-form'

export async function ContactSection() {
  const personalData = await getPersonalData()
  const socials = getSocialLinks(personalData, ['github', 'linkedIn', 'dev', 'facebook'])

  return (
    <div id="contact" className="relative my-12 mt-24 text-white lg:my-16">
      <div className="absolute top-24 -right-8 hidden flex-col items-center lg:flex">
        <span className="w-fit rotate-90 rounded-md bg-[#1a1443] p-2 px-5 text-xl text-white uppercase">
          Contact
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <ContactForm />

        <div className="lg:w-3/4">
          <div className="flex flex-col gap-5 lg:gap-9">
            <p className="flex items-center gap-3 text-sm md:text-xl">
              <MdAlternateEmail
                className="cursor-pointer rounded-full bg-[#8b98a5] p-2 text-gray-800 transition-all duration-300 hover:scale-110 hover:bg-[#16f2b3]"
                size={36}
              />
              <span>{personalData.email}</span>
            </p>
            <p className="flex items-center gap-3 text-sm md:text-xl">
              <IoMdCall
                className="cursor-pointer rounded-full bg-[#8b98a5] p-2 text-gray-800 transition-all duration-300 hover:scale-110 hover:bg-[#16f2b3]"
                size={36}
              />
              <span>{personalData.phone}</span>
            </p>
            <p className="flex items-center gap-3 text-sm md:text-xl">
              <CiLocationOn
                className="cursor-pointer rounded-full bg-[#8b98a5] p-2 text-gray-800 transition-all duration-300 hover:scale-110 hover:bg-[#16f2b3]"
                size={36}
              />
              <span>{personalData.address}</span>
            </p>
          </div>
          <div className="mt-8 flex items-center gap-5 lg:mt-16 lg:gap-10">
            {socials.map(({ key, link, icon: Icon }) => (
              <Link key={key} target="_blank" href={link} aria-label="Social link">
                <Icon
                  className="cursor-pointer rounded-full bg-[#8b98a5] p-3 text-gray-800 transition-all duration-300 hover:scale-110 hover:bg-[#16f2b3]"
                  size={48}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
