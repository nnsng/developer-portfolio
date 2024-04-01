import type { Project } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { FaCode, FaPlay } from 'react-icons/fa'
import placeholder from '/public/png/placeholder.png'

type SingleProjectProps = {
  project: Project
}

const SingleProject = ({ project }: SingleProjectProps) => {
  const { name, description, tags, code, demo, image, features } = project

  return (
    <div className="group relative flex h-fit w-full cursor-text flex-col items-center justify-center overflow-hidden rounded-lg border border-[#1a1443] bg-[linear-gradient(90deg,#281e57_0%,#201435_100%)] px-3 py-[1.4rem] shadow-2xl md:px-8">
      <div className="absolute left-0 top-0 flex justify-center opacity-40">
        <svg
          width="1170"
          height="403"
          viewBox="0 0 1170 403"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1170 57.3509H0V56.5132H1170V57.3509Z"
            fill="white"
            fillOpacity="0.3"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M410.388 402.472L410.388 0.933594L411.226 0.933594L411.226 402.472L410.388 402.472Z"
            fill="white"
            fillOpacity="0.3"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M841.791 402.472L841.791 0.933594L842.628 0.933594L842.628 402.472L841.791 402.472Z"
            fill="white"
            fillOpacity="0.3"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1014.35 402.472L1014.35 0.933594L1015.19 0.933594L1015.19 402.472L1014.35 402.472Z"
            fill="white"
            fillOpacity="0.3"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M928.071 402.472L928.071 0.933594L928.909 0.933594L928.909 402.472L928.071 402.472Z"
            fill="white"
            fillOpacity="0.3"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1100.63 402.472L1100.63 0.933594L1101.47 0.933594L1101.47 402.472L1100.63 402.472Z"
            fill="white"
            fillOpacity="0.3"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1170 143.631H0V142.793H1170V143.631Z"
            fill="white"
            fillOpacity="0.3"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M324.108 402.472L324.108 0.933594L324.946 0.933594L324.946 402.472L324.108 402.472Z"
            fill="white"
            fillOpacity="0.3"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M755.51 402.472L755.51 0.933594L756.348 0.933594L756.348 402.472L755.51 402.472Z"
            fill="white"
            fillOpacity="0.3"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1170 229.911H0V229.074H1170V229.911Z"
            fill="white"
            fillOpacity="0.3"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M237.827 402.472L237.827 0.933594L238.665 0.933594L238.665 402.472L237.827 402.472Z"
            fill="white"
            fillOpacity="0.3"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M669.23 402.472L669.23 0.933594L670.067 0.933594L670.067 402.472L669.23 402.472Z"
            fill="white"
            fillOpacity="0.3"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1170 316.192H0V315.354H1170V316.192Z"
            fill="white"
            fillOpacity="0.3"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M151.547 402.472L151.547 0.933594L152.385 0.933594L152.385 402.472L151.547 402.472Z"
            fill="white"
            fillOpacity="0.3"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M582.949 402.472L582.949 0.933594L583.787 0.933594L583.787 402.472L582.949 402.472Z"
            fill="white"
            fillOpacity="0.3"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1170 402.472H0V401.635H1170V402.472Z"
            fill="white"
            fillOpacity="0.3"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M65.2666 402.472L65.2666 0.933594L66.1042 0.933594L66.1042 402.472L65.2666 402.472Z"
            fill="white"
            fillOpacity="0.3"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M496.669 402.472L496.669 0.933594L497.507 0.933594L497.507 402.472L496.669 402.472Z"
            fill="white"
            fillOpacity="0.3"
          ></path>
          <rect
            x="152.382"
            y="57.3506"
            width="85.4536"
            height="85.4429"
            fill="white"
            fillOpacity="0.15"
          ></rect>
          <rect
            x="238.665"
            y="143.631"
            width="85.575"
            height="84.9928"
            fill="white"
            fillOpacity="0.1"
          ></rect>
          <rect
            x="842.615"
            y="57.3506"
            width="85.4597"
            height="85.4453"
            fill="white"
            fillOpacity="0.15"
          ></rect>
        </svg>
      </div>

      <div className="flex h-full w-full flex-col items-center justify-between">
        <h2 className="text-center text-[1.525rem] font-semibold capitalize not-italic leading-[110%] text-[#EFF3F4]">
          {name}
        </h2>
        <div className="p-6">
          <Image
            src={image ? image?.src : placeholder}
            alt={name}
            width={1080}
            height={720}
            className="h-64 w-80 rounded-lg transition-opacity delay-[0.3s] duration-[0.7s] group-hover:opacity-0"
          />
        </div>
        <div className="flex w-full items-center justify-between">
          <Link
            href={demo}
            target="_blank"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-[#EFF3F4] decoration-clone text-[#EFF3F4] no-underline transition-all delay-[0.3s] duration-300 hover:scale-110 hover:border-[#0F0C41] hover:bg-[#231d4b] hover:text-violet-600"
          >
            <FaPlay />
          </Link>

          <Link
            href={code}
            target="_blank"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-[#EFF3F4] text-[#EFF3F4] no-underline transition-all delay-[0.3s] duration-300 hover:scale-110 hover:border-[#0F0C41] hover:bg-[#231d4b]  hover:text-violet-600 group-hover:translate-x-[-140px]"
          >
            <FaCode />
          </Link>
        </div>
      </div>
      <p className="absolute left-0 top-0 w-[90%] translate-x-[-110%] translate-y-[25%] rounded-[0_20px_20px_0] bg-[#0f0b24] p-6 text-xs leading-[110%] text-[#EFF3F4] transition-transform  duration-[0.9s] group-hover:translate-x-[-2%] md:min-h-[150px] md:w-[85%] md:translate-y-[50%] md:text-sm">
        {description}
      </p>
      <div className="absolute bottom-4 right-0 flex w-[140px] translate-x-full flex-col justify-center gap-2 rounded-[10px_0_0_10px] bg-[#0f0b24] p-[0.825rem] text-[0.8rem] text-[#EFF3F4] transition-transform delay-[0.3s] duration-[0.5s] group-hover:translate-x-0">
        {tags?.map((tag, id) => (
          <span className="break-words text-xs font-medium" key={id}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SingleProject
