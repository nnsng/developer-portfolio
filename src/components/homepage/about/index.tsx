import { personalData } from '@/data'
import Image from 'next/image'

export function AboutSection() {
  return (
    <div id="about" className="relative py-12 lg:py-16">
      <div className="absolute top-16 -right-8 hidden flex-col items-center lg:flex">
        <span className="w-fit rotate-90 rounded-md bg-[#1a1443] p-2 px-5 text-xl text-white uppercase">
          About Me
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="mb-5 text-xl font-medium text-[#16f2b3] uppercase">Who I am?</p>
          <p className="text-sm text-gray-200 lg:text-lg">{personalData.description}</p>
        </div>
        <div className="order-1 flex justify-center lg:order-2">
          <Image
            src={personalData.profile}
            width={200}
            height={200}
            alt={personalData.name}
            className="aspect-square w-[unset] cursor-pointer rounded-lg grayscale transition-all duration-1000 hover:scale-110 hover:grayscale-0"
          />
        </div>
      </div>
    </div>
  )
}
