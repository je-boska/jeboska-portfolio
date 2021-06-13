const makeElementVisible = (element: HTMLElement): void => {
  element.style.opacity = '1'
}
const makeElementInvisible = (element: HTMLElement): void => {
  element.style.opacity = '0'
}

const checkPosition = (element: HTMLElement, windowHeight: number) => {
  let positionFromTop = element.getBoundingClientRect().top
  if (positionFromTop - windowHeight <= 0) {
    makeElementVisible(element)
  }
  if (positionFromTop <= 0 || positionFromTop - windowHeight >= 0) {
    makeElementInvisible(element)
  }
}

export const fadeIn = (): void => {
  let elements: NodeListOf<HTMLElement> = document.querySelectorAll('.to-fade')
  let windowHeight = window.innerHeight / 20

  for (let i = 0; i < elements.length; i++) {
    checkPosition(elements[i], windowHeight)
  }
}
