//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = ["Hello",10,-5,7.7,-2.3,true,55,false,3/3,"By"]

for (const el of arr)
    {
        console.log(el)
    }

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let bookList_1 =
    {
        title : "Голова професора Доуеля",
        pageCount : 576,
        genre : "Фантастика"
    }
let bookList_2 =
    {
        title : "Секрет",
        pageCount : 45,
        genre : "Мотиваційний"
    }
let bookList_3 =
    {
        title : "Моє життя та робота / Генрі Форд",
        pageCount : 344,
        genre : "Автобіографія"
    }

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив.
// Кожен автор має поля name,age
{
    let bookList_1 =
        {
            title : "Голова професора Доуеля",
            pageCount : 576,
            genre : "Фантастика",
            authors :
                [
                    {
                        name :"Олександр Бєляєв",
                        age : 57
                    }
                ]
        }
    let bookList_2 =
        {
            title : "Секрет",
            pageCount : 45,
            genre : "Мотиваційний",
            authors :
                [
                    {
                        name :"Ронда Берн",
                        age : 71
                    }
                ]
        }
    let bookList_3 =
        {
            title : "Моє життя та робота / Генрі Форд",
            pageCount : 344,
            genre : "Автобіографія",
            authors :
                [
                    {
                        name :"Генрі Форд",
                        age : 49
                    }
                ]
        }
    //console.log(bookList_3.authors)
}

//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в
// консоль пароль кожного користувача

let arr_users =
    [
        {
            name : "Vasya",
            username : "Vasya_Vasya",
            password : "Vasya_12345"
        },
        {
            name : "Petya",
            username : "Petya_Petya",
            password : "Petya_12345"
        },
        {
            name : "Fedya",
            username : "Fedya-Fedya",
            password : "Fedya_12345"
        },
        {
            name : "Anya",
            username : "Anya_Anya",
            password : "Anya_12345"
        },
        {
            name : "Maryna",
            username : "Maryna_Maryna",
            password : "Maryna_12345"
        },
        {
            name : "Captain_of_America",
            username : "Captain_of_America_yahoo",
            password : "Captain_of_America_12345"
        },
        {
            name : "Bambook",
            username : "strong_bambook",
            password : "bambook_12345"
        },
        {
            name : "Bart",
            username : "Bart_Simpson",
            password : "cova banga"
        },
        {
            name : "Vasya_Pryanuk",
            username : "Vasya_strong_Pryanuk",
            password : "Pryanuk_12345"
        },
        {
            name : "Oksana",
            username : "Dyka_Porichka",
            password : "Duge_Dyka_Porichka"
        }

    ]

for (const user_pass of arr_users)
    {
        console.log(user_pass.password)
    }


console.log(arr_users)

// arr_users[index].name or username or password
// звернення до елементу масиву  - [] , arr[0]
//якщо масив з обєктів - звернення через крапку -arr[0].password
//і навпаки , якщо в обєкті масив user.info[0]

// length - довжина масиву  len_arr = arr.length
//  як альтернатива append можна застосовувати length
// arr[arr.length] додавати останній елемент масиву.