'use strict';

/*
  Practice domain modeling by planning out an app w that allows users to choose their favorite between two myImages
  Let students participate by suggesting the steps needed to make the app run
  App Flow:
  - Welcome and instructions
  - Randomly put 2 myImages on the screen
    - Random number generator
    - a function to display myImages
  - A user clicks on a Bus
    - event listener needs to be on the image to fire the event handler
    - the event handler firesx
      - ? check if total clicks is 5 ?
      - stop letting the user click
    - if the user reach 5 tries remove image section for myImages and display to the user you fininshed.
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
var leftImageRandom;
var rightImageRandom;
var centerImageRandom;
var newArray = [];
var myImagesImages = [
  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'usb.gif',
  'water-can.jpg',
  'wine-glass.jpg'
];

// Globals
var leftBusImg = document.querySelector('#myLeftPic');
var rightBusImg = document.querySelector('#myRightPic');
var centerBusImg = document.querySelector('#myCenterPic');
var groupImageSection = document.getElementById('allBusMall');

var myImages = [];//an array to store all myImages object
var totalClicks = 1;



function Bus(urlImage) {
  this.name = urlImage.split('.')[0];
  this.urlImage = `images/${urlImage}`;
  this.view = 0;
  this.clicks = 0;
  myImages.push(this);//this its refer to the object that im created
  console.log(myImages);
}

function pickRandomImages() {
  console.log(myImages);
  leftImageRandom = myImages[randomNumber(0, myImages.length - 1)];

  rightImageRandom = myImages[randomNumber(0, myImages.length - 1)];

  centerImageRandom = myImages[randomNumber(0, myImages.length - 1)];

  while ( leftImageRandom === rightImageRandom||  leftImageRandom === centerImageRandom ||rightImageRandom === centerImageRandom) {


    leftImageRandom = myImages[randomNumber(0, myImages.length - 1)];

    rightImageRandom = myImages[randomNumber(0, myImages.length - 1)];

    centerImageRandom = myImages[randomNumber(0, myImages.length - 1)]
  }



  leftBusImg.setAttribute('src', leftImageRandom.urlImage);
  leftBusImg.setAttribute('alt', leftImageRandom.name);
  rightBusImg.setAttribute('src', rightImageRandom.urlImage);
  rightBusImg.setAttribute('alt', rightImageRandom.name);

  centerBusImg.setAttribute('src', centerImageRandom.urlImage);
  centerBusImg.setAttribute('alt', centerImageRandom.name);


}

for (var i = 0; i < myImagesImages.length; i++) {
  console.log(myImagesImages[i]);
  new Bus(myImagesImages[i]);

}
pickRandomImages();


// Variables to store the goats already on the page
// the allImages array is a property of the GoatPicture constructor

function clickImage(e) {
  if (e.target.id === 'myLeftPic' || e.target.id === 'myRightPic'||e.target.id === 'myCenterPic') {
    pickRandomImages();


   
    totalClicks++;

  }
     if(e.target.id === 'myLeftPic'){

      leftImageRandom.clicks++

    

  }  if (e.target.id === 'myRightPic') {
    

    rightImageRandom.clicks++;


    
  }  if (e.target.id === 'myCenterPic') {
   

    centerImageRandom.clicks++;

    
  }
  else if (totalClicks === 25) {
    //remove event listener
    leftBusImg.remove();
    rightBusImg.remove();
    centerBusImg.remove();
    // renderTheResult();

    groupImageSection.removeEventlistener('click', clickImage);



    // console.log('finished');
  }
}
//for(var i = 0; i< 25 ; i++){



groupImageSection.addEventListener('click', clickImage);
//when they reach total max clicks, remove the clicky function



// Instantiate my image objects
//helper functions
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}