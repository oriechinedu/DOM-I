const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

const navLinks = document.querySelectorAll('nav a');
const logo = document.querySelector('.logo')

const cta = document.querySelector('.cta')
const ctaH1 = document.querySelector('.cta .cta-text h1')
const ctaButton = document.querySelector('.cta .cta-text button')
const ctaImage = document.querySelector('#cta-img')

const mainContent = document.querySelector('.main-content')
const topContentH4 = document.querySelectorAll('.main-content .top-content .text-content h4')
const topContentP = document.querySelectorAll('.main-content .top-content .text-content p')

const middleImage = document.querySelector('#middle-img')

const bottomContentH4 = document.querySelectorAll('.main-content .bottom-content .text-content h4')
const bottomContentP = document.querySelectorAll('.main-content .bottom-content .text-content p')

const contact = document.querySelector('.contact')
const contactH4 = document.querySelector('.contact h4')
const contactPs = document.querySelectorAll('.contact p')

const footerP = document.querySelector('footer p')

const siteNavContents = Object.values(siteContent["nav"])

navLinks.forEach((nav, i )=> {
  nav.textContent = siteNavContents[i]
})
logo.src = 'img/logo.png';
const wordsInH1 = siteContent['cta']['h1'].split(' ')
const wordsWithBr = wordsInH1.map((word, i, wordsInH1) => {
  if (i !== (wordsInH1.length -1)) {
    return `${word} <br>`
  } else {
    return word;
  }
}).join(' ')

ctaH1.insertAdjacentHTML("afterbegin", wordsWithBr)

ctaButton.textContent = siteContent['cta']['button']
ctaImage.src = 'img/header-img.png';

const mainContentVal = siteContent['main-content']
topContentH4[0].textContent = mainContentVal['features-h4']
topContentP[0].textContent = mainContentVal['features-content']

topContentH4[1].textContent = mainContentVal['about-h4']
topContentP[1].textContent = mainContentVal['about-content']

middleImage.src = 'img/mid-page-accent.jpg'

bottomContentH4[0].textContent = mainContentVal['services-h4']
bottomContentP[0].textContent = mainContentVal['services-content']
bottomContentH4[1].textContent = mainContentVal['product-h4']
bottomContentP[1].textContent = mainContentVal['product-content']

bottomContentH4[2].textContent = mainContentVal['vision-h4']
bottomContentP[2].textContent = mainContentVal['vision-content']

const contactVal = siteContent['contact']
contactH4.textContent = contactVal['contact-h4']

const contactPValues = Object.values(contactVal)

contactPValues.forEach((val, i) => {
  if(i !== 0) {
    contactPs[i - 1].textContent = val
  }
})

footerP.textContent = siteContent['footer']['copyright']

//change the color of navigation text to green

navLinks.forEach((nav, i )=> {
  nav.style.color = 'green'
})

const nav = document.querySelector('nav')
const elWithAppendChild = document.createElement('a')
elWithAppendChild.href = '#';
elWithAppendChild.style.color = 'green';
const elWithAppendChildText = document.createTextNode('FAQ');

elWithAppendChild.appendChild(elWithAppendChildText)

nav.appendChild(elWithAppendChild)

const elWithPrepend = document.createElement('a')
elWithPrepend.href = '#';
elWithPrepend.style.color = 'green';
const elWithPrependText = document.createTextNode('Home');

elWithPrepend.appendChild(elWithPrependText)

nav.prepend(elWithPrepend)

  