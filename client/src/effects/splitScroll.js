import ScrollMagic from 'scrollmagic'

export const splitScroll = slug => {
  const controller = new ScrollMagic.Controller()

  new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: `.${slug}_video-container`,
    triggerHook: 0,
  })
    .setPin(`.${slug}_video-container`)
    .addTo(controller)
}
