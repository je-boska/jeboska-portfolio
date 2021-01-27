import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export const splitScroll = (pinElement: string, isLargerThan650: boolean) => {
  if (isLargerThan650) {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.create({
      trigger: pinElement,
      start: 'top top',
      end: '100%',
      pin: true,
    })
  }
}
