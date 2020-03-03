'use strict';

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

  while (leftImageRandom === rightImageRandom || leftImageRandom === centerImageRandom || rightImageRandom === centerImageRandom) {


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
  if (e.target.id === 'myLeftPic' || e.target.id === 'myRightPic' || e.target.id === 'myCenterPic') {
    pickRandomImages();



    totalClicks++;

  }
  if (e.target.id === 'myLeftPic') {

    leftImageRandom.clicks++



  } if (e.target.id === 'myRightPic') {


    rightImageRandom.clicks++;



  } if (e.target.id === 'myCenterPic') {


    centerImageRandom.clicks++;


  }
  if (totalClicks === 25) {
    //remove event listener
    leftBusImg.remove();
    rightBusImg.remove();
    centerBusImg.remove();

    renderResult();
    groupImageSection.removeEventListener('click', clickImage);




  }
}



groupImageSection.addEventListener('click', clickImage);


function renderResult() {
  var ulReult = document.getElementById("totalResult")
  for (var i = 0; i < myImagesImages.length; i++) {

    var reslutLi = document.createElement('li');
    ulReult.appendChild(reslutLi);
    reslutLi.textContent = ` The ${myImages[i].name} had ${myImages[i].clicks} clicks`;
    var resluthr = document.createElement('hr');
    ulReult.appendChild(resluthr);

  }


}


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
