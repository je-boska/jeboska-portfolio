import ScrollMagic from 'scrollmagic'

export const splitScroll = (element: string) => {
  const controller = new ScrollMagic.Controller()

  new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: element,
    triggerHook: 0,
  })
    .setPin(element)
    .addTo(controller)
}
