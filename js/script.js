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
const featuredWorkSection = document.createElement('section');
featuredWorkSection.setAttribute('class', 'featured-work');
// create h2 element and add text to it
const secondTitle = document.createElement('h2');
const secondTitileText = document.createTextNode('Featured Work');
secondTitle.appendChild(secondTitileText);
// add section and the header to the DOM
body.appendChild(featuredWorkSection);
featuredWorkSection.appendChild(secondTitle);
// create div container for images and add class to it
const imgContainer = document.createElement('div');
imgContainer.setAttribute('class', 'image-container');
featuredWorkSection.appendChild(imgContainer);
// create 3 images
for(let i = 1; i <= 3; i++){
  const imgBox = document.createElement('div');
  imgBox.setAttribute('class', 'image');
  const image = document.createElement('img');
  image.setAttribute('src', 'images/' + i + '.jpeg');
  image.setAttribute('alt', 'image of an architecure');
  const titleImg = document.createElement('p');
  let titleImgText = document.createTextNode('Title');
  titleImg.appendChild(titleImgText);
  const linkImg = document.createElement('a');
  linkImg.setAttribute('href', '#');
  let linkText = document.createTextNode('link');
  linkImg.appendChild(linkText);
  // add all elements to the DOM
  imgContainer.appendChild(imgBox);
  imgBox.appendChild(image);
  imgBox.appendChild(titleImg);
  imgBox.appendChild(linkImg);
}
