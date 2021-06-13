import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export const splitScroll = (pinElement: string) => {
  gsap.registerPlugin(ScrollTrigger)

  ScrollTrigger.create({
    trigger: pinElement,
    start: 'top 10%',
    end: '100%',
    pin: true,
  })
}
