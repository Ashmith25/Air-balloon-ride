class Balloon {
    constructor(){
  
    }
    getPosition(){
      var balloonPosition=database.ref("balloon/height");
      balloonPosition.on("value",readPosition,showError);
    }

    updateHeight(x,y){
     database.ref("balloon/height").set({
         "x": height.x+x,
         "y": height.y+y
     })
    }

    readHeight(data){
       height = data.val();
       balloon.x = height.x;
       balloon.y = height,y; 
    }

    showError(){
      console.log("Error in writing to the database");  
    }
}