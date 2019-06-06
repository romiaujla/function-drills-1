//Object initializers and methods
console.log("Object initializers and methods");
const loaf = {
  flour: 300,
  water: 210,
  // This is ahow you write an object with an empty method
  hydration: function() {
    return (this.water / this.flour) * 100;
  }
}
console.log(loaf.flour);
console.log(loaf.water);
console.log(loaf.hydration());
console.log("-----------------------------\n");


//Iterating over an object's properties
console.log("Iterating over an object's properties");
const object = {
  foo: 1,
  bar: "string",
  fum: 22,
  quux: true,
  spam: "yes",
}
for (let property1 in object) {
  console.log(object[property1]);
}
console.log("-----------------------------\n");

//Arrays in objects
console.log("Arrays in objects");
const food = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
}
console.log(food.meals[3])
console.log("-----------------------------\n");


//Factory Functions with LOTR
console.log("Factory Functions with LOTR");
function createCharacter(chName, chNickName, chRace, chOrigin, chAttack, chDefense, chWeapon) {
  //returning the Object that contains the LOTR character
  return {
    //key : value
    name: chName,
    nickName: chNickName,
    race: chRace,
    origin: chOrigin,
    attack: chAttack,
    defense: chDefense,
    weapon: chWeapon,

    //describe method : returns 'Name' is a 'Race' from 'Origin' who uses 'Weapon'.
    describe: function() {
      return `${this.name} is a ${this.race} from ${this.origin} who uses ${this.weapon}.`;
    },

    /*
      evaluateFight method
      gandalf: Attack - 10, Defense - 6
        vs
      bilbo: Attack - 2, Defense - 1

      (y) Gandalf Damage Taken = bilbo attack - gandalf defense
                           =        2     -   6
                           =        -4
                           =  If damaged taken is negative change to 0
      Gandalf Damage Taken =  0

      (x) bilbo damage taken = gandalf attack - bilbo defense
                         =        10      -     1
                         =        9

      return `Your opponent takes (x=9) damage and you receive (y=0) damage`                       
    */
    evaluateFight: function(opponent) {

      let opponentDamage = this.attack - opponent.defense;
      let ourDamage = opponent.attack - this.defense;

      if (opponentDamage < 0) {
        opponentDamage = 0;
      }
      if (ourDamage < 0) {
        ourDamage = 0;
      }

      return `${opponent.name} takes ${opponentDamage} damage and ${this.name} receives ${ourDamage} damage`;
    }//end of evaluateFight
  };//end of return
}//end of factory function.

//Creating an array of character objects that will hold all the LOTR heroes 
//by calling our factory method
let characters = [
  createCharacter("Gandalf the White", "gandalf", "Wizard", "Middle Earth", 10, 6, "wizard staff"),
  createCharacter("Bilbo Baggins",
    "bilbo", "Hobbit", "The Shire", 2, 1, "ring"),
  createCharacter("Frodo Baggins",
    "frodo", "Hobbit", "The Shire", 2, 1, "string and battle blade"),
  createCharacter("Aragorn son of Arathorn", "aragorn", "Man", "Dunnedain", 6, 8, "Anduril"),
  createCharacter("Legolas", "legolas", "Elf", "Woodland Realm", 8, 5, "Bow and Arrow"),
]
//Calling ou factory method in the push method
//Adding a characterusing the array.push(createCharacter())
characters.push(createCharacter("Arwen Undomiel", "arwen", "Half Elf", "Rivendell", 10, 3, "Hadhafang"));

//Using the Describe method to describe Aragorn
console.log("\nUsing the Describe method to describe Aragorn:");
console.log(characters.find(character => character.nickName === 'aragorn').describe());

//using .filter to store all the hobits in allTheHobbits object
//later logging out the hobbits using the .find and describe method
console.log("\nDisplaying all the hobbits:");
const allTheHobbits = characters.filter(character => character.race === "Hobbit");
allTheHobbits.find(hobbits => console.log(hobbits.describe()));

//using .filter to get all the attackers with attack above 5 and storing them in 
// an object attackAbove5
console.log("\nDisplaying all the attackers with attack above 5: ");
const attackAbove5 = characters.filter(character => character.attack > 5);
//using the .find to loop thru all the objects in attackAbove5 and logging
//them out using the describe method and the attack property
attackAbove5.find(attackers => console.log(`${attackers.describe()} Has an attack of ${attackers.attack}`));

//Checking to see if our evaluateFight method works correctly
console.log("\nChecking to see if our evaluateFight method works correctly");
console.log("Fight Between Gandalf and Bilbo:");
const gandalf = characters.find(character => character.nickName === 'gandalf');
const bilbo = characters.find(character => character.nickName === 'bilbo');
console.log(gandalf.evaluateFight(bilbo));