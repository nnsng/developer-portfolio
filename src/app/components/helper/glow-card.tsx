'use client'

import { useEffect } from 'react'

type GlowCardProps = {
  children: React.ReactNode
  identifier: string
}

const CONFIG = {
  proximity: 40,
  spread: 80,
  blur: 12,
  gap: 32,
  vertical: false,
  opacity: 0,
}

function GlowCard({ children, identifier }: GlowCardProps) {
  useEffect(() => {
    const container = document.querySelector<HTMLElement>(`.glow-container-${identifier}`)!
    const cards = Array.from(document.querySelectorAll<HTMLElement>(`.glow-card-${identifier}`))

    const setHtmlProperty = (element: HTMLElement, property: string, value: string | number) => {
      element.style.setProperty(property, value.toString())
    }

    const update = (event?: PointerEvent) => {
      for (const card of cards) {
        const cardBounds = card.getBoundingClientRect()

        if (
          event &&
          event.x > cardBounds.left - CONFIG.proximity &&
          event.x < cardBounds.left + cardBounds.width + CONFIG.proximity &&
          event.y > cardBounds.top - CONFIG.proximity &&
          event.y < cardBounds.top + cardBounds.height + CONFIG.proximity
        ) {
          setHtmlProperty(card, '--active', 1)
        } else {
          setHtmlProperty(card, '--active', CONFIG.opacity)
        }

        const cardCenter = [
          cardBounds.left + cardBounds.width * 0.5,
          cardBounds.top + cardBounds.height * 0.5,
        ]

        if (event) {
          let angle = (Math.atan2(event.y - cardCenter[1], event.x - cardCenter[0]) * 180) / Math.PI
          angle = angle < 0 ? angle + 360 : angle

          setHtmlProperty(card, '--start', angle + 90)
        }
      }
    }

    document.body.addEventListener('pointermove', update)

    const restyle = () => {
      setHtmlProperty(container, '--gap', CONFIG.gap)
      setHtmlProperty(container, '--blur', CONFIG.blur)
      setHtmlProperty(container, '--spread', CONFIG.spread)
      setHtmlProperty(container, '--direction', CONFIG.vertical ? 'column' : 'row')
    }

    restyle()
    update()

    // Cleanup event listener
    return () => {
      document.body.removeEventListener('pointermove', update)
    }
  }, [identifier])

  return (
    <div className={`glow-container-${identifier} glow-container`}>
      <article
        className={`glow-card glow-card-${identifier} relative h-fit w-full cursor-pointer rounded-xl border border-[#2a2e5a] bg-[#101123] text-gray-200 transition-all duration-300 hover:border-transparent`}
      >
        <div className="glows"></div>
        {children}
      </article>
    </div>
  )
}

export default GlowCard
