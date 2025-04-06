import { menu, home, about, homeDescription, aboutDescription, menuDescription } from "./markup.js"
home.addEventListener('click', () => {
    homeDescription.style.display = 'flex'
    aboutDescription.style.display = 'none'
    menuDescription.style.display = 'none'
})
menu.addEventListener('click', () => {
    menuDescription.style.display = 'flex'
    aboutDescription.style.display = 'none'
    homeDescription.style.display = 'none'
})
about.addEventListener('click', () => {
    menuDescription.style.display = 'none'
    aboutDescription.style.display = 'flex'
    homeDescription.style.display = 'none'
})
