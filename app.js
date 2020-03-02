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
var newArray=[];
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
// leftBusImg.src = `images/${myImagesImages[0]}.jpg`;
// leftBusImg.alt = myImagesImages[0];

//  rightBusImg.src = `images/${myImagesImages[1]}.jpg`;
//  rightBusImg.alt = myImagesImages[1];

//constructor function to generate dynamic myImages objects
function Bus(name){
  this.name = name;
  this.urlImage = `images/${this.name}`;
  myImages.push(this);//this its refer to the object that im created
}

function pickRandomImages(){
  var mynewImage=[];
var indexRandom=randomNumber(0 , myImages.length-1 );
  var leftImageRandom =  myImages[indexRandom];
 mynewImage= myImages.splice(indexRandom ,1);
leftClicks++;
newArray.push(leftImageRandom);

//console.log(` we click ${leftClicks} in ${myImages[indexRandom]}`);
//console.log(mynewImage.length);

  

  var indexRandom=randomNumber(0 , myImages.length-1 );
  var rightImageRandom =  myImages[indexRandom];
 mynewImage= myImages.splice(indexRandom ,1);
rightClicks++;
newArray.push(rightImageRandom);

//console.log(` we click ${rightClicks} in ${myImages[indexRandom]}`);
console.log(mynewImage.length);







  var centerImageRandom =  myImages[randomNumber(0 , myImages.length-1 )];

  leftBusImg.setAttribute('src' , leftImageRandom.urlImage);
  leftBusImg.setAttribute('alt' , leftImageRandom.name);
  console.log(` we click ${leftClicks} in ${leftImageRandom.name}`);

  rightBusImg.setAttribute('src' , rightImageRandom.urlImage);
  rightBusImg.setAttribute('alt' ,rightImageRandom.name);

  centerBusImg.setAttribute('src' , centerImageRandom.urlImage);
  centerBusImg.setAttribute('alt' ,centerImageRandom.name);
  
  while(leftBusImg ===  rightBusImg ){
    pickRandomImages();
  }
}

for(var i = 0; i< myImagesImages.length ; i++){

  new Bus(myImagesImages[i]);//we pass the name of the myImages from the array
}
pickRandomImages();
//console.log(myImages);

// Variables to store the myImages already on the page
// the allImages array is a property of the BusPicture constructor
var leftClicks =0;
var rightClicks =0;
var centerClicks =0;

function clickImage(e){
  if( e.target.id === 'myLeftPic' ){
      pickRandomImages();
    
    
    totalClicks++;
    
  }else if( e.target.id === 'myRightPic'){
      pickRandomImages();
    
    rightClicks++;
    totalClicks++;
  }else if(e.target.id === 'myCenterPic'){
      pickRandomImages();
      centerClicks++;
      totalClicks++;
  }
  else if(totalClicks === 25){
      //remove event listener
      leftBusImg.remove();
       rightBusImg.remove();
       
      
  
     // console.log('finished');
    }
  }
//for(var i = 0; i< 25 ; i++){
  pickRandomImages();
  

groupImageSection.addEventListener('click' , clickImage);


//when they reach total max clicks, remove the clicky function



// Instantiate my image objects
//helper functions
function randomNumber(min, max) {
 
  return Math.floor(Math.random() * (max - min + 1)) + min;
}