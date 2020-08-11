let pElement = document.getElementById("messagBox");
let aButtonElement = document.getElementById("aButton");
let bButtonElement = document.getElementById("bButton");

pElement.innerText = "Welcome to the game! You are a student wizard attending a prestigious school. Today, you are going on a field trip. Sounds kinda lame, so maybe you want to hang out with friends instead..."
aButtonElement.innerText = "Go to field trip with class"
bButtonElement.innerText = "Dip class, hang out with friends"
aButtonElement.onclick = goToMuseum;
bButtonElement.onclick = goWithFriends;
function goToMuseum() {
    pElement.innerText = "Looks like you're a good student! You go with your class to a museum, which seems kinda lame. But when you enter, you see thousands of ancient, magical relics. Turns out, one of the most prized, magical wands used by ancient sorceress Circe has been stolen! You remember passing by a suspicious hallway when you first walked in. Do you want to explore it or follow your classmates?";
    aButtonElement.innerText = "Explore the hallway";
    bButtonElement.innerText = "Follow your class";
    aButtonElement.onclick = exploreHallway;
    bButtonElement.onclick = followClass;
}
function exploreHallway() {
    
}
/*
start game in school, plot is like mystery/school trip
decide between going with class or dipping w/some friends in their car or something (flying)
school -> museum
friends can go to the city or to museum
museum (magical ancient wand been stolen) -> explore dark room w/armor or follow class
dark room -> hear a load noise, follow/find class
follow -> die
find class, stay for a while -> spy sparkles or something on floor, follow/continue
continue -> go back to school, don't find it
follow -> find wand!
find wand -> sell, give back
sell -> you get rich
give back -> get good grades
city -> market or arcade or 
arcade -> game of chance, quiz
game of chance -> arcade, market
quiz -> arcade, market
market -> buy things, go to class (find class)
game of chance
quiz
character customization
inventory 
market
*/
