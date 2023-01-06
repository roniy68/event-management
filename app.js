import UI from './components/UI.js';

// Speakers
const featuredSpeakers = [
    {
      name: 'Dylan Beattie',
      title: 'The one in the hat',
      image: '../assets/featuredSpeakers/dylanBeattie.jpg',
      description: "Dylan Beattie is an independent consultant who has been building data-driven web applications since the 1990s. He's managed teams, taught workshops, and worked on everything from tiny standalone websites to complex distributed systems.",
    },
    {
      name: 'Irina Scurtu',
      title: 'Microsoft MVP, Software Architect',
      image: '../assets/featuredSpeakers/irinaScurtu.jpeg',
      description: 'Microsoft MVP for Developer Technologies, Software Architect and Microsoft Certified Trainer, always in a quest for latest trends and best practices in architecture, .NET and the world around it.',
    },
    {
      name: 'Sam Newman',
      title: 'Independent Consultant',
      image: '../assets/featuredSpeakers/samNewman.jpg',
      description: 'Sam Newman is interested in technology at the intersection of things, from development, to ops, to security, usability and organisations. After over a decade at ThoughtWorks he is now an independent consultant.',
    },
    {
      name: 'Heather Downing',
      title: 'Principal Developer Advocate at Okta',
      image: '../assets/featuredSpeakers/heatherDowning.jpg',
      description: 'Climbing the technology mountain and halfway up the side. Experience in .Net, mobile applications and more recently voice interface development. Dabbles in iOT & AR/VR.',
    },
  ];

// Initial home 
const root = document.querySelector('#root');
root.innerHTML = UI.header();
root.innerHTML += UI.main();

// About 
function goabout(){
    const main = document.querySelector('.main');
    main.innerHTML = UI.about();
}
// Home
function gohome(){
    const main = document.querySelector('.main');
    main.innerHTML = UI.main();
}
const about = document.querySelectorAll("#about");
about.forEach( a => {
    a.addEventListener('click', goabout);
})

const logo = document.querySelector("#logo");
logo.addEventListener('click', gohome);

// Add Speakers


// Hamburger
const body = document.querySelector('body');
const navPopup = document.querySelector('.nav-popup');
const hamBurger = document.querySelector('.menu-icon');

hamBurger.addEventListener('click', () => {
  if (window.getComputedStyle(navPopup).display === 'none') {
    navPopup.style.display = 'flex';
    body.style.overflow = 'hidden';
    hamBurger.classList.remove('fa-bars');
    hamBurger.classList.add('fa-xmark');
  } else {
    navPopup.style.display = 'none';
    body.style.overflow = 'auto';
    hamBurger.classList.remove('fa-xmark');
    hamBurger.classList.add('fa-bars');
  }
});