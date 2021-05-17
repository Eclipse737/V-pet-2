class Food {
  constructor(){
  this.foodStock=0;
  this.image=loadImage('Milk.png');
  this.lastfed
  }

 updateFoodStock(foodStock){
  this.foodStock=foodStock;
 }
 getfedtime (Lastfed){
  this.lastfed=Lastfed 
 }
 deductFood(){
   if(this.foodStock>0){
    this.foodStock=this.foodStock-1;
   }
  }

  getFoodStock(){
    return this.foodStock;
  }

  display(){
    var x=80,y=100;
    
    imageMode(CENTER);
    image(this.image,700,200,50,50)
    
    if(this.foodStock!=0){
      for(var i=0;i<this.foodStock;i++){
        if(i%10==0){
          x=80;
          y=y+50;
        }
        image(this.image,x,y,50,50);
        x=x+30;
      }
    }
  }
}