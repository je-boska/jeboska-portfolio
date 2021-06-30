import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export const splitScroll = (pinElement: string) => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.set(pinElement, {
    opacity: 0,
    perspective: '800px',
  })

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: pinElement,
      start: 'top 100%',
      end: '50%',
      // pin: true,
      scrub: true,
      // markers: true,
      toggleActions: 'play reverse play reverse',
      snap: {
        snapTo: 'labels', // snap to the closest label in the timeline
        duration: { min: 0, max: 0.6 },
        delay: 0.2,
      },
    },
  })

  tl.to(pinElement, {
    ease: 'in-out',
    opacity: 0,
    transform: 'scale(0.7, 0.7) perspective(800px)',
    rotateX: -40,
    willChange: 'opacity, rotateX',
  })
    .to(pinElement, {
      opacity: 1,
      transform: 'translateY(5vh) scale(1, 1) perspective(800px)',
      willChange: 'opacity, transform, rotateX',
    })
    .addLabel('middle')
    .to(pinElement, {
      ease: 'in-out',
      opacity: 0,
      transform: 'scale(0.7, 0.7) perspective(800px)',
      rotateX: 40,
      willChange: 'opacity, rotateX',
    })
}
