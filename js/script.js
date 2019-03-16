
// <section class="featured-work">
//   <h2>Featured Work</h2>
//   <div class="image-container">
//     <div class="image">
//       <img src="images/1.jpeg" alt="image of an architecure">
//       <p class="title">Title</p>
//       <a href="#">link</a>
//     </div>
//     <div class="image">
//       <img src="images/2.jpeg" alt="image of an architecure">
//       <p class="title">Title</p>
//       <a href="#">link</a>
//     </div>
//     <div class="image">
//       <img src="images/3.jpeg" alt="image of an architecure">
//       <p class="title">Title</p>
//       <a href="#">link</a>
//     </div>
//   </div>
// </section>


// targeting elements
const body = document.querySelector('body');

// **************** Header *********************
// create header element
const header = document.createElement('header');
// create h1 element and add text to it
const title = document.createElement('h1');
const titleText = document.createTextNode('Marzena Szopinska');
// push the text inside h1 element
title.appendChild(titleText);
// create h3 element and add text to it
const subtitile = document.createElement('h3');
const subtitleText = document.createTextNode('Front-End Developer');
// push the text inside h3 element
subtitile.appendChild(subtitleText);
// add the header to the DOM
body.appendChild(header);
header.appendChild(title);
header.appendChild(subtitile);

// **************** Main Work Section *********************
// create section element and add clas to it
const mainWorkSection = document.createElement('section');
mainWorkSection.setAttribute('class', 'main-work');
// create img element and add src, alt and class attributes to it
const mainImg = document.createElement('img');
mainImg.setAttribute('src', 'images/main.jpeg');
mainImg.setAttribute('alt', 'image of an architecutre plan');
mainImg.setAttribute('class', 'main-picture');
// add element to the DOM
body.appendChild(mainWorkSection);
mainWorkSection.appendChild(mainImg);

// **************** Featured Work Section *********************
