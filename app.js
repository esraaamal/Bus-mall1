var leftImageRandom;
var rightImageRandom;
var centerImageRandom;
var newArr = [];
//getItem();
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
var orders = document.getElementById('orders');

var myImages = [];
var totalClicks = 1;



function Bus(name) {
  this.name = name.split('.')[0];
  this.urlImage = `images/${name}`;
  this.view = 0;
  this.clicks = 0;

  myImages.push(this);//this its refer to the object that im created
  //console.log(myImages);
}

















function pickRandomImages() {

  var myRandomIdex1 = randomNumber(0, myImages.length - 1);
  leftImageRandom = myImages[myRandomIdex1];
  myImages.splice(myRandomIdex1, 1);


  var myRandomIdex2 = randomNumber(0, myImages.length - 1);
  rightImageRandom = myImages[myRandomIdex2];
  myImages.splice(myRandomIdex2, 1);

  var myRandomIdex3 = randomNumber(0, myImages.length - 1);
  centerImageRandom = myImages[myRandomIdex3];
  myImages.splice(myRandomIdex3, 1);



  /*if(myImages.length == 0){
    myImages =newArr.concat(newArray);
   
    var myRandomIdex1=randomNumber(0, myImages.length - 1);
   leftImageRandom=myImages[myRandomIdex1];
   myImages.splice(myRandomIdex1 ,1);
   
  
   var myRandomIdex2=randomNumber(0,myImages.length - 1);
   rightImageRandom=myImages[myRandomIdex2];
   myImages.splice(myRandomIdex2 ,1);
  
   var myRandomIdex3 =randomNumber(0,myImages.length - 1);
   centerImageRandom =myImages[myRandomIdex3];
   myImages.splice(myRandomIdex3 ,1);
  };*/
  var savedViews = [];
  function setItem() {
  
      for (var i = 0; i <myImages.length; i++) {
          savedViews[i] = savedViews[i] +myImages[i].view;
         myImages[i].view = savedViews[i];
      }
      localStorage.setItem('esraa', JSON.stringify(myImages));
  
  }

  function getItem() {
    var myGetItem= localStorage.getItem('esraa');
    myImages= JSON.parse(myGetItem);
    renderOrders()
}


  leftBusImg.setAttribute('src', leftImageRandom.urlImage);
  leftBusImg.setAttribute('alt', leftImageRandom.name);

  rightBusImg.setAttribute('src', rightImageRandom.urlImage);
  rightBusImg.setAttribute('alt', rightImageRandom.name);

  centerBusImg.setAttribute('src', centerImageRandom.urlImage);
  centerBusImg.setAttribute('alt', centerImageRandom.name);
  myImages.push(leftImageRandom);
  myImages.push(rightImageRandom);
  myImages.push(centerImageRandom);

}

for (var i = 0; i < myImagesImages.length; i++) {
  console.log(myImagesImages[i]);
  new Bus(myImagesImages[i]);
  renderOrders();

}

// var newArray =newArr.concat(myImages);
// console.log(newArray);


pickRandomImages();


// Variables to store the goats already on the page
// the allImages array is a property of the GoatPicture constructor

function clickImage(e) {
  if (e.target.id === 'myLeftPic' || e.target.id === 'myRightPic' || e.target.id === 'myCenterPic') {
    pickRandomImages();

    leftImageRandom.view++;
    rightImageRandom.view++;


    centerImageRandom.view++;
    totalClicks++;

  }
  if (e.target.id === 'myLeftPic') {

    leftImageRandom.clicks++;

    console.log('click', leftImageRandom.clicks);

  } if (e.target.id === 'myRightPic') {


    rightImageRandom.clicks++;



  } if (e.target.id === 'myCenterPic') {


    centerImageRandom.clicks++;


  }
  if (totalClicks === 25) {
    //remove event listener
    groupImageSection.removeEventListener('click', clickImage);

    leftBusImg.remove();
    rightBusImg.remove();
    centerBusImg.remove();
    renderChartresult();
    setItem();

    //renderResult();




  }
}



groupImageSection.addEventListener('click', clickImage);


// function renderResult() {
//   var ulReult = document.getElementById("totalResult")
//   for (var i = 0; i < myImagesImages.length; i++) {

//     var reslutLi = document.createElement('li');
//     ulReult.appendChild(reslutLi);
//     reslutLi.textContent = ` The ${myImages[i].name} had ${myImages[i].clicks} clicks ,and view for ${myImages[i].view}`;
//     var resluthr = document.createElement('hr');
//     ulReult.appendChild(resluthr);

//   }


// }


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// now we will start the chart
function renderChartresult() {
  var busMallName = [];//pass this array to x-axis
  var busClick = [];//we will pass this array in the y-axis
  var myViews =[];
  for (var i = 0; i < myImages.length; i++) {

    busMallName.push(myImages[i].name);
    busClick.push(myImages[i].clicks);
    myViews.push(myImages[i].view);


  }


var ctx = document.getElementById('myBusMallC').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: busMallName,
    datasets: [{
      label: '# of clicks',
      data: busClick,
      backgroundColor:
        'rgba(255, 99, 132)',

      borderColor:
        'rgba(255, 99, 132,1)',


      borderWidth: 1
    },
    {label: '# of Views',
    data: myViews,
    backgroundColor:
      'rgba(50, 8, 12)',

    borderColor:
      'rgba(50, 8, 12, 1)',


    borderWidth: 1
  }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
////now we  End paste the code of the chartjs
////////////////////////////////////////////
////////////////////////////////////////////
}
function renderOrders(){
  // clear all my current uls to prevent duplicate information
  orders.textContent = "";

  // go through the array and output the details of each drink in the array
  for(var i=0; i < myImages.length; i++){
    var drinkLI = document.createElement('li');
    var infoP = document.createElement('p');
    var temp;
    
    infoP.textContent = `${myImages[i].name} orderd a ${temp} ${myImages[i].clicks} ${myImages[i].view} `;
    drinkLI.appendChild(infoP);
    orders.appendChild(drinkLI);
  }
}

groupImageSection.addEventListener('busOrder', clickImage)
getItem();