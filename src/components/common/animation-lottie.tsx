'use client'

import Lottie, { type LottieComponentProps } from 'lottie-react'

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
