'use client'

import { type LottieComponentProps } from 'lottie-react'
import dynamic from 'next/dynamic'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

type AnimationLottieProps = {
  animationData: LottieComponentProps['animationData']
}

export function AnimationLottie({ animationData }: AnimationLottieProps) {
  const defaultOptions: LottieComponentProps = {
    loop: true,
    autoplay: true,
    animationData,
    style: {
      width: '95%',
    },
  }

  return <Lottie {...defaultOptions} />
}
