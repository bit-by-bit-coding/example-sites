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
    pElement.innerText = "You decide to explore the suspicious, dark hallway all by yourself. As you walk down the room, you hear a soft scuttling sound and then see a poof of dust obscure part of your vision. You get a little scared, but you want to know what it is.";
    aButtonElement.innerText = "Find out what it is";
    bButtonElement.innerText = "Go back and find your class";
    aButtonElement.onclick = die;
    bButtonElement.onclick = findClass;
}
function findClass() {
    pElement.innerText = "Whew, that was a close one. You run back to your class as quickly as you can. You follow your leader around for a few hours until you spy a suspicious path of...sparkles? Weird.";
    aButtonElement.innerText = "Follow the path!";
    bButtonElement.innerText = "Stay with class!";
    aButtonElement.onclick = followSparkles;
    bButtonElement.innerText = stayWithClass;
}
function die() {
    pElement.innerText = "Looks like you never should have tried to find out what the mysterious sound was! Turns out, it was a teleportation spell used by one of the mysterious guardians of the museum that you got caught up in. When you did, it ripped apart your body into billions of atoms that were impossible to put back together! Oops!! Reload the page to try again!"
    aButtonElement.innerText = "Go back to museum";
    bButtonElement.innerText = "Go back to city";
    aButtonElement.onclick = goToMuseum;
    bButtonElement.onclick = goToCity;
}
function followClass() {
    pElement.innerText = "Looks like you stay with the class! You follow your leader around for a few hours until you spy a suspicious path of...sparkles? Weird.";
    aButtonElement.innerText = "Follow the path!";
    bButtonElement.innerText = "Stay with class!";
    aButtonElement.onclick = followSparkles;
    bButtonElement.innerText = stayWithClass;
}
function stayWithClass() {
    pElement.innerText = "Nah, the sparkles looked a little suspicious. You follow the class for the rest of the field trip, and nobody ever finds the wand. However, you go back to school with a mystery to talk to your friends about and some new experiences. Reload the page to play again!"
    aButtonElement.innerText = "Go back to museum";
    bButtonElement.innerText = "Go back to city";
    aButtonElement.onclick = goToMuseum;
    bButtonElement.onclick = goToCity;
}
function followSparkles() {
    pElement.innerText = "The sparkles are just too shiny for your to resist. You trace the path they have left through the museum and out the museum door. And then you see it! It's Circe's ancient wand moving by itself, wiggling its way towards the road. 'Stop!' you yell at the wand, but it doesn't. You resort to casting a freeze spell on the wand. Once it's frozen, you grab it. Looking at it, you remember just how much this wand is worth. What to do, what to do...";
    aButtonElement.innerText = "Give it back to the museum";
    bButtonElement.innerText = "Sell it for money!";
    aButtonElement.onclick = giveWandBack;
    bButtonElement.onclick = sellWand;
}
function giveWandBack() {
    pElement.innerText = "You decide to do the right thing and give the wand back to the museum. They thank you for finding it and shower you with good grades and blessings. Congratulations! Reload the page to play again.";
    aButtonElement.innerText = "Go back to museum";
    bButtonElement.innerText = "Go back to city";
    aButtonElement.onclick = goToMuseum;
    bButtonElement.onclick = goToCity;
}
function sellWand() {
    pElement.innerText = "You let your greed get the better of you. Tsk tsk, we're all a little money-hungry inside I suppose. You sell the wand at the market and earn enough money to last you several lifetimes. With this money, you drop out of school (yay!) and hopefully donate to some good causes! Congratulations!! Reload the page to play again."
    aButtonElement.innerText = "Go back to museum";
    bButtonElement.innerText = "Go back to city";
    aButtonElement.onclick = goToMuseum;
    bButtonElement.onclick = goToCity;
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
