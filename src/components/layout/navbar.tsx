import { personalData } from '@/data/personal'
import { getBlogData } from '@/services/blog-services'
import Link from 'next/link'

const navItems = {
  about: {
    id: 'about',
    name: 'About',
    enabled: true,
  },
  experience: {
    id: 'experience',
    name: 'Experience',
    enabled: true,
  },
  skill: {
    id: 'skill',
    name: 'Skill',
    enabled: true,
  },
  project: {
    id: 'project',
    name: 'Project',
    enabled: true,
  },
  education: {
    id: 'education',
    name: 'Education',
    enabled: true,
  },
  blog: {
    id: 'blog',
    name: 'Blog',
    enabled: true,
  },
}

const getNavItems = async () => {
  const blogs = await getBlogData()
  navItems.blog.enabled = blogs.length > 0
  return navItems
}

export async function Navbar() {
  const navItems = await getNavItems()

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className="text-3xl font-bold text-[#16f2b3]">
            {personalData.name.toUpperCase()}
          </Link>
        </div>

        <ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          {Object.values(navItems)
            .filter((item) => item.enabled)
            .map((item) => (
              <li key={item.id}>
                <a
                  className="block px-4 py-2 no-underline outline-none hover:no-underline"
                  href={`#${item.id}`}
                >
                  <div className="text-sm text-white uppercase transition-colors duration-300 hover:text-pink-600">
                    {item.name}
                  </div>
                </a>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  )
}
