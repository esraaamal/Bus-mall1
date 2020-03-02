


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