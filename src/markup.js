import dosaImage from "./images/dosa.jpg"
import chickenImage from "./images/chicken.jpg"
import idliImage from "./images/idli.jpg"
import pongalImage from "./images/pongal.jpeg"
import githubIcon from "./icons/github.svg"
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
export const home = document.createElement('button')
nav.appendChild(home)
home.textContent = 'HOME'
home.classList.add('home')
export const menu = document.createElement('button')
nav.appendChild(menu)
menu.textContent = 'MENU'
menu.classList.add('menu')
export const about = document.createElement('button')
nav.appendChild(about)
about.textContent = 'CONTACT'
about.classList.add('about')
//information-div
const informationDiv = document.createElement('div')
informationDiv.classList.add('information-div')
body.appendChild(informationDiv)
//home-description
export const homeDescription = document.createElement('div')
informationDiv.appendChild(homeDescription)
homeDescription.classList.add('home-description')
let para = document.createElement('p')
homeDescription.appendChild(para)
para.textContent = `Enjoy a South Indian feast with crispy dosas, fluffy idlis, and crunchy vadas, all paired with vibrant chutneys and sambhar. Relish soothing Pongal, savory uttapam, and bold Chettinad curries, ending with frothy filter coffee. Every dish is a blend of tradition, flavor, and warmth. Which one tempts you most?`
// menu-description
export const menuDescription = document.createElement('div')
menuDescription.classList.add('menu-description')
informationDiv.appendChild(menuDescription)
//item-dosa
let div = document.createElement('div')
div.classList.add('dosa-info')
let img = document.createElement('img')
img.src = dosaImage
img.alt = 'dosa-jpg'
img.setAttribute('height', '180')
img.setAttribute('width', '180')
div.appendChild(img)
menuDescription.appendChild(div)
let outerDiv = document.createElement('div')
let innerDiv = document.createElement('div')
innerDiv.classList.add('item-name')
para = document.createElement('p')
para.textContent = 'ITEM'
para.classList.add('item')
innerDiv.appendChild(para)
para  = document.createElement('p')
para.textContent = 'DOSA'
innerDiv.appendChild(para)
outerDiv.appendChild(innerDiv)
innerDiv = document.createElement('div')
innerDiv.classList.add('item-price')
para = document.createElement('p')
para.textContent = 'PRICE'
para.classList.add('price')
innerDiv.appendChild(para)
para  = document.createElement('p')
para.textContent = '100 INR'
innerDiv.appendChild(para)
outerDiv.appendChild(innerDiv)
div.appendChild(outerDiv)
//item-chicken
div = document.createElement('div')
div.classList.add('chicken-info')
img = document.createElement('img')
img.src = chickenImage
img.alt = 'chicken-jpg'
img.setAttribute('height', '200')
img.setAttribute('width', '240')
div.appendChild(img)
menuDescription.appendChild(div)
outerDiv = document.createElement('div')
innerDiv = document.createElement('div')
innerDiv.classList.add('item-name')
para = document.createElement('p')
para.textContent = 'ITEM'
para.classList.add('item')
innerDiv.appendChild(para)
para  = document.createElement('p')
para.textContent = 'CHICKEN'
innerDiv.appendChild(para)
outerDiv.appendChild(innerDiv)
innerDiv = document.createElement('div')
innerDiv.classList.add('item-price')
para = document.createElement('p')
para.textContent = 'PRICE'
para.classList.add('price')
innerDiv.appendChild(para)
para  = document.createElement('p')
para.textContent = '100 INR'
innerDiv.appendChild(para)
outerDiv.appendChild(innerDiv)
div.appendChild(outerDiv)
//item-idli
div = document.createElement('div')
div.classList.add('idli-info')
img = document.createElement('img')
img.src = idliImage
img.alt = 'idli-jpg'
img.setAttribute('height', '180')
img.setAttribute('width', '180')
div.appendChild(img)
menuDescription.appendChild(div)
outerDiv = document.createElement('div')
innerDiv = document.createElement('div')
innerDiv.classList.add('item-name')
para = document.createElement('p')
para.textContent = 'ITEM'
para.classList.add('item')
innerDiv.appendChild(para)
para  = document.createElement('p')
para.textContent = 'IDLI'
innerDiv.appendChild(para)
outerDiv.appendChild(innerDiv)
innerDiv = document.createElement('div')
innerDiv.classList.add('item-price')
para = document.createElement('p')
para.textContent = 'PRICE'
para.classList.add('price')
innerDiv.appendChild(para)
para  = document.createElement('p')
para.textContent = '100 INR'
innerDiv.appendChild(para)
outerDiv.appendChild(innerDiv)
div.appendChild(outerDiv)
//item-pongal
div = document.createElement('div')
div.classList.add('pongal-info')
img = document.createElement('img')
img.src = pongalImage
img.alt = 'pongal-jpeg'
img.setAttribute('height', '180')
img.setAttribute('width', '180')
div.appendChild(img)
menuDescription.appendChild(div)
outerDiv = document.createElement('div')
innerDiv = document.createElement('div')
innerDiv.classList.add('item-name')
para = document.createElement('p')
para.textContent = 'ITEM'
para.classList.add('item')
innerDiv.appendChild(para)
para  = document.createElement('p')
para.textContent = 'PONGAL'
innerDiv.appendChild(para)
outerDiv.appendChild(innerDiv)
innerDiv = document.createElement('div')
innerDiv.classList.add('item-price')
para = document.createElement('p')
para.textContent = 'PRICE'
para.classList.add('price')
innerDiv.appendChild(para)
para  = document.createElement('p')
para.textContent = '100 INR'
innerDiv.appendChild(para)
outerDiv.appendChild(innerDiv)
div.appendChild(outerDiv)
//about-description 
export const aboutDescription = document.createElement('div')
aboutDescription.classList.add('about-description')
informationDiv.appendChild(aboutDescription)
outerDiv = document.createElement('div')
outerDiv.classList.add('contact-us')
innerDiv = document.createElement('div')
innerDiv.classList.add('contact')
para = document.createElement('p')
para.textContent = 'Person'
innerDiv.appendChild(para)
let contact = document.createElement('div')
para = document.createElement('p')
para.textContent = 'Chef'
contact.appendChild(para)
para = document.createElement('p')
para.textContent = '000-000-0000'
contact.appendChild(para)
para = document.createElement('p')
para.textContent = 'email@email.com'
contact.appendChild(para)
innerDiv.appendChild(contact)
outerDiv.appendChild(innerDiv)
aboutDescription.appendChild(outerDiv)
outerDiv = document.createElement('div')
outerDiv.classList.add('contact-us')
innerDiv = document.createElement('div')
innerDiv.classList.add('contact')
para = document.createElement('p')
para.textContent = 'Person'
innerDiv.appendChild(para)
contact = document.createElement('div')
para = document.createElement('p')
para.textContent = 'Manager'
contact.appendChild(para)
para = document.createElement('p')
para.textContent = '000-000-0000'
contact.appendChild(para)
para = document.createElement('p')
para.textContent = 'email@email.com'
contact.appendChild(para)
innerDiv.appendChild(contact)
outerDiv.appendChild(innerDiv)
aboutDescription.appendChild(outerDiv)
outerDiv = document.createElement('div')
outerDiv.classList.add('contact-us')
innerDiv = document.createElement('div')
innerDiv.classList.add('contact')
para = document.createElement('p')
para.textContent = 'Person'
innerDiv.appendChild(para)
contact = document.createElement('div')
para = document.createElement('p')
para.textContent = 'Waiter'
contact.appendChild(para)
para = document.createElement('p')
para.textContent = '000-000-0000'
contact.appendChild(para)
para = document.createElement('p')
para.textContent = 'email@email.com'
contact.appendChild(para)
innerDiv.appendChild(contact)
outerDiv.appendChild(innerDiv)
aboutDescription.appendChild(outerDiv)
//footer 
const footer = document.createElement('footer')
body.appendChild(footer)
const a = document.createElement('a')
a.href = 'https://github.com/Vardhanb07/restaurant-page'
a.target = '_blank'
const githubImage = document.createElement('img')
githubImage.classList.add('github-icon')
githubImage.src = githubIcon
githubImage.alt = 'github-svg'
githubImage.setAttribute('height','30')
githubImage.setAttribute('width', '30')
a.appendChild(githubImage)
footer.appendChild(a)
