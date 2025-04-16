import { getPersonalData } from '@/services/data'
import { getSocialLinks } from '@/utils/social'
import Image from 'next/image'
import Link from 'next/link'
import { MdDownload } from 'react-icons/md'
import { RiContactsFill } from 'react-icons/ri'
import { CoderObject } from './coder-object'

export async function HeroSection() {
  const personalData = await getPersonalData()
  const socials = getSocialLinks(personalData, ['github', 'linkedIn', 'leetcode'])

  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start gap-y-8 lg:grid-cols-2 lg:gap-12">
        <div className="order-2 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:order-1 lg:pt-10">
          <h1 className="text-3xl leading-10 font-bold text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is <span className="text-pink-500">{personalData.name.toUpperCase()}</span>
            {`, I'm a Professional `}
            <span className="text-[#16f2b3]">{personalData.designation}</span>.
          </h1>

          <div className="my-12 flex items-center gap-6">
            {socials.map(({ key, link, icon: Icon }) => (
              <Link
                key={key}
                href={link}
                target="_blank"
                className="text-pink-500 transition-all duration-300 hover:scale-125"
                aria-label="Social link"
              >
                <Icon size={30} />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="rounded-full bg-gradient-to-r from-violet-600 to-pink-500 p-[1px] transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
              role="button"
              aria-label="Contact Me"
            >
              <button className="flex cursor-pointer items-center gap-1 rounded-full border-none bg-[#0d1224] px-3 py-3 text-center text-xs font-medium tracking-wider text-[#ffff] uppercase no-underline transition-all duration-200 ease-out hover:gap-3 md:px-8 md:py-4 md:text-sm md:font-semibold">
                <span>Contact Me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            {personalData.resume && (
              <Link
                className="flex items-center gap-1 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 py-3 text-center text-xs font-medium tracking-wider text-white uppercase no-underline transition-all duration-200 ease-out hover:gap-3 hover:text-white hover:no-underline md:px-8 md:py-4 md:text-sm md:font-semibold"
                role="button"
                target="_blank"
                href={personalData.resume}
                aria-label="Get Resume"
              >
                <span>Get Resume</span>
                <MdDownload size={16} />
              </Link>
            )}
          </div>
        </div>

        <CoderObject />
      </div>
    </section>
  )
}
