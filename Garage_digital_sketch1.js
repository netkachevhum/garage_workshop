let st1 = "Духовной жаждою томим, В пустыне мрачной я влачился, И шестикрылый серафим На перепутье мне явился.";
let curInd = 0;
let windowLength = 5;

function setup() {
  createCanvas(600, 600);
  frameRate(10);
}

function draw() {
  background(220);
  textAlign(CENTER,CENTER);
  textSize(height/10);
  text(st1.substring(curInd,curInd+windowLength),height/2,width/2);
  curInd++;
  if(curInd > st1.length){
    curInd = 0;
  }
  windowLength = (sin(frameCount)+1)*5;
  print(int(windowLength));
}