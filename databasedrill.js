console.log("A Database Search");
const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query) {
  //Loopping thru the Arrat Heroes

  //Using the find function to loop thru the HEREOS object array
  console.log(arr.find(hero => {

    //declaring a variable that will store the value for the hero that we find with the first match
    let foundHero = null;

    //Using the for - in loop to loop thru the properties of the query. 
    //So we can match the same properties of the hero object and the query object which is being sent in as a parameter. 
    for (let queryProp in query) {

      //check if value of hero.property matches with the value of
      //query.property and store the hero in the object foundHero if it is true
      if (hero[queryProp] === query[queryProp]) {
        foundHero = hero;
      }//if there is any value of the query.property that does not match with the value of the hero.property we just return null so the function ends here.      
      else {
        foundHero = null;
        return foundHero;
      }
    }
    //if we reach here means all the values in a property were a match and the hero to be returned is the value we stored in the foundHero.
    return foundHero;
  }));
}

findOne(HEROES, { id: 1 });
// => { id: 1, name: 'Captain America', squad: 'Avengers' }
findOne(HEROES, { id: 10 });
// => null
findOne(HEROES, { id: 2, name: 'Aquaman' });
// => null
findOne(HEROES, { id: 5, squad: 'Justice League' });
// => { id: 5, name: 'Wonder Woman', squad: 'Justice League' }
findOne(HEROES, { squad: 'Justice League' });
// => { id: 4, name: 'Superman', squad: 'Justice League' }

console.log("-----------------------------\n");

console.log("8a. BONUS II: A Database Method");
const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },
  findOne: function(query) {
    this.store.heroes.find(hero => {
      let foundHero = null;

      //loop thru the properties of object query being passed as the parameter when the function findOne is being called
      for (let queryProp in query) {

        //check if value of hero.property matches with the 
        //object query.property and store the found hero in the object foundHero
        if (hero[queryProp] === query[queryProp]) {
          foundHero = hero;
        }//if there is any value of the query.property that does not match with the value of the hero.property we just return null so the function ends here.      
        else {
          return null;
        }
      }
      //if we reach here means all the values in a property were a match and the hero to be returned is the value we stored in the foundHero.
      console.log(foundHero);
      return foundHero;
    });
  }
};

Database.findOne({ id: 2 });
//=> { id: 2, name: 'Iron Man', squad: 'Avengers' }
Database.findOne({ id: 5, squad: 'Justice League' });
// // // => { id: 5, name: 'Wonder Woman', squad: 'Justice League' }
