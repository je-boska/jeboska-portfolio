import ScrollMagic from 'scrollmagic'

export const splitScroll = () => {
  const controller = new ScrollMagic.Controller()

  new ScrollMagic.Scene({
    duration: '120%',
    triggerElement: '.video-container',
    triggerHook: 0,
  })
    .setPin('.video-container')
    .addTo(controller)
}
