//let button = document.getElementById("but");
//let paragraph = document.getElementById("message");
//paragraph.innerHTML = "You are under attack";

//Not arrays: use for loops to create lots of repeated images 
let villagers = 0;
let gain = 0;

let win = document.getElementById("win");

let farmerButton = document.getElementById("subFarmer");
let merchantButton = document.getElementById("subMerchant");
let builderButton = document.getElementById("subBuilder"); 
let knightButton = document.getElementById("subKnight");
let cmButton = document.getElementById("subCM");

let answer_1 = document.getElementById("check_1");
let answer_2 = document.getElementById("check_2");
let answer_3 = document.getElementById("check_3");
let answer_4 = document.getElementById("check_4");
let answer_5 = document.getElementById("check_5");

farmerButton.onclick = farmer;
merchantButton.onclick = merchant;
builderButton.onclick = builder;
knightButton.onclick = knight;
cmButton.onclick = clothes;

function farmer(){
  gain = 0;
  let farmers = document.getElementById("farmer").value;
  if(farmers == 30){
    villagers = villagers + 30;
    answer_1.innerHTML = "You got it correct! You have gained the trust of the village and now have " + villagers + " villagers!";
    gain = 30;
    loop();
  } else {
    answer_1.innerHTML = "You answered incorrectly... You have " + villagers + ".";
  }

  if(villagers == 150){
    let castle = document.getElementById("castle");
    castle.src = "https://upload.wikimedia.org/wikipedia/commons/d/de/Konrad_von_Gr%C3%BCnenberg_-_Beschreibung_der_Reise_von_Konstanz_nach_Jerusalem_-_Blatt_35v-36r.jpg";
    win.innerHTML = "You won! You have sucessfully started a new kingdom!";
  }
}

function merchant(){
  gain = 0;
  let merchants = document.getElementById("merchant").value;
  if(merchants == 16){
    villagers = villagers + 15;
    answer_2.innerHTML = "You got it correct! You have gained the trust of the village and now have " + villagers + " villagers!";
    gain = 15;
    loop();
  } else {
    answer_2.innerHTML = "You answered incorrectly... You have " + villagers + ".";
  }

  if(villagers == 150){
    let castle = document.getElementById("castle");
    castle.src = "https://upload.wikimedia.org/wikipedia/commons/d/de/Konrad_von_Gr%C3%BCnenberg_-_Beschreibung_der_Reise_von_Konstanz_nach_Jerusalem_-_Blatt_35v-36r.jpg";
    win.innerHTML = "You won! You have sucessfully started a new kingdom!";
  }
}

function builder(){
  gain = 0;
  let builders = document.getElementById("builder").value;
  if(builders == 9){
    villagers = villagers + 50;
    answer_3.innerHTML = "You got it correct! You have gained the trust of the village and now have " + villagers + " villagers!";
    gain = 50;
    loop();
  } else {
    answer_3.innerHTML = "You answered incorrectly... You have " + villagers + ".";
  }

  if(villagers == 150){
    let castle = document.getElementById("castle");
    castle.src = "https://upload.wikimedia.org/wikipedia/commons/d/de/Konrad_von_Gr%C3%BCnenberg_-_Beschreibung_der_Reise_von_Konstanz_nach_Jerusalem_-_Blatt_35v-36r.jpg";
    win.innerHTML = "You won! You have sucessfully started a new kingdom!";
  }
}

function knight(){
  gain = 0;
  let knights = document.getElementById("knight").value;
  if(knights == 14){
    villagers = villagers + 20;
    answer_4.innerHTML = "You got it correct! You have gained the trust of the village and now have " + villagers + " villagers!";
    gain = 20;
    loop();
  } else {
    answer_4.innerHTML = "You answered incorrectly... You have " + villagers + ".";
  }

  if(villagers == 150){
    let castle = document.getElementById("castle");
    castle.src = "https://upload.wikimedia.org/wikipedia/commons/d/de/Konrad_von_Gr%C3%BCnenberg_-_Beschreibung_der_Reise_von_Konstanz_nach_Jerusalem_-_Blatt_35v-36r.jpg";
    win.innerHTML = "You won! You have sucessfully started a new kingdom!";
  }
}
function clothes(){
  gain = 0;
  let makers = document.getElementById("cm").value;
  if(makers == 40){
    villagers = villagers + 35;
    answer_5.innerHTML = "You got it correct! You have gained the trust of the village and now have " + villagers + " villagers!";
    gain = 35;
    loop();
  } else {
    answer_5.innerHTML = "You answered incorrectly... You have " + villagers + ".";
  }

  if(villagers == 150){
    let castle = document.getElementById("castle");
    castle.src = "https://upload.wikimedia.org/wikipedia/commons/d/de/Konrad_von_Gr%C3%BCnenberg_-_Beschreibung_der_Reise_von_Konstanz_nach_Jerusalem_-_Blatt_35v-36r.jpg";
    win.innerHTML = "You won! You have sucessfully started a new kingdom!";
  }
}


function loop(){
  for(let i = 0; i < gain; i = i + 1){
    let image = document.createElement("IMG");
  
    image.style.width = "75px"
  
    image.src = "https://cdn.pixabay.com/photo/2016/04/01/11/14/comic-characters-1300265_960_720.png";
    document.body.appendChild(image);
  }
}