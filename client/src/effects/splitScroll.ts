import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export const splitScroll = (pinElement: string, isLargerThan650: boolean) => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.set(pinElement, {
    opacity: 0,
    perspective: '800px',
  })

  // gsap.to(pinElement, {
  //   ease: 'in-out',
  //   scrollTrigger: {
  //     trigger: pinElement,
  //     markers: true,
  //     start: 'top 100%',
  //     end: 'top 0%',
  //     snap: {
  //       snapTo: "labels",
  //       duration: 0.5,
  //     },
  //   },
  // })

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
        duration: { min: 0, max: 0.6 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        delay: 0, // wait 0.2 seconds from the last scroll event before doing the snapping
        // ease: 'power1.inOut', // the ease of the snap animation ("power3" by default)
      },
    },
  })

  tl.to(pinElement, {
    ease: 'in-out',
    opacity: 0,
    // duration: 0.5,
    transform: `translateY(10vh) scale(0.7, 0.7) ${
      isLargerThan650 && 'perspective(800px)'
    }`,
    rotateX: -40,
    willChange: 'opacity, transform, rotateX',
  })
    .to(pinElement, {
      opacity: 1,
      // duration: 1,
      transform: `translateY(-0vh) scale(1, 1) ${
        isLargerThan650 && 'perspective(800px)'
      }`,
      willChange: 'opacity, transform, rotateX',
    })
    .addLabel('middle')
    .to(pinElement, {
      ease: 'in-out',
      opacity: 0,
      // duration: 0.5,
      transform: `translateY(-10vh) scale(0.7, 0.7) ${
        isLargerThan650 && 'perspective(800px)'
      }`,
      rotateX: 40,
      willChange: 'opacity, transform, rotateX',
    })
}
