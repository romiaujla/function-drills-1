function getYearOfBirth(age){
    return 2019-age;
}

function createGreeting(name, age){
    const yearOfBirth = getYearOfBirth(age);
    return `Hi my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}`;
}

const greeting1 = createGreeting("Raman", "29");
console.log(greeting1);