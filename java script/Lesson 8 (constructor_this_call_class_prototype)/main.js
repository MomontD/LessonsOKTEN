

function User(name, age, skills, wife)
{
    this.name = name;
    this.age = age;
    this.skills = skills;
    this.wife = wife;
    this.greeting = function (msg)
    {
        return `${msg} my name is ${this.name}`
    }
}
let user1 = new User("vasya", 31, ["js","html"], {name: 'anna', age: 123})
console.log(user1);
console.log(user1.greeting("Hello")); //=> Hello my name is vasya

let friend =
    {
        name: 'anton',
        age : 31,
        married : false
    }

console.log(user1.greeting.call(friend, 'YO'));

console.log("end________________________");


class UserPuser {

    constructor(name, age) { // створення нового обєкту
        this.name = name;
        this.age = age;
    }

    greeting() { // створення функції , окремо від обєкту
        console.log(`hello my name is ${this.name}`)
    }
}
console.log(new UserPuser("Dima", 31));
// =>
// UserPuser {name: 'Dima', age: 31}
// age: 31
// name: "Dima"
console.log(new UserPuser("Dima", 31).greeting());
// =>
// hello my name is Dima
// undefined