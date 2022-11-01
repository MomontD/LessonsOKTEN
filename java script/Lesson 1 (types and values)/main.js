// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10,
//    -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

let in1 = "hello"
    in2 = "owu"
    in3 = "com"
    in4 = "ua"
    in5 = 1
    in6 = 10
    in7 = -999
    in8 = 123
    in9 = 3.14
    in10 = 2.7
    in11 = 16
    in12 = true
    in13 = false

console.log( in1 , in2, in3, in4, in5, in6, in7, in8, in9, in10, in11, in12, in13)

//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = "Dmytro"
    middleName = "Yuriyovych"
    lastName = "Momont"
    person = ""

person = firstName + " " + middleName + " " + lastName
//person = `${firstName} ${middleName} ${lastName}`
console.log(person)

//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

let a = 100
    b = '100'
    c = true;

console.log(typeof  a, typeof b, typeof c)

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються
// вашими Імям, По-Батькові та роками. та вивести в консоль

{ // Щоб невикористовувати нові змінні , виділив в окремий блок
    let firstName = ""
        middleName = ""
        lastName = ""

    firstName = prompt("Введіть Ваше ім'я")
    middleName = prompt("По батькові")
    lastName = prompt("Прізвище")
    console.log(firstName + " " + middleName + " " + lastName)
}