
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
var mynewImage=[];
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
  
var indexRandom3=randomNumber(0 , myImages.length-1 );
  var leftImageRandom =  myImages[indexRandom3];
 mynewImage= myImages.splice(indexRandom3 ,1);
leftClicks++;
newArray.push(`${leftImageRandom}`);

//console.log(` we click ${leftClicks} in ${myImages[indexRandom]}`);
//console.log(mynewImage.length);

  

  var indexRandom1=randomNumber(0 , mynewImage.length-1 );
  var rightImageRandom =  myImages[indexRandom1];
 mynewImage= myImages.splice(indexRandom1 ,1);
rightClicks++;
newArray.push(rightImageRandom);

//console.log(` we click ${rightClicks} in ${myImages[indexRandom]}`);
console.log(mynewImage.length);




var indexRandom2=randomNumber(0 , mynewImage.length-1 );
var centerImageRandom =  myImages[indexRandom2];
mynewImage= myImages.splice(indexRandom2 ,1);
rightClicks++;
newArray.push(centerImageRandom);
  console.log('left random image ' ,leftImageRandom);
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


/*
Banana Slicer had 3 votes and was shown 5 times


for(var i=0; i<myImages.length ;i++){



document.write(`${my[i]} had ${click} and was shown ${} times`);

}

var tableContainer = document.getElementById('myTable');
var tableEl = document.createElement('table');
tableContainer.appendChild(tableEl);


function renderHeader() {
    var trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    //first col
    var th1El = document.createElement('th');
    th1El.textContent = ' my images';
    trEl.appendChild(th1El);
    //show all the col on hours with for loop---------------------
    for (var i = 0; i < myImagesImages.length; i++) {
        var th2El = document.createElement('th');
        th2El.textContent = `${myImagesImages[i]}  `;
        trEl.appendChild(th2El);
    }
    var th3El = document.createElement('th');
    th3El.textContent = ' Total';
    trEl.appendChild(th3El);
    /*var th4El=document.createElement('th');
    th4El.textContent = ' Add/delete';
    trEl.appendChild(th4El);*/


renderHeader();




var leftClicks =0;
var rightClicks =0;
var centerClicks =0;



function clickImage(e){
    if( e.target.id === 'myLeftPic' ){
        pickRandomImages();
      
      leftClicks++;
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
    
    
    
    
    
    
    
   
      
      totalClicks++;
      //newArray.push(`${}`)
    }
    if(totalClicks === 25){
      //remove event listener
      leftBusImg.remove();
       rightBusImg.remove();
      
  
     // console.log('finished');
    }
  }
  //for(var i = 0; i< 25 ; i++){
    pickRandomImages();
    
  
  groupImageSection.addEventListener('click' , clickImage);
  




























/*var myForm = document.getElementById('myForm');

myForm.addEventListener('submit' , function(event){
  event.preventDefault();
  console.log(event.target);
  var storeName = event.target.name.value;
  var min= event.target.min.value;
  var max= event.target.max.value;
  var avg=event.target.avg.value;
   var endfor =new Store(storeName, min, max, avg);
   tableEl.deleteRow(tableEl.rows.length-1);
   endfor.render();
   renderfooter();

  });


  function clickImage(e){
    if( e.target.id === 'myLeftPic' || e.target.id === 'myRightPic'){
      pickRandomImages();
      totalClicks++;
      //newArray.push(`${}`)
    }
    if(totalClicks === 25){
      //remove event listener
      leftBusImg.remove();
       rightBusImg.remove();
      
  
     // console.log('finished');
    }
  }
  //for(var i = 0; i< 25 ; i++){
    pickRandomImages();
    
  
  groupImageSection.addEventListener('click' , clickImage(e));*/