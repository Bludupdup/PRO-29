class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.visibility = 255;
  }
  display(){
    if(this.body.speed < 3){
    super.display();
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      rect( this.body.position.x, this.body.position.y, 50, 50);
      pop();
    }
  }

}

