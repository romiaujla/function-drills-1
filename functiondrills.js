function getYearOfBirth(age){
    if(age < 0){
        throw new Error("Age cannot be negative");
    }
    return 2019-age;
}

function createGreeting(name, age){
    const yearOfBirth = getYearOfBirth(age);
    return `Hi my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}`;
}

try{
    const greeting1 = createGreeting("Raman", "-1");
    console.log(greeting1);
}catch (e){
    console.log(e);
}
