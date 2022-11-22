
users = [
          {name : "vasya" , age : 22},
          {name : "fedya" , age : 30}
        ]

//let print_element = (user) => console.log(user)

//users.forEach(print_element)

//users.forEach ( function print_element (user) { console.log(user) } )

//users.forEach (  (user) => console.log(user)  )

//console.log ( users.filter( (user) => user.age > 25 ) )

//let new_users = users.map ( (user) => ({ name : user.name }))

//console.log(new_users);

//let new_users_2 = users.map ( (user,index ) => ({ id : index+500 , name : user.name }))
//console.log(new_users_2);

//let new_users_2 = users
//    .map ( (user,index ) => ({ id : index+500 , name : user.name }))
//    .filter (user => user.id % 2 === 0)
//    .forEach ( user => console.log(user))

let users2 = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// Відсортували по віку
console.log(users2.sort((user1, user2) => user1.age - user2.age));
// ф-я бере обєкти по парно та порівнює їх. Принцип user1.age = 31 , user2.age = 30
// 30-31 = 1 , означає що перший обєкт більший за другий і його необхідно перемістити в низ
// такий алгоритм , функція сама все від фільтрує і посортує , додаткових циклів не потрібно
// вона так працює

// Сортування по довжині імені
console.log(users2.sort((user1, user2) => user1.name.length - user2.name.length));
// Аналогічний принцип , бере довжину імен двої обєктів , порівнює і найбільший опускає до низу.

// фільтруємо по імені (алфавітний порядок)
console.log(users2.sort(function (user1, user2)
    {
        if (user1.name > user2.name)
        { return 1;} // 1 опускає в низ
        if (user1.name < user2.name)
        { return -1; } // -1 піднімає в гору
        if (user1.name === user2.name)
        { return 0; } // залишає на місці
    }
    ));
