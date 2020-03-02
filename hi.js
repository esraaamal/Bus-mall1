





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
}

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