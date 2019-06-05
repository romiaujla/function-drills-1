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

