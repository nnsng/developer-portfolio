import { getPersonalData } from '@/services/data'
import { Fragment } from 'react'

export async function CoderObject() {
  const personalData = await getPersonalData()

  return (
    <div className="relative order-1 rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] lg:order-2">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 py-5 lg:px-8">
        <div className="flex flex-row space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-400"></div>
          <div className="h-3 w-3 rounded-full bg-orange-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-200"></div>
        </div>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 py-4 lg:px-8 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">coder</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>
          <div>
            <span className="mr-2 ml-4 text-white lg:ml-8">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">{personalData.name}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>
          <div className="mr-2 ml-4 lg:ml-8">
            <span className="text-white">skills:</span>
            <span className="text-gray-400">{`['`}</span>
            {personalData.skills.map((skill, idx) => (
              <Fragment key={idx}>
                {idx > 0 && <span className="text-gray-400">{"', '"}</span>}
                <span className="text-amber-300">{skill}</span>
              </Fragment>
            ))}
            <span className="text-gray-400">{"'],"}</span>
          </div>
          <div>
            <span className="mr-2 ml-4 text-white lg:ml-8">hardWorker:</span>
            <span className="text-orange-400">true</span>
            <span className="text-gray-400">,</span>
          </div>
          <div>
            <span className="mr-2 ml-4 text-white lg:ml-8">quickLearner:</span>
            <span className="text-orange-400">true</span>
            <span className="text-gray-400">,</span>
          </div>
          <div>
            <span className="mr-2 ml-4 text-white lg:ml-8">problemSolver:</span>
            <span className="text-orange-400">true</span>
            <span className="text-gray-400">,</span>
          </div>
          <div>
            <span className="mr-2 ml-4 text-green-400 lg:ml-8">hireable:</span>
            <span className="text-orange-400">function</span>
            <span className="text-gray-400">{'() {'}</span>
          </div>
          <div>
            <span className="mr-2 ml-8 text-orange-400 lg:ml-16">return</span>
            <span className="text-gray-400">{`(`}</span>
          </div>
          <div>
            <span className="ml-12 text-cyan-400 lg:ml-24">this.</span>
            <span className="mr-2 text-white">hardWorker</span>
            <span className="text-amber-300">&amp;&amp;</span>
          </div>
          <div>
            <span className="ml-12 text-cyan-400 lg:ml-24">this.</span>
            <span className="mr-2 text-white">problemSolver</span>
            <span className="text-amber-300">&amp;&amp;</span>
          </div>
          <div>
            <span className="ml-12 text-cyan-400 lg:ml-24">this.</span>
            <span className="mr-2 text-white">skills.length</span>
            <span className="mr-2 text-amber-300">&gt;=</span>
            <span className="text-orange-400">5</span>
          </div>
          <div>
            <span className="mr-2 ml-8 text-gray-400 lg:ml-16">{`);`}</span>
          </div>
          <div>
            <span className="ml-4 text-gray-400 lg:ml-8">{`};`}</span>
          </div>
          <div>
            <span className="text-gray-400">{`};`}</span>
          </div>
        </code>
      </div>
    </div>
  )
}
