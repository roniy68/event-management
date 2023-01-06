const testimonialObjs = [{
  name: 'Lucette Jones',
  comment: 'I have so much joy working with so many programmers',
  city: 'Paris',
  country: 'France',
  imgsrc: 'images/person1.jpg',
  imgdescription: 'person1',
},
{
  name: 'Akito Nakaya',
  comment: 'I love Drsight and the community they built',
  city: 'Osaka',
  country: 'Japan',
  imgsrc: 'images/person2.jpg',
  imgdescription: 'person2',
},
{
  name: 'Janine Smith',
  comment: 'I have been working alone for years on projects. But coding con gave me new perspective',
  city: 'Jacksonville',
  country: 'Florida, USA',
  imgsrc: 'images/person3.jpg',
  imgdescription: 'person3',
},
{
  name: 'Sanford Josan',
  comment: 'I love the way coding con works at DrSight.',
  city: 'Atlanta',
  country: 'Georgia, USA',
  imgsrc: 'images/person4.jpg',
  imgdescription: 'person4',
},
{
  name: 'Robyn Doe',
  comment: 'Pair Programming was the only thing that completed me.',
  city: 'Manchester',
  country: 'U.K',
  imgsrc: 'images/person5.jpg',
  imgdescription: 'person5',
},
{
  name: 'David Dillans',
  comment: 'I love to code ...............',
  city: 'Munich',
  country: 'Germany',
  imgsrc: 'images/person6.jpg',
  imgdescription: 'person6',
}];
const hamburgerBtn = document.querySelector('.icon-menu-mobile img');
const crossBtn = document.querySelector('.cross img');
const showMoreBtn = document.querySelector('.testimonial-btn button');
const mobileMenu = document.querySelector('.nav-mobile');
const mobileMenuElements = document.querySelectorAll('.nav-mobile .container li');
const testimonialContainer = document.querySelector('.testimonial-container');
hamburgerBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
  hamburgerBtn.style.display = 'none';
});
crossBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  hamburgerBtn.style.display = 'block';
});

mobileMenuElements.forEach((menuElement) => {
  menuElement.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    hamburgerBtn.style.display = 'block';
  });
});
let content = '';
testimonialObjs.forEach((testimonialObj) => {
  content += `<div class="testimonial-card">
     <div class="testimonial-image">
         <img src="${testimonialObj.imgsrc}" alt="${testimonialObj.imgdescription}">
     </div>
     <div class="testimonial-content">
         <h2>${testimonialObj.name}</h2>
         <h4>"${testimonialObj.comment}"
         </h4>
         <hr>
         <p>From ${testimonialObj.city}, ${testimonialObj.country}</p>
     </div>
  </div>`;
});

testimonialContainer.innerHTML += content;
const testimonials = document.querySelectorAll('.testimonial-card');
if (showMoreBtn !== null) {
  showMoreBtn.addEventListener('click', () => {
    testimonials.forEach((testimonial, index) => {
      if (index > 1) {
        if (window.getComputedStyle(testimonial).display === 'none') {
          testimonial.style.display = 'flex';
        } else {
          testimonial.style.display = 'none';
        }
      }
    });
    if (testimonials[2].style.display === 'none') {
      showMoreBtn.innerHTML = 'More <img src="images/icons/down-arrow.svg" alt="down icon">';
    } else {
      showMoreBtn.innerHTML = 'Less <img src="images/icons/up-arrow.svg" alt="down icon">';
    }
  });
}
