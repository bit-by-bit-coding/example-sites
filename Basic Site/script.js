let pElement = document.getElementById("messagBox");
let aButtonElement = document.getElementById("aButton");
let bButtonElement = document.getElementById("bButton");
let inventoryElement = document.getElementById("inventory");
inventoryElement.innerText = "Inventory: Yikes, looks like we don't know how to make an inventory yet. To learn how to, go to the workshops needed to create this feature on Friday!";
let startGame = function () {
    pElement.innerText = "Welcome to the game! Unfortunately, I don't know your name, so I can't say: Welcome, 'your name', to the game! :( (*Psst* If you want to learn how to add 'character customization,' make sure to go to the workshops that help make this feature that will be happening on the last three days.) You are a student wizard attending a prestigious school. Today, you are going on a field trip. Sounds kinda lame, so maybe you want to hang out with friends instead..."
    aButtonElement.innerText = "Go to field trip with class"
    bButtonElement.innerText = "Dip class, hang out with friends"
    aButtonElement.onclick = goToMuseum;
    bButtonElement.onclick = goWithFriends;
}
let goWithFriends = function () {
    pElement.innerText = "Sounds like you aren't the most studious student, am I right? Who could blame you? Your friends debate over whether to go to the museum (but stop for a few snacks on the way) or just forget about school and go to the city.";
    aButtonElement.innerText = "Go to the field trip";
    bButtonElement.innerText = "Go to the city";
    aButtonElement.onclick = goToMuseum;
    bButtonElement.onclick = goToCity;
}
let goToMuseum = function () {
    pElement.innerText = "Looks like you're a good student! You go with your class to a museum, which seems kinda lame. But when you enter, you see thousands of ancient, magical relics. Turns out, one of the most prized, magical wands used by ancient sorceress Circe has been stolen! You remember passing by a suspicious hallway when you first walked in. Do you want to explore it or follow your classmates?";
    aButtonElement.innerText = "Explore the hallway";
    bButtonElement.innerText = "Follow your class";
    aButtonElement.onclick = exploreHallway;
    bButtonElement.onclick = followClass;
}
let exploreHallway = function () {
    pElement.innerText = "You decide to explore the suspicious, dark hallway all by yourself. As you walk down the room, you hear a soft scuttling sound and then see a poof of dust obscure part of your vision. You get a little scared, but you want to know what it is.";
    aButtonElement.innerText = "Find out what it is";
    bButtonElement.innerText = "Go back and find your class";
    aButtonElement.onclick = die;
    bButtonElement.onclick = findClass;
}
let findClass = function () {
    pElement.innerText = "Whew, that was a close one. You run back to your class as quickly as you can. You follow your leader around for a few hours until you spy a suspicious path of...sparkles? Weird.";
    aButtonElement.innerText = "Follow the sparkles (ooh, shiny)!";
    bButtonElement.innerText = "Stay with class!";
    aButtonElement.onclick = followSparkles;
    bButtonElement.onclick = stayWithClass;
}
let die = function () {
    pElement.innerText = "Looks like you never should have tried to find out what the mysterious sound was! Turns out, it was a teleportation spell used by one of the mysterious guardians of the museum that you got caught up in. When you did, it ripped apart your body into billions of atoms that were impossible to put back together! Oops!!"
    aButtonElement.innerText = "Play again!";
    bButtonElement.innerText = "Start at city";
    aButtonElement.onclick = startGame;
    bButtonElement.onclick = goToCity;
}
let followClass = function () {
    pElement.innerText = "Looks like you stay with the class! You follow your leader around for a few hours until you spy a suspicious path of...sparkles? Weird.";
    aButtonElement.innerText = "Follow the path!";
    bButtonElement.innerText = "Stay with class!";
    aButtonElement.onclick = followSparkles;
    bButtonElement.onclick = stayWithClass;
}
let stayWithClass = function () {
    pElement.innerText = "Nah, the sparkles looked a little suspicious. You follow the class for the rest of the field trip, and nobody ever finds the wand. However, you go back to school with a mystery to talk to your friends about and some new experiences!"
    aButtonElement.innerText = "Play Again!";
    bButtonElement.innerText = "Start at city";
    aButtonElement.onclick = startGame;
    bButtonElement.onclick = goToCity;
}
let followSparkles = function () {
    pElement.innerText = "The sparkles are just too shiny for your to resist. You trace the path they have left through the museum and out the museum door. And then you see it! It's Circe's ancient wand moving by itself, wiggling its way towards the road. 'Stop!' you yell at the wand, but it doesn't. You resort to casting a freeze spell on the wand. Once it's frozen, you grab it. Looking at it, you remember just how much this wand is worth. It would be a nice addition to your inventory! (As a side note, if you want to learn how to create your own inventory for your game, make sure to go to the workshops we will be providing to do so!) What to do, what to do...";
    aButtonElement.innerText = "Give it back to the museum";
    bButtonElement.innerText = "Sell it for money!";
    aButtonElement.onclick = giveWandBack;
    bButtonElement.onclick = sellWand;
}
let giveWandBack = function () {
    pElement.innerText = "You decide to do the right thing and give the wand back to the museum. They thank you for finding it and shower you with good grades and blessings. Congratulations!";
    aButtonElement.innerText = "Play again!";
    bButtonElement.innerText = "Start at museum";
    aButtonElement.onclick = startGame;
    bButtonElement.onclick = goToMuseum;
}
let sellWand = function () {
    pElement.innerText = "You let your greed get the better of you. Tsk tsk, we're all a little money-hungry inside I suppose. You sell the wand at the market and earn enough money to last you several lifetimes. With this money, you drop out of school (yay!) and hopefully donate to some good causes! Congratulations!!"
    aButtonElement.innerText = "Play again!";
    bButtonElement.innerText = "Start at museum";
    aButtonElement.onclick = startGame;
    bButtonElement.onclick = goToMuseum;
}
let goToCity = function () {
    pElement.innerText = "You're at the bustling city with your friends, having a great time. Should you go to the mall for some shopping or the arcade for a few fun games?";
    aButtonElement.innerText = "Go to mall";
    bButtonElement.innerText = "Go to arcade";
    aButtonElement.onclick = goToMall;
    bButtonElement.onclick = goToAracde;
}
let goToMall = function () {
    pElement.innerText = "Oops! Looks like the mall is experiencing some *technical issues.* To get them fixed, go to the workshops that can help build your very own 'market' feature and learn how to make your very own shopping center!";
    aButtonElement.innerText = "Go to arcade";
    bButtonElement.innerText = "Go to class (late, but better than missing the whole day!)";
    aButtonElement.onclick = goToAracde;
    bButtonElement.onclick = goToMuseumLate;
}
let goToMuseumLate = function () {
    pElement.innerText = "Wow, thanks for showing up to class! You're a little late, but you haven't missed much. The class leader has just been walking through the thousands of ancient, magical relics. Turns out, one of the most prized, magical wands used by ancient sorceress Circe has been stolen! You remember passing by a suspicious hallway when you first walked in. Do you want to explore it or follow your classmates?";
    aButtonElement.innerText = "Explore the hallway";
    bButtonElement.innerText = "Follow your class";
    aButtonElement.onclick = exploreHallway;
    bButtonElement.onclick = followClass;
}
let goToAracde = function () {
    pElement.innerText = "The arcade seems to be under a bit of construction, but you still have two options to go to.";
    aButtonElement.innerText = "Game of Chance";
    bButtonElement.innerText = "Quiz Yourself!";
    aButtonElement.onclick = gameOfChance;
    bButtonElement.onclick = quizYourself;
}
let gameOfChance = function () {
    pElement.innerText = "Ugh, technical difficulties! No worries, though. If you go to the proper workshops, you can learn to set up your very own game of chance and get this one fixed!";
    aButtonElement.innerText = "Go back to arcade";
    bButtonElement.innerText = "Go to mall";
    aButtonElement.onclick = goToAracde;
    bButtonElement.onclick = goToMall;
}
let quizYourself = function () {
    pElement.innerText = "Yikes! Seems like the quiz isn't loading. Hey, don't worry. When you can go to workshops, you can learn to code your very own quiz feature and add it to your story!";
    aButtonElement.innerText = "Go back to arcade";
    bButtonElement.innerText = "Go to mall";
    aButtonElement.onclick = goToAracde;
    bButtonElement.onclick = goToMall;
}
startGame();
