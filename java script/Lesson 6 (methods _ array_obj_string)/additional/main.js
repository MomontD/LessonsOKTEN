//- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cutString =  (str , n) =>
{
    let mass_str=[]
    for (let i = 0; i < str.length; i+=n)
    {
        mass_str.push(str.substring(i,i+n));
    }
    return mass_str;
}
console.log(cutString("наслаждение", 3));

//- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let delete_characters = (str, n) => str.substring(0,n)

console.log(delete_characters ("Каждый охотник желает знать",7));


//- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі
//  символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let insert_dash = (str) => str.split(" ").join("-").toUpperCase()

console.log(insert_dash("HTML JavaScript PHP"));

//- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let to_upper = (str) => str.substring(0,1).toUpperCase() + str.substring (1,str.length)

console.log(to_upper("hello"));

// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

function corect_name (in_name)
    {
        let new_name = ""

        for (let i = 0; i < in_name.length; i++)
        {
            // Перевіряємо приналежність символів до діапазону ascii (a..b та A..B)
            // Якщо так , тоді створюємо нову стрічку з цими символами
            if ((in_name.charCodeAt(i) >= 65 && in_name.charCodeAt(i) <= 90) ||
            (in_name.charCodeAt(i) >= 97 && in_name.charCodeAt(i) <= 122))
            {
                new_name = new_name + in_name[i]
            }
            // Якщо символ != діапазону ascii (a..b та A..B)
            // тоді його пропускаємо і після останнього додаємо пробіл , щоб був відступ між словами
            else
            {
                if ((in_name.charCodeAt(i+1) >= 65 && in_name.charCodeAt(i+1) <= 90) ||
                    (in_name.charCodeAt(i+1) >= 97 && in_name.charCodeAt(i+1) <= 122))
                {
                    new_name = new_name + " "
                }
            }
        }
        return new_name
    }
console.log(corect_name("Harry..Potter///"));

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

function random_mass(num)
{
    let new_mass=[]
        for (let i = 0; i < num; i++)
        {
            new_mass[i] = Math.floor(Math.random() * num)
        }
    return new_mass

}
console.log(random_mass(10));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

console.log(random_mass(10).sort((el1, el2) => el1 - el2));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)

console.log(random_mass(10).filter((el) => (el % 2 === 0) && el !== 0 ? el : null));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

function upper_string (str)
    {   // розбиваю слова на масив
        let mass_words = str.split(" ")
        // витягую кожне слово і роблю його з великої букви
        for (let i = 0; i < mass_words.length; i++)
        {
            mass_words[i] = mass_words[i][0].toUpperCase() + mass_words[i].substring(1, mass_words[i].length)
        }
        mass_words = mass_words.join(" ")
        console.log("Цикл for :" , mass_words)
    }

upper_string("Vasya petya kolya")

{
    function upper_string (str)
    {
        let mass_words = str.split(" ").map( (word) => [word[0].toUpperCase() + word.substring(1, word.length)]).join(" ")
        console.log("Цикл split.map.join :" , mass_words)
    }
    upper_string("Vasya petya kolya")
}

// - Створити функцію-валідатор для адрес електронної пошти.
// Перевірка повинна включати в себе :
// данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

function valid_mail (mail_in)
    {
        // Оголошуємо додаткову функцію comparison(порівняння) - порівнюємо символи мейлу на валідність
        // з таблицею ascii(a..z,A..Z,0..9). Бере на вхід мейл та індекс(з циклу) повертає true якщо символ НЕ валідний
        // Таких порівнянь є декілька :
        // 1. до символу @ ,
        // 2. від @ до "." ,
        // 3. від "." до кінця мейлу.
        // Щоб не об'ємити код - вивів в окрему ф-ю
        let comparison = (compr_email,i) =>
                (compr_email.charCodeAt(i) >= 0 && compr_email.charCodeAt(i) < 48) ||
                (compr_email.charCodeAt(i) >= 58 && compr_email.charCodeAt(i) <= 64) ||
                (compr_email.charCodeAt(i) > 90 && compr_email.charCodeAt(i) < 97) ||
                (compr_email.charCodeAt(i) > 122)
        // Крок 1-ий , шукаємо @ , якщо знаходимо рухаємось до кроку 2
        let index = mail_in.indexOf("@")
        if (index !== -1)
        // крок 2 , перевіряємо валідацiю символів до @
            {
                for (let i = 0;  i < index; i++)
                    {
                        if (comparison(mail_in,i)) return "Invalid Email"
                    }
                // крок 3 перевіряємо валідацію символів після @ + знаходження крапки "point" (яка має знаходитись не
                // меньше ніж на 2 символ після равлика)
                let point =  mail_in.substring(index+1,mail_in.length).indexOf(".")
                if (point >=  1)
                    {
                        // Перевизначаємо point - на реальний індекс символа "."в емейлі і фіксуємо його
                        point = mail_in.indexOf(".")
                        // Проходимось по символам від @ до point "."
                        for (let i = index + 1; i < point; i++)
                            {
                                if (comparison(mail_in,i)) return "Invalid Email"
                            }
                        // Проходимось по символам point "." до кінця стрічки
                        for (let i = point + 1; i < mail_in.length ; i++)
                            {
                                if (comparison(mail_in,i)) return "Invalid Email"
                            }
                    }
                else return "invalid mail"
            }
        else return "invalid mail"
        return "mail passed validation"
    }
console.log(valid_mail("some.email@gmail.com"));



//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//



// - є масивlet coursesArray = [
//              {
//                  title: 'JavaScript Complex',
//                  monthDuration: 5,
//                  hourDuration: 909,
//                  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//              },
//              {
//                  title: 'Java Complex',
//                  monthDuration: 6,
//                  hourDuration: 909,
//                  modules: ['html',
//                      'css',
//                      'js',
//                      'mysql',
//                      'mongodb',
//                      'angular',
//                      'aws',
//                      'docker',
//                      'git',
//                      'java core',
//                      'java advanced']
//              },
//              {
//                  title: 'Python Complex',
//                  monthDuration: 6,
//                  hourDuration: 909,
//                  modules: ['html',
//                      'css',
//                      'js',
//                      'mysql',
//                      'mongodb',
//                      'angular',
//                      'aws',
//                      'docker',
//                      'python core',
//                      'python advanced']
//              },
//              {
//                  title: 'QA Complex',
//                  monthDuration: 4,
//                  hourDuration: 909,
//                  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//              },
//              {
//                  title: 'FullStack',
//                  monthDuration: 7,
//                  hourDuration: 909,
//                  modules: ['html',
//                      'css',
//                      'js',
//                      'mysql',
//                      'mongodb',
//                      'react',
//                      'angular',
//                      'aws',
//                      'docker',
//                      'git',
//                      'node.js',
//                      'python',
//                      'java']
//              },
//              {
//                  title: 'Frontend',
//                  monthDuration: 4,
//                  hourDuration: 909,
//                  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//              }
//          ];
//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
//
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//
//
// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню
