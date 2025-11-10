import { useEffect, useRef } from 'react'
import Lottie from 'lottie-react'

export default function LottieIcon({ data, className = 'w-12 h-12', loop = true, hoverBoost = true }) {
  const ref = useRef()

  useEffect(() => {
    if (!ref.current) return
    if (!hoverBoost) return
    const el = ref.current?.container || ref.current
    const onEnter = () => ref.current?.setSpeed?.(1.6)
    const onLeave = () => ref.current?.setSpeed?.(1)
    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [hoverBoost])

  return (
    <Lottie lottieRef={ref} animationData={data} loop={loop} className={className} style={{ filter: 'drop-shadow(0 0 8px rgba(150,212,255,0.15))' }} />
  )
}
