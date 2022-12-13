// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function user(id, name, surname, email, phone)
    {
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
    }
let data_base=
    {
        names : ["Vasya", "Petya", "Kolya", "Orest", "Dima", "Yura", "Slavik", "Maks", "Pavlo", "Vanya"],
        surnames : ["das", "dasd", "dasd", "dasda", "dasd", "dasd", "dasd", "dsad", "das", "das"],
        emails : ["das", "dasd", "dasd", "dasda", "dasd", "dasd", "dasd", "dsad", "das", "das"],
        phones : [45454, 45454, 45454, 5454, 5454, 87878, 4545, 45454, 778, 899],
        orders : ["tv","phone","notebook","mouse"]
    }
let users_array= []

for (let i = 0; i < data_base.names.length; i++)
    {
        users_array.push(new user
            (
                i+1,
                data_base.names[i],
                data_base.surnames[i],
                data_base.emails[i],
                data_base.phones[i])
            )
    }
console.log(users_array);

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(users_array.filter((user) => user.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(users_array.sort((user1, user2) => user1.id - user2.id));

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client
    {
        constructor(id, name, surname, email, phone, order)
            {
                this.id = id
                this.name = name
                this.surname = surname
                this.email = email
                this.phone = phone
                this.order = order
            }
    }

let Client_array =[]

for (let i = 0; i < data_base.names.length; i++)
{
    Client_array.push(new Client
        (
            i+1,
            data_base.names[i],
            data_base.surnames[i],
            data_base.emails[i],
            data_base.phones[i],
            data_base.orders
        )
    )
}
console.log(Client_array);

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості
// товарів в полі order по зростанню. (sort)

console.log(Client_array.sort((client1, client2) => client1.order.length - client2.order.length));


// - Створити функцію конструктор з класом яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік
// випуску,максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



class Car
{
    constructor(model,producer, yearOfProduction, maxSpeed, volEngine)
    {
        this.model = model
        this.producer = producer
        this.yearOfProduction = yearOfProduction
        this.maxSpeed = maxSpeed
        this.volEngine = volEngine
    }
    drive ()
        {
            return `їдемо зі швидкістю ${this.maxSpeed}`
        }
    info ()
        {
            for (const carElement in this)
                {
                    console.log(carElement,": ",this[carElement]);
                }
        }
    increaseMaxSpeed (newSpeed)
        {
            this.maxSpeed = newSpeed
            console.log("new speed : ", this.maxSpeed);
        }
    changeYear (newValue)
        {
            this.yearOfProduction = newValue
            console.log("new year production : ", this.yearOfProduction);
        }
    addDriver (newDriver)
        {
            console.log(this.Driver = newDriver);
        }
}

let myCar= new Car("DS5", "Citroen", "2016", "200 km/h", "2.0 Diesel")

console.log(myCar);
console.log(myCar.drive());
myCar.info();
myCar.increaseMaxSpeed (240)
myCar.changeYear(2018)
myCar.addDriver({name: "Dmytro", age: 38, drivingExperience: 14})


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderela
    {
        constructor(name, age, footSize)
            {
                this.name = name
                this.age = age
                this.footSize = footSize
            }
    }
let data_base_Cinderela=
    {
        names : ["Olya", "Diana", "Nastya", "Lilya", "Katya", "Maryana", "Ira", "Yana", "Yulya", "Orusya"],
        ages : [22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        footSizes : [35, 35.5, 36, 36.5, 37, 37.5, 38, 38.5, 39, 39.5]
    }
let arrayOfCinderelas= []
let prince = {name: "Vasya", age: 56, shoe: 38}

for (let i = 0; i < data_base_Cinderela.names.length; i++)
    {
        arrayOfCinderelas.push(new Cinderela
            (
                data_base_Cinderela.names[i],
                data_base_Cinderela.ages[i],
                data_base_Cinderela.footSizes[i])
            )
    }
console.log(arrayOfCinderelas);

arrayOfCinderelas.forEach((Cinderela) => Cinderela.footSize === prince.shoe ? console.log(Cinderela) : false);

console.log(arrayOfCinderelas.find((Cinderela) => Cinderela.footSize === prince.shoe ? Cinderela : false));

