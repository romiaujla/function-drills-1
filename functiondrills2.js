function beyond(num) {
    if (!Number.isFinite(num)) {
        return "Out and beyond";
    }
    else if (Number.isFinite(num) && num > 0) {
        return "To infinity";
    }
    else if(Number.isFinite(num) && num < 0){
      return "To negative infinity";
    }
    else if(num === 0){
      return "Staying home";
    }
}
console.log(beyond(Infinity));
console.log(beyond(1));
console.log(beyond(-1));
console.log(beyond(0));


// Second Drill for the Decode Function
function decode(word){
  let firstChar = word.slice(0,1);
  switch(firstChar){
    case 'a':
      return word[1];
      break;
    case 'b':
      return word[2];
      break;
    case 'c':
      return word[3];
      break;
    case 'd':
      return word[4]
      break;
    default:
      return " ";
      break;
  }
}


let str = "craft block argon meter bells brown croon droop";
let strArray = str.split(" ");

for(let i = 0; i < strArray.length; i++){
  console.log(decode(strArray[i]));
}

// Cycle = 'l'
// 12345
// apple = 'p'
// 12345
// mouse = ' '
// craft block argon meter bells brown croon droop
//    f    o    r    ' '     l     o      o      p

