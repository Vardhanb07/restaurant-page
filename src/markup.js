const body = document.querySelector('body')
const headDiv = document.createElement('div')
body.appendChild(headDiv)
headDiv.classList.add('head-div')
//restaurant-name
const restaurantName = document.createElement('p')
restaurantName.classList.add('restaurant-name')
restaurantName.textContent = 'Restaurant'
headDiv.appendChild(restaurantName)
//navigation
const nav = document.createElement('nav')
nav.classList.add('navigation')
headDiv.appendChild(nav)
const home = document.createElement('button')
nav.appendChild(home)
home.textContent = 'HOME'
home.classList.add('home')
const menu = document.createElement('button')
nav.appendChild(menu)
menu.textContent = 'MENU'
menu.classList.add('menu')
const about = document.createElement('button')
nav.appendChild(about)
about.textContent = 'ABOUT'
about.classList.add('about')
//information-div
const informationDiv = document.createElement('div')
informationDiv.classList.add('information-div')
body.appendChild(informationDiv)