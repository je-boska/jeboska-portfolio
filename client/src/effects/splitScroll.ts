import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export const splitScroll = (pinElement: string) => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.set(pinElement, {
    opacity: 0,
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
    opacity: 0,
    duration: 0.5,
    transform: 'translateY(20vh) scale(0.7, 0.7) perspective(800px)',
    rotateX: -40,
    willChange: 'opacity, transform, rotateX',
  })
    .to(pinElement, {
      opacity: 1,
      duration: 1,
      transform: 'translateY(-0vh) scale(1, 1) perspective(800px)',
      rotateX: 0,
      willChange: 'opacity, transform, rotateX',
    })
    .to(pinElement, {
      opacity: 0,
      duration: 0.5,
      transform: 'translateY(-20vh) scale(0.7, 0.7) perspective(800px)',
      rotateX: 40,
      willChange: 'opacity, transform, rotateX',
    })
}
