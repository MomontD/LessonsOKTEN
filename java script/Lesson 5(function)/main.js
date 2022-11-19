//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function area_rectangle (a, b)
    {
        return a * b
    }
console.log(area_rectangle(3,4))


// - створити функцію яка обчислює та повертає площу кола з радіусом r

function area_circle (radius)
    {
        let pi = 3.14
        return pi * (radius*radius)
    }
console.log(area_circle(5))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r



// - створити функцію яка приймає масив та виводить кожен його елемент

function output_arr(in_arr)
    {
        for (const element of in_arr)
            {
                console.log(element)
            }
    }
    output_arr([1,2,3,4,5])


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraph (text_in)
    {
        document.write(`<p> ${text_in} </p>`)
    }
    paragraph("Hello world!")


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function print_li_in_ul (text_in)
    {
        document.write(`<ul>`)
        for (let i = 1; i <= 3; i++)
        {
            document.write(`<li> ${text_in} </li>`)
        }
        document.write(`</ul>`)
    }
    print_li_in_ul("Hello world!")


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
{
    function print_li_in_ul(text_in, num_output) {
        document.write(`<ul>`)
        for (let i = 1; i <= num_output; i++) {
            document.write(`<li> ${text_in} </li>`)
        }
        document.write(`</ul>`)
    }

    print_li_in_ul("Hello world!", 5)
}


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

{
    function print_elements(arr_in)
    {
        document.write(`<ul>`)
        for (let i = 0; i < arr_in.length; i++)
            {
                document.write(`<li> ${arr_in[i]} </li>`)
            }
        document.write(`</ul>`)
    }

    print_elements(["Hello world!",53,true,2.3,"f","a",false,"by"])
}

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

function output_obj (arr_obj)
    {
        for (const element of arr_obj)
            {
                document.write(`<div> 
                                    <h3> 
                                         Name :  ${element.name},
                                         Age  :  ${element.age},
                                         ID   :  ${element.id}
                                    </h3> 
                                 </div>
                               `)
            }
    }

let users = [
    {name: 'vasya', age: 31, id: 12345},
    {name: 'petya', age: 30, id: 54321},
    {name: 'kolya', age: 29, id: 12365},
    {name: 'olya', age: 28, id: 46464},
    {name: 'max', age: 30, id: 78979},
    {name: 'anya', age: 31, id: 523148},
    {name: 'oleg', age: 28, id: 985236},
    {name: 'andrey', age: 29, id: 74521},
    {name: 'masha', age: 30, id: 78956},
    {name: 'olya', age: 31, id: 85230},
    {name: 'max', age: 31, id: 985641}
]

output_obj(users)


// - створити функцію яка повертає найменьше число з масиву

function find_min_num (arr_nums)
    {
        let min_num = arr_nums[0]
        for (let i = 1; i < arr_nums.length; i++)
            {
                if (min_num > arr_nums[i])
                    {
                        min_num = arr_nums[i]
                    }
            }
        return min_num
    }

console.log(find_min_num([5,9,1,2,3,4,8]))


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function sum_elements_of_arr (arr_in)
    {
        let sum_num = 0
        for (const num of arr_in)
            {
                sum_num += num
            }
        return sum_num
    }

console.log(sum_elements_of_arr([1,2,3,4,5]))

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

{
 let arr = [];
 function foo() {
     for (let i = 0; i < 10; i++) {
         arr[i] = Math.floor(Math.random() * 100); // Math.floor округлення до цілого числв в низ (1.9 =>1)
     }                                              // Math.random() * 100) випадкове число від 0 до 100
     console.log(arr);
 }
 foo();
}

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати
// заборонено);

{
    function foo(...arguments) {   // arguments - містить вхідні аргументи , коли ми не знаємо скільки їх буде
        let min = arguments[0];    // ... arguments - створює масив аргументів , але його присвоїти не можна
        let max = arguments[0];    // використов. тільки в середині функцій для обробки даних
        for (const item of arguments) {
            if (item > max) {
                max = item;
            }
            if (item < min) {
                min = item;
            }
        }
        console.log(max);
        return min;
    }

    let foo1 = foo(1, 2, 3, 4, 5, 6, 7);
    console.log(foo1);
}

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
{
    const arr = [1, 2, 3];

    function foo(array) {
        let newArray = [];
        for (let i = array.length - 1, j = 0; i >= 0;) {
            newArray[j++] = array[i--];
        }
        return newArray;
    }
}
 console.log(foo(arr));

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий
// результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

{
    const arr1 = [1, 2, 3, 4];
    const arr2 = [1, 2, 3, 4, 5];

    function foo(array1, array2) {
        let res = [];
        let xxx = array1.length >= array2.length ? array1 : array2;
        for (let i = 0; i < xxx.length; i++) {
            res[i] = (array1[i] || 0) + (array2[i] || 0);
        }
        return res;
    }

    console.log(foo(arr1, arr2));
}


//-   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

function replace_elements (in_arr,index)
    {
        let temp_num = in_arr[index]
        in_arr[index] = in_arr[index+1]
        in_arr[index+1] = temp_num
        return in_arr
    }

console.log(replace_elements([1,2,3,4,5],0))

//- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

function sorted_arr (arr_in)
    {
        let zero_mass=[], // створюємо масив для 0 значень
            sorted_mass=[] // створюємо масив для значень більших за 0
        for (const element of arr_in) // в циклі створюємо 2 окремих масива з "0" та цілими числами
            {
                if (element ===0)
                {
                    zero_mass[zero_mass.length]=element
                }
                else
                {
                    sorted_mass[sorted_mass.length] = element
                }
            }
        for (let i = 0; i < zero_mass.length; i++) // додаємо в кінець масиву нулі
            {
                sorted_mass[sorted_mass.length] = zero_mass[i]
            }
        console.log(sorted_mass)
    }

sorted_arr([1,0,2,3,0,4,0,5,0])

//- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// vxcvxc

{
    const arr = [
        {name: 'Dima', age: 13},
        {model: 'Camry'}
    ]

    function foo(array) {
        let newArray = [];
        for (let i = 0, j = 0; i < array.length; i++) {
            for (const key in array[i]) {  // або функція Object.keys - витягує ключі з обєкта - за гугли
                newArray[j++] = key;
            }
        }
        return newArray;
    }

    console.log(foo(arr));
}

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

{
    const arr = [
        {name: 'Dima', age: 13},
        {model: 'Camry'}
    ]

    function foo(array) {
        let newArray = [];
        for (let i = 0, j = 0; i < array.length; i++) {
            for (const key in array[i]) {
                newArray[j++] = array[i][key];
            }
        }
        return newArray;
    }

    console.log(foo(arr));
}

// function chenger(arr, i) {
//
//         [arr[0], arr[2]] = [arr[2], arr[0]]; ///!!!!!!!!! Якщо з масивом , потрібно огорнути в масив
//
//     return arr;
// }
//
// console.log(chenger(arr, 0));