'use client'

import Lottie, { type LottieComponentProps } from 'lottie-react'

type AnimationLottieProps = {
  animationPath: LottieComponentProps['animationData']
}

const AnimationLottie = ({ animationPath }: AnimationLottieProps) => {
  const defaultOptions: LottieComponentProps = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    },
  }

  return <Lottie {...defaultOptions} />
}

export default AnimationLottie
