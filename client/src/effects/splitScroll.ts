import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export const splitScroll = (pinElement: string, isLargerThan650: boolean) => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.set(pinElement, {
    opacity: 0,
    perspective: '800px',
  })

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: pinElement,
      start: 'top 100%',
      end: '35%',
      // pin: true,
      scrub: true,
      // markers: true,
      toggleActions: 'play reverse play reverse',
    },
  })

  tl.to(pinElement, {
    ease: 'in-out',
    opacity: 0,
    duration: 0.5,
    transform: `translateY(10vh) scale(0.7, 0.7) ${
      isLargerThan650 && 'perspective(800px)'
    }`,
    rotateX: -40,
    willChange: 'opacity, transform, rotateX',
  })
    .to(pinElement, {
      opacity: 1,
      duration: 1,
      transform: `translateY(-0vh) scale(1, 1) ${
        isLargerThan650 && 'perspective(800px)'
      }`,
      willChange: 'opacity, transform, rotateX',
    })
    .to(pinElement, {
      ease: 'in-out',
      opacity: 0,
      duration: 0.5,
      transform: `translateY(-10vh) scale(0.7, 0.7) ${
        isLargerThan650 && 'perspective(800px)'
      }`,
      rotateX: 40,
      willChange: 'opacity, transform, rotateX',
    })
}
