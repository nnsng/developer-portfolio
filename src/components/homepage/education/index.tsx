import { AnimationLottie, GlowCard } from '@/components/common'
import { educations } from '@/data/educations'
import lottieStudy from '@/utils/lottie/study.json'
import Image from 'next/image'
import { BsPersonWorkspace } from 'react-icons/bs'

export function EducationSection() {
  return (
    <div id="education" className="relative z-50 my-12 border-t border-[#25213b] lg:my-24">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex -translate-y-[1px] justify-center">
        <div className="w-3/4">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        </div>
      </div>

      <div className="my-5 flex justify-center lg:py-8">
        <div className="flex items-center">
          <span className="h-[2px] w-24 bg-[#1a1443]"></span>
          <span className="w-fit rounded-md bg-[#1a1443] p-2 px-5 text-xl text-white uppercase">
            Education
          </span>
          <span className="h-[2px] w-24 bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex items-start justify-center">
            <div className="flex h-full w-3/4">
              <AnimationLottie animationData={lottieStudy} />
            </div>
          </div>

          <div>
            <div className="flex h-full flex-col justify-center gap-6">
              {educations.map((education) => (
                <GlowCard key={education.id} identifier={`education-${education.id}`}>
                  <div className="relative p-3 text-white">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />
                    <div className="flex justify-center">
                      <p className="text-xs text-[#16f2b3] sm:text-sm">{education.duration}</p>
                    </div>
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <p className="mb-2 text-base font-medium uppercase sm:text-xl">
                          {education.title}
                        </p>
                        <p className="text-sm sm:text-base">{education.institution}</p>
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
