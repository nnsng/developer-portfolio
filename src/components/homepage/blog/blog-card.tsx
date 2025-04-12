import type { Blog } from '@/types'
import { timeConverter } from '@/utils/time'
import Image from 'next/image'
import Link from 'next/link'
import { BsHeartFill } from 'react-icons/bs'
import { FaCommentAlt } from 'react-icons/fa'

type BlogCardProps = {
  blog: Blog
}

export function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className="group relative rounded-lg border border-[#1d293a] bg-[#1b203e] transition-all duration-500 hover:border-[#464c6a]">
      <div className="h-44 w-auto cursor-pointer overflow-hidden rounded-t-lg lg:h-52">
        <Image
          src={blog?.cover_image}
          height={1080}
          width={1920}
          alt=""
          className="h-full w-full transition-all duration-300 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col p-2 sm:p-3">
        <div className="flex items-center justify-between text-sm text-[#16f2b3]">
          <p>{timeConverter(blog.published_at)}</p>
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1">
              <BsHeartFill />
              <span>{blog.public_reactions_count}</span>
            </p>
            {blog.comments_count > 0 && (
              <p className="flex items-center gap-1">
                <FaCommentAlt />
                <span>{blog.comments_count}</span>
              </p>
            )}
          </div>
        </div>
        <Link target="_blank" href={blog.url}>
          <p className="my-2 cursor-pointer text-lg font-medium text-white hover:text-violet-500 sm:text-xl lg:my-3">
            {blog.title}
          </p>
        </Link>
        <p className="mb-2 text-sm text-[#16f2b3]">{`${blog.reading_time_minutes} Min Read`}</p>
        <p className="line-clamp-3 pb-3 text-sm text-[#d3d8e8] lg:pb-6 lg:text-base">
          {blog.description}
        </p>
        <div>
          <Link target="_blank" href={blog.url}>
            <button className="rounded-full bg-violet-500 px-3 py-1.5 text-xs text-white">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
