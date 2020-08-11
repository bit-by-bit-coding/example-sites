let aButtonElem = document.getElementById("aButton");
let bButtonElem = document.getElementById("bButton");
let cButtonElem = document.getElementById("cButton");
let inventoryElem = document.getElementById("inventory");
let hungerElem = document.getElementById("hunger");
let thirstElem = document.getElementById("thirst");
let messageElem = document.getElementById("messageBox");
let balanceElem = document.getElementById("balance");
let imageElem = document.getElementById("img");
let titleElem = document.getElementById("title");

let inventory = [];
let hunger = 0;
let thirst = 0;
let balance = 60;

function startGame() {
    hunger = 0;
    inventory = [];
    thirst = 0;
    balance = 70;
    changeTitle("Welcome to the game!")
    display("The apocalypse has started. Ever since the Black Plague hit, you've watched as your friends, family, and neighbors slowly turned into zombies. Yesterday, your entire family disappeared, and you are all alone in your empty house. You can hear sounds approaching in the woods surrounding you. What do you do now?");
    changeButtons("Stock up your inventory", "Run towards your village");
    aButtonElem.onclick = houseInventory;
    bButtonElem.onclick = village;
    hintsListElem.style.display = "none";
}
function forest() {
    changeTitle("The forest")
    display("You're running, seemingly in the middle of nowhere with trees obscuring your path. You approach a split path: go left, go right, or go to the village?");
    changeButtons("Go left or right", "Go to village");
    aButtonElem.onclick = () => {
        display("Go left or right?");
        changeButtons("Go left", "Go right");
        aButtonElem.onclick = () => {
            let num = Math.random();
            if (num <= 0.5) {
                cliff();
            }
            else {
                castle();
            }
        }
        bButtonElem.onclick = river;
    }
    bButtonElem.onclick = village;
}

function cliff() {
    changeTitle("A cliff!")
    display("As you continue, you approach the edge of a cliff and are met by a congregation of zombies. They begin to chase you.")
    changeButtons("Jump off cliff", "Outrun zombies");
    aButtonElem.onclick = () => {
        let num = Math.random();
        if (num <= 0.9) {
            alert("You jump, hoping that you survive. But...");
            die();
        }
        else {
            display("By some miracle, you survive, landing next to what seems to be a moat surrounding a tall, dark, castle. It reeks of zombies, but it might also contain something important.");
            changeButtons("Go to castle", "Return to village");
            aButtonElem.onclick = castle;
            bButtonElem.onclick = village;

        }
    };
    bButtonElem.onclick = () => {
        if (inventory.indexOf("weapon") != -1) {
            display("You pull a weapon from your bag and fight the zombies off! Sadly, you lose the weapon in the fight. Maybe there's something below the cliff that you might want...")
            inventory.splice(inventory.indexOf("weapon)", 1))
            changeButtons("Return to forest", "Jump off cliff");
            aButtonElem.onclick = forest;
            bButtonElem.onclick = die;
        }
        else {
            alert("You try to outrun them or fight them off, but without a weapon, you're bitten by a zombie!");
            if (bittenByZombie()) {
                display("Whew, that was a close one. Do you want to return to the forest or see what's below the cliff?");
                changeButtons("Return to forest", "Jump off cliff");
                aButtonElem.onclick = forest;
                bButtonElem.onclick = die;
            };
        }
    }
}
function river() {
    changeTitle("A river for your thirst?");
    thirst += 10;
    display("You arrive at a river. Suddenly, you feel very thirsty. As you are about to drink from the water, you spot a rotting zombie hand bobbing in the water. Do you still want to drink?");
    changeButtons("Drink water", "Don't drink water.");
    aButtonElem.onclick = () => {
        let num = Math.random();
        num = 1;
        if (num <= 0.7) {
            alert("The zombie flesh had contaminated the water!")
            if (bittenByZombie()) {
                display("The potion saved your life! As you look beyond the river, you see a looming castle shrounded in fog.");
                changeButtons("Return to forest", "Go to castle");
                aButtonElem.onclick = forest;
                bButtonElem.onclick = castle;
            }
        }
        else {
            if (thirst < 15) {
                thirst = 0;
            }
            else {
                thirst -= 15;
            }
            display("Ahh, that water felt good. When you look beyond the river, you see a tall, dark castle shrouded in fog. What do you do?");
            changeButtons("Return to forest", "Go to castle");
            aButtonElem.onclick = forest;
            bButtonElem.onclick = castle;
        }
    }
    bButtonElem.onclick = () => {
        display("You're still thirsty, but you decide not to drink the water for fear that the zombie flesh contaminated it. When you look beyond the river, you see a tall, dark, looming castle shrouded in fog. It reeks of zombies, but it also might hold something important.");
        changeButtons("Go to castle", "Return to forest");
        aButtonElem.onclick = castle;
        bButtonElem.onclick = forest;
    }
}
function castle() {
    changeTitle("At the castle");
    display("You arrive at the moat surrounding the castle. You cross the moat and cautiously enter through the giant iron doors. You see a long, winding staircase that leads upwards.");
    changeButtons("Take the staircase", "Explore the ground floor");
    aButtonElem.onclick = upstairs;
    bButtonElem.onclick = groundFloor;
}
function upstairs() {
    changeTitle("And you're upstairs!")
    let num = Math.random();
    if (num <= 0.5) {
        display("You go up the long, winding staircase. As you reach the top, you spot a dragon chained to the rooftop.");
        changeButtons("Approach it", "Run back to the forest");
        aButtonElem.onclick = dragonFound;
        bButtonElem.onclick = forest;
    }
    else {
        alert("You go up the long, winding staircase. As you reach the top, you are faced directly with a zombie.")
        if (inventory.indexOf("weapon") != -1) {
            display("You pull a weapon from your bag and fight the zombie off! Sadly, you lose the weapon in the fight. Do you want to stay on the top floor or go back down?")
            inventory.splice(inventory.indexOf("weapon)", 1))
            changeButtons("Stay on this floor", "Go back down");
            aButtonElem.onclick = () => {
                display("As you keep exploring, you spot a dragon chained to the rooftop.");
                changeButtons("Approach it", "Run back to the forest");
                aButtonElem.onclick = dragonFound;
                bButtonElem.onclick = forest;
            }
            bButtonElem.onclick = () => {
                display("You head back down. Do you want to keep exploring or go back to the forest?");
                changeButtons("Keep exploring", "Back to forest")
                aButtonElem.onclick = groundFloor;
                bButtonElem.onclick = forest;
            };
        }
        else {
            alert("You try to outrun it or fight it off, but without a weapon, you're bitten by the zombie!");
            if (bittenByZombie()) {
                display("Whew, that was a close one. Do you want to stay on the top floor or go back down?");
                changeButtons("Keep exploring", "Back to forest")
                aButtonElem.onclick = groundFloor;
                bButtonElem.onclick = forest;
            };
        }
    }
}
function groundFloor() {
    changeTitle("Spooky ground floor?")
    let num = Math.random();
    if (num <= 0.5) {
        changeTitle("A dragon!")
        display("You move stealthily around the ground floor. Suddenly, you see an old man sitting in a chair.");
        changeButtons("Approach him", "Run upstairs");
        aButtonElem.onclick = wizardFound;
        bButtonElem.onclick = upstairs;
    }
    else {
        changeTitle("A zombie!!")
        alert("You move stealthily around the ground floor. Suddenly, you are faced directly with a zombie.")
        if (inventory.indexOf("weapon") != -1) {
            display("You pull a weapon from your bag and fight the zombie off! Sadly, you lose the weapon in the fight. Do you want to go back to the forest or go upstairs?")
            inventory.splice(inventory.indexOf("weapon)", 1))
            changeButtons("Go upstairs", "Go back to the forest");
            aButtonElem.onclick = upstairs;
            bButtonElem.onclick = forest;
        }
        else {
            alert("You try to outrun it or fight it off, but without a weapon, you're bitten by the zombie!");
            if (bittenByZombie()) {
                display("Whew, that was a close one. Do you want to go back to the forest or go upstairs?");
                changeButtons("Go upstairs", "Go back to the forest");
                aButtonElem.onclick = upstairs;
                bButtonElem.onclick = forest;
            };
        }
    
        
    }
}
function dragonFound() {
    changeTitle("Will it eat me?")
    display("You approach the dragon cautiously. It's large purple eyes flicker between you and the chains holding it from going free.")
    changeButtons("Run back to the forest", "Free the dragon");
    aButtonElem.onclick = forest;
    bButtonElem.onclick = () => {
        display("You free the dragon. It nods as if wanting you to get on its back.")
        changeButtons("Go downstairs instead", "Get on its back");
        aButtonElem.onclick = groundFloor;
        bButtonElem.onclick = () => {
            alert("You get on the dragon's back and it takes off. You fly for what seems to be hours before landing.");
            utopia();
        };
    }

}
function utopia() {
    changeTitle("In utopia")
    display("You open your eyes to a field of green. Laying in the grass are your family members and a few of your closest friends. No longer do you have to worry about zombies or the plague. You did it! You survived!!");
    aButtonElem.innerText = "Play again!"
    bButtonElem.style.display = "none";
    aButtonElem.onclick = startGame;
    bButtonElem.onclick = null;
}
function wizardFound() {
    changeTitle("Who is he?")
    display("You approach the old man and he tells you that he is a wizard. To prove it, he makes a few birds appear and disapear. He gives you two options: send you to a utopia where you and your family can live forever or give you a cure that can cure all the zombies." + 
    "However, it is dangerous for him to create a cure with only an 80% success rate. If he does not succeed, you will die. Which do you choose?") 
    changeButtons("Utopia", "Cure");
    aButtonElem.onclick = utopia;
    bButtonElem.onclick = () => {
        let num = Math.random();
        if (num <= 0.8) {
            cureFound();
        }
        else {
            alert("Oh no! The wizard had some issues with his magic and you die.")
            die();
        }
    }
}
function cureFound() {
    changeTitle("Cure found!!")
    display("You found the cure to the Black Plague! You quickly turn everyon who is a zombie back into a person. YAY!!")
    changeButtons("Play Again!");
    bButtonElem.style.display = "none";
    aButtonElem.onclick = startGame;
    bButtonElem.onclick = null;

}
function village() {
    changeTitle("And you're at the village")
    display("You return to your village. It seems unaffected by the plague.")
    changeButtons("Go to the market or steal", "Look for a friend or go to the forest");
    aButtonElem.onclick = () => {
        display("You look at the market and then look back at your balance. Maybe you need more money...");
        changeButtons("Go to the market", "Steal");
        aButtonElem.onclick = market;
        bButtonElem.onclick = steal;
    }
    bButtonElem.onclick = () => {
        display("Do you want to look for a friend or go to the forest?");
        changeButtons("Look for a friend", "Go to forest");
        aButtonElem.onclick = findFriend;
        bButtonElem.onclick = forest;
    };
}


function steal() {
    display("Your morals...")
    display("Desperate for some money, you sneak towards the nearest vendor. You eye a bag labeled 'special' and also the box they have their money in. What do you do?");
    changeButtons("Randomly grab an item from the bag", "Steal from their money box");
    aButtonElem.onclick = () => {
        let num = Math.random();
        if (num <= 0.3) {
            alert("You grabbed some water! Quickly, you shove it into your bag and run back to the village.");
            inventory.push("water");
            village();
        }
        else if (num <= 0.6) {
            alert("You grabbed some meat! Quickly, you shove it into your bag and run back to the village.");
            inventory.push("food");
            village();
        }
        else if (num < 0.8) {
            alert("You grabbed some an anti-zombie healing potion! Quickly, you shove it into your bag and run back to the village.");
            inventory.push("potion");
            village();
        }
        else {
            alert("Oh no, you got caught! The vendor owner grabs you roughly by the arm. You try to escape, but it is no use.");
            alert("For your punishment, you're thrown to the zombies!");
            die();
        }
    }
    bButtonElem.onclick = () => {
        let num = Math.random();
        if (num <= 0.5) {
            alert("Success! You shove the $60 into your bag and return to the village.");
            balance += 60;
            village();
        }
        else {
            alert("Oh no, you got caught! The vendor owner grabs you roughly by the arm. You try to escape, but it is no use.");
            alert("For your punishment, you're thrown to the zombies!");
            die();
        }
    }
}

function findFriend() {
    changeTitle("Looking for somebody?")
    let num = Math.random();
    if (num <= 0.32) {
        display("You found an old friend! She was once your classmate in school. She gives you some bread, water, and money.");
        inventory.push("food");
        inventory.push("water");
        balance += 10;
        changeButtons("Go to market", "Return to village");
        aButtonElem.onclick = market;
        bButtonElem.onclick = village;
    }
    else if (num <= 0.4) {
        display("You found one of your best friends! She had disappeared a few months ago. She gives you some water, money, and an anti-zombie healing potion that cures a zombie bite.");
        inventory.push("water");
        inventory.push("potion");
        balance += 30;
        changeButtons("Go to market", "Return to village");
        aButtonElem.onclick = market;
        bButtonElem.onclick = village;
    
    }
    else {
        if (inventory.indexOf("weapon") != -1) {
            display("You found a zombie! OH NO!!! You pull a weapon from your bag and fight the zombie off! Sadly, you lose the weapon in the fight.")
            inventory.splice(inventory.indexOf("weapon)", 1))
            changeButtons("Go to market", "Return to village");
            aButtonElem.onclick = market;
            bButtonElem.onclick = bButtonElem.onclick = village;
        }

        else {
            alert("You found a zombie instead! OH NO!!! You try to outrun it or fight it off, but without a weapon, you're bitten!");
            if (bittenByZombie()) {
                display("Thankfully, you survive. Do you want to go to the market or return to the village?")
                changeButtons("Go to market", "Return to village");
                aButtonElem.onclick = market;
                bButtonElem.onclick = village;
            }
        }
    }

}
function bittenByZombie() {
    alert("The Black Plague slowly creeps into your veins as boils erupt on your skin. Do you have a potion? Or will you turn into a zombie?")
    if (inventory.indexOf("potion") != -1) {
        inventory.splice(inventory.indexOf("potion"), 1);
        alert("You've been saved by your potion!!!")
        return true;
    }
    else {
        alert("You have no potion!");
        die();
        return false;
    }
}
function market() {
    changeTitle("The bustling market")
    display("You're in the market. Do you want to buy food or something else?")
    changeButtons("Buy food for $30 or buy water for $10", "Buy weapon for $40 or buy an anti-zombie healing potion (cures zombie bite) for $60");
    aButtonElem.onclick = () => {
        display("Which one do you want?")
        changeButtons("Food for $30", "Water for $10");
        aButtonElem.onclick = () => {
            if (balance >= 30) {
                inventory.push("food");
                addToBag("food");
                balance -= 30;
            }
            else {
                alert("Not enough money!")
                bButtonElem.onclick = village;            }
            changeButtons("Buy something else", "Return to village");
            bButtonElem.onclick = village;
            aButtonElem.onclick = market;
        }
        bButtonElem.onclick = () => {
            if (balance >= 10) {
                inventory.push("water");
                addToBag("water");
                balance -= 10;
            }
            else {
                alert("Not enough money!")
            }
            changeButtons("Buy something else", "Return to village");
            bButtonElem.onclick = village;
            aButtonElem.onclick = market;
        }
    }
    bButtonElem.onclick = () => {
        display("Which one do you want?")
        changeButtons("Weapon for $40", "Anti-zombie healing potion (cures zombie bite) for $60");
        aButtonElem.onclick = () => {
            if (balance >= 40) {
                inventory.push("weapon");
                addToBag("weapon");
                balance -= 40;
            }
            else {
                alert("Not enough money!")
            }
            changeButtons("Buy something else", "Return to village");
            bButtonElem.onclick = village;
            aButtonElem.onclick = market;
        }
        bButtonElem.onclick = () => {
            if (balance >= 60) {
                inventory.push("potion");
                addToBag("anti-zombie healing potion");
                balance -= 60;
            }
            else {
                alert("Not enough money!")
            }
            changeButtons("Buy something else", "Return to village");
            bButtonElem.onclick = village;
            aButtonElem.onclick = market;
        }
    }
}
function houseInventory() {
    changeTitle("What can you bring?")
    display("There isn't much left in your house. You find some clothes and put it in your bag along with water and 30 extra dollars. With the room left, you can add either a large knife or a large slab of salted meat.");
    balance += 30;
    inventory.push("water");
    changeButtons("Add knife", "Add meat");
    aButtonElem.onclick = () => {
        inventory.push("weapon");
        addToBag("a big knife");
        display("Now, do you want to go to the village or go to the forest?");
        changeButtons("To village", "To forest");
        aButtonElem.onclick = village;
        bButtonElem.onclick = forest;
    };
    bButtonElem.onclick = () => {
        inventory.push("food");
        addToBag("a big slab of meat")
        display("Now, do you want to go to the village or go to the forest?")
        changeButtons("To village", "To forest");
        aButtonElem.onclick = village;
        bButtonElem.onclick = forest;
    };
    
}
function addToBag(item) {
    let string = ''
    for (let i = 0; i < inventory.length; i++) {
        if (i == inventory.length - 1 && inventory.length > 2) {
            string += "and " + inventory[i];
        }
        else if (i == inventory.length - 1) {
            string += inventory[i];

        }
        else {
            string += inventory[i] + ", ";
        }
    }
    alert("You have added " + item + " to your bag! You now have " + string + " in your bag.");
}
function die() {
    changeTitle("You died!")
    display("Whoops!")
    changeButtons("Play Again!");
    bButtonElem.style.display = "none";
    aButtonElem.onclick = startGame;
    bButtonElem.onclick = null;
}
function dieThirst() {
    changeTitle("You died of thirst!")
    display("Maybe you should have brought some water...")
    changeButtons("Play Again!");
    bButtonElem.style.display = "none";
    aButtonElem.onclick = startGame;
    bButtonElem.onclick = null;
}
function dieHunger() {
    changeTitle("You died of hunger!")
    display("Maybe you should have brought that bread...")
    changeButtons("Play Again!");
    bButtonElem.style.display = "none";
    aButtonElem.onclick = startGame;
    bButtonElem.onclick = null;
}
function display(message) {
    messageElem.innerText = message;
}
function hideTitle() {
    titleElem.style.visibility = "hidden";
}
function changeTitle(message) {
    titleElem.style.visibility = "visible";
    titleElem.innerText = message;
}
function changeButtons(message1, message2) {
    thirst += 1;
    hunger += 1;
    if (thirst >= 30) {
        dieThirst();
    }
    if (hunger >= 40) {
        dieHunger();
    }
    if (thirst >= 22) {
        let temp = confirm("You look like you are thirsty. Would you like to drink some water? If so, click 'OK.' Otherwise, click 'Cancel.'");
        if (temp == true && inventory.indexOf("water") != -1) {
            thirst -= 15;
            inventory.splice(inventory.indexOf("water"), 1);
            alert("Drank water!")            
        }
        else if (temp == true && inventory.indexOf("water") === -1) {
            alert("No water available.")            
        }
        else {
            alert("Just don't die from thirst!");
        }
    }
    if (hunger >= 32) {
        let temp = confirm("You look like you are hungry. Would you like to eat some food? If so, click 'OK.' Otherwise, click 'Cancel.'");
        if (temp == true && inventory.indexOf("food") != -1) {
            thirst -= 10;
            inventory.splice(inventory.indexOf("food"), 1);
            alert("Ate food!")            
        }
        else if (temp === true && inventory.indexOf("food") === -1) {
            alert("No food available.")            
        }
        else {
            alert("Just don't die from thirst!");
        }
    }
    aButtonElem.style.display = "inline";
    bButtonElem.style.display = "inline";
    aButtonElem.innerText = message1;
    bButtonElem.innerText = message2;
    let string = ''
    for (let i = 0; i < inventory.length; i++) {
        if (i == inventory.length - 1 && inventory.length > 2) {
            string += "and " + inventory[i];
        }
        else if (i == inventory.length - 1) {
            string += inventory[i];

        }
        else {
            string += inventory[i] + ", ";
        }
    }
    inventoryElem.innerText = "Inventory: " + string
    thirstElem.innerText = "Thirst level: " + thirst;
    hungerElem.innerText = "Hunger level: " + hunger;
    balanceElem.innerText = "Balance: $" + balance;
}
let hintsListElem = document.getElementById("hintsContent");
let hintsButtonElem = document.getElementById("hints");
hintsButtonElem.onclick = () => {
    let content = hintsListElem;
    if (content.style.display === "block") {
        content.style.display = "none";
    }
    else {
        content.style.display = "block";
    }
}
startGame();