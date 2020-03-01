'use strict';

/*
  Practice domain modeling by planning out an app w that allows users to choose their favorite between two goats
  Let students participate by suggesting the steps needed to make the app run
  App Flow:
  - Welcome and instructions
  - Randomly put 2 goats on the screen
    - Random number generator
    - a function to display goats
  - A user clicks on a goat
    - event listener needs to be on the image to fire the event handler
    - the event handler firesx
      - ? check if total clicks is 5 ?
      - stop letting the user click
    - if the user reach 5 tries remove image section for goats and display to the user you fininshed.
  HTML
    - have a left and right image container in the html
    - Give them id's so we can select them
  We need an Array to hold all image Objects
  function to randomly pick an image{
  }
  click on an image, targetted by id
  add event listener('click', function(){
  })
*/

var goatsImages = [
  'cruisin-goat',
  'goat-away',
  'float-your-goat',
  'goat-out-of-hand',
  'kissing-goat',
  'sassy-goat',
  'smiling-goat',
  'sweater-goat'
];

// Globals
var leftGoatImage = document.querySelector('#left_goat_img');
var rightGoatImage = document.querySelector('#right_goat_img');
var groupImageSection = document.getElementById('all_goats');
var goats = [];//an array to store all goats object
var totalClicks = 1;
// leftGoatImage.src = `images/${goatsImages[0]}.jpg`;
// leftGoatImage.alt = goatsImages[0];

// rightGoatImage.src = `images/${goatsImages[1]}.jpg`;
// rightGoatImage.alt = goatsImages[1];

//constructor function to generate dynamic goats objects
function Goat(name){
  this.name = name;
  this.urlImage = `images/${this.name}.jpg`;
  goats.push(this);//this its refer to the object that im created
}

function pickRandomImages(){
  var leftImageRandom =  goats[randomNumber(0 , goats.length-1 )];

  var rightImageRandom =  goats[randomNumber(0 , goats.length-1 )];
  leftGoatImage.setAttribute('src' , leftImageRandom.urlImage);
  leftGoatImage.setAttribute('alt' , leftImageRandom.name);
  rightGoatImage.setAttribute('src' , rightImageRandom.urlImage);
  rightGoatImage.setAttribute('alt' ,rightImageRandom.name);
  while(leftGoatImage === rightGoatImage){
    //pick another random number
  }
}

for(var i = 0; i< goatsImages.length ; i++){
  new Goat(goatsImages[i]);//we pass the name of the goats from the array
}
pickRandomImages();
console.log(goats);

// Variables to store the goats already on the page
// the allImages array is a property of the GoatPicture constructor
function clickImage(e){
  if( e.target.id === 'left_goat_img' || e.target.id === 'right_goat_img'){
    pickRandomImages();
    totalClicks++;
  }
  if(totalClicks === 6){
    //remove event listener
    leftGoatImage.remove();
    rightGoatImage.remove();
    console.log('finished');
  }
}

groupImageSection.addEventListener('click' , clickImage);

//when they reach total max clicks, remove the clicky function



// Instantiate my image objects
//helper functions
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}