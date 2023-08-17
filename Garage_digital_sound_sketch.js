let wave;
let curFreq = 100;
let poem = "Выхожу один я на дорогу; \nСквозь туман кремнистый путь блестит; \nНочь тиха. Пустыня внемлет богу, \nИ звезда с звездою говорит."
let poem2 = "Духовной жаждою томим, \nВ пустыне мрачной я влачился, —\nИ шестикрылый серафим \nНа перепутье мне явился.";
let spaces = 0;

let poemWave;


function setup() {
  createCanvas(400, 400);
  
  wave = new p5.Oscillator();
  wave.setType('sine');
  wave.start();  
  wave.amp(1);
  wave.freq(500);
  // wave.amp(0, 1); // это делает как бы такое затухание -- за 1 секунду
  
  for(let i = 0; i< poem.length;i++){
    if(poem[i] == " "){
      spaces++;
    }
  }
  
  poemWave = new p5.Oscillator();
  poemWave.setType('sawtooth');
  poemWave.start();
  poemWave.amp(0.1);
  poemWave.freq(spaces/poem2.length*5000);
  print(spaces/poem2.length*5000);
  
}

function draw() {
  background(220);
  //curFreq += 0.1;
  //wave.freq(curFreq);
  wave.freq(map(mouseX,0, width,100, 1000));
  //wave.amp(map(mouseY,0, height,0,1));
  wave.disconnect();
  poemWave.amp(wave);
}
