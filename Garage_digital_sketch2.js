let st1 = "Духовной жаждою томим,В пустыне мрачной я влачился.";
let st2 = "";


function setup() {
  createCanvas(700, 400);
  frameRate(10);
}

function draw() {
  background(220);
  textAlign(CENTER,CENTER);
  textSize(width/40);
  
  for(let i = 0; i < st1.length; i++){
    //print(st1[i]);
    if(random(1)>0.5){
      st2 = st2 + st1[i];
    }
    else{
      st2 = st2 + "*";
    }
  }
  text(st2,width/2,height/2);
  st2 = "";
}