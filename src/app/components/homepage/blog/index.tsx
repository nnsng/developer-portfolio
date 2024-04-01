import type { Blog } from '@/types'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import BlogCard from './blog-card'

type BlogProps = {
  blogs: Blog[]
}

function Blog({ blogs }: BlogProps) {
  return (
    <div id="blogs" className="relative z-50 my-12 border-t border-[#25213b] lg:my-24">
      <div className="absolute left-[42%] top-6 h-[100px] w-[100px] translate-x-1/2 rounded-full bg-violet-100 opacity-20 blur-3xl  filter"></div>

      <div className="flex -translate-y-[1px] justify-center">
        <div className="w-3/4">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500  to-transparent" />
        </div>
      </div>

      <div className="my-5 flex justify-center lg:py-8">
        <div className="flex  items-center">
          <span className="h-[2px] w-24 bg-[#1a1443]"></span>
          <span className="w-fit rounded-md bg-[#1a1443] p-2 px-5 text-xl text-white">Blogs</span>
          <span className="h-[2px] w-24 bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:gap-8 xl:gap-10">
        {blogs.slice(0, 6).map((blog, i) => blog?.cover_image && <BlogCard blog={blog} key={i} />)}
      </div>

      <div className="mt-5 flex  justify-center lg:mt-12">
        <Link
          className="flex items-center gap-1 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 py-3 text-center text-xs font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:gap-3 hover:text-white hover:no-underline md:px-8 md:py-4 md:text-sm md:font-semibold"
          role="button"
          href="https://dev.to/said7388"
          target="_blank"
        >
          <span>View More</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}

export default Blog
