import { experiences } from '@/utils/data/experience'
import Image from 'next/image'
import { BsPersonWorkspace } from 'react-icons/bs'
import AnimationLottie from '../../helper/animation-lottie'
import GlowCard from '../../helper/glow-card'
import experience from '@/utils/lottie/code.json'

function Experience() {
  return (
    <div id="experience" className="relative z-50 my-12 border-t border-[#25213b] lg:my-24">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="my-5 flex justify-center lg:py-8">
        <div className="flex  items-center">
          <span className="h-[2px] w-24 bg-[#1a1443]"></span>
          <span className="w-fit rounded-md bg-[#1a1443] p-2 px-5 text-xl text-white">
            EXPERIENCES
          </span>
          <span className="h-[2px] w-24 bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex items-start justify-center">
            <div className="flex h-full w-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div className="flex h-full flex-col justify-center gap-6">
              {experiences.map((experience) => (
                <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                  <div className="relative p-3">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />
                    <div className="flex justify-center">
                      <p className="text-xs text-[#16f2b3] sm:text-sm">{experience.duration}</p>
                    </div>
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <p className="mb-2 text-base font-medium uppercase sm:text-xl">
                          {experience.title}
                        </p>
                        <p className="text-sm sm:text-base">{experience.company}</p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
