//itar (Classic)
//for (let i = 0; i < array.length; i++) {
//    const arrayElement = array[i];
//------------------------------------------
// iter (for of)
//for (const arrayElement of array) {
// }
//------------------------------------------
// itera (for await of)
// itin (for in)
// ritat (back to start point)


//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом в серединi

for (let i = 0; i <10; i++)
{   //inside document.write (``) - Alt+Enter - HTML DOC
    document.write(`     
            <div> 
            <h3> "Hello world" </h3>
            </div> `)
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i <10; i++)
    {   //inside document.write (``) - Alt+Enter - HTML DOC
        document.write(`     
            <div> 
            <h3> "Block div №" , ${i+1} </h3>
            </div> `)
    }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

{
    let index=0
    while (index < 20)
        {
            document.write(`     
            <div> 
            <h1> "Hello world" </h1>
            </div> `)
            index++
        }
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

{
    let index=0
    while (index < 20)
    {
        document.write(`     
            <div> 
            <h1>"Block div №" , ${index+1}</h1>
            </div> `)
        index++
    }
}

//- Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//  <ul>
//     <li>ITEM OF ARRAY</li>
//     <!--
//         і тд інші об'єкти масиву
//          ...
//          ...
//          ...
//     -->
// </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js']

for (const element of listOfItems)
    {
        document.write(`     
            <ul>
                <li> ${element} </li>
            </ul> `)

    }

//Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// 			let products = [
// 				{
// 					title: 'milk',
// 					price: 22,
// 					image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
// 				},
// 				{
// 					title: 'juice',
// 					price: 27,
// 					image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
// 				},
// 				{
// 					title: 'tomato',
// 					price: 47,
// 					image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
// 				},
// 				{
// 					title: 'tea',
// 					price: 15,
// 					image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
// 				},
// 			];
//
// ШАБЛОН
//  <div class="product-card">
//         <h3 class="product-title">TITLE. Price - PRICE</h3>
//         <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

{
    let products = [
        {
            title: 'milk',
            price: 22,
            image: 'https://milkalliance.com.ua/uploads/gallery_photo/photo/0380/30.jpg'
        },
        {
            title: 'juice',
            price: 27,
            image: 'https://cdn.tabletki.ua/img/goods/1b641b93-4097-11ec-bacd-0050569aacb6/img_0.jpg'
        },
        {
            title: 'tomato',
            price: 47,
            image: 'https://chumak.com/data/product/card/81f15ceba71c4d518bad4e7e59c98cef_450x450.jpg'
        },
        {
            title: 'tea',
            price: 15,
            image: 'https://content2.rozetka.com.ua/goods/images/big/263946544.jpg'
        },
    ];

    for (const element of products)
        {
            document.write
                (`     
                    <div class="product-card">
                        <h3 class="product-title"> Назва продукту : ${element.title} , Вартість : ${element.price}</h3>
                        <img src="${element.image}" alt="" class="product-image">
                    </div>
                `)
        }



}

//є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//  за допомоги циклу вивести:
//  - користувачів зі статусом true
//  - користувачів зі статусом false
//  - користувачів які старші за 30 років

{
    let users = [
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
                ]
    for (const element of users)
        {
            if (element.status)
                {
                    console.log(element)
                }
        }
    for (const element of users)
        {
            if (!element.status)
                {
                    console.log(element)
                }

        }
    for (const element of users)
    {
        if (element.age > 30 )
        {
            console.log(element)
        }

    }
}