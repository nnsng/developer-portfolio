import { getSkillData } from '@/services/data'
import { skillsImage } from '@/utils/skill'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

export async function SkillSection() {
  const skillData = await getSkillData()

  return (
    <div id="skill" className="relative z-50 my-12 border-t border-[#25213b] lg:my-24">
      <div className="absolute top-6 left-[42%] h-[100px] w-[100px] translate-x-1/2 rounded-full bg-violet-100 opacity-20 blur-3xl filter"></div>

      <div className="flex -translate-y-[1px] justify-center">
        <div className="w-3/4">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        </div>
      </div>

      <div className="my-5 flex justify-center lg:py-8">
        <div className="flex items-center">
          <span className="h-[2px] w-24 bg-[#1a1443]"></span>
          <span className="w-fit rounded-md bg-[#1a1443] p-2 px-5 text-xl text-white uppercase">
            Skill
          </span>
          <span className="h-[2px] w-24 bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="my-12 w-full">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillData.map((skill) => (
            <div
              className="group relative m-3 flex h-fit w-36 min-w-fit cursor-pointer flex-col items-center justify-center rounded-lg transition-all duration-500 hover:scale-[1.15] sm:m-5"
              key={skill.id}
            >
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 transition-all duration-500 group-hover:border-violet-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <Image
                      src={skillsImage(skill.name)?.src}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-sm text-white sm:text-lg">{skill.name}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}
