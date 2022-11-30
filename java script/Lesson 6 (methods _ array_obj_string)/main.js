//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
{
    console.log('hello world :','hello world'.length, "\nlorem ipsum :","lorem ipsum".length,
        "\njavascript is cool :","javascript is cool".length);

}

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
{
    console.log("hello world".toUpperCase(),"\nlorem ipsum".toUpperCase(),"\njavascript is cool".toUpperCase())
}

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
{
    console.log("HELLO WORLD".toLowerCase(),"\nLOREM IPSUM".toLowerCase(),"\nJAVASCRIPT IS COOL".toLowerCase())
}

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
{
    console.log(" dirty string   ".trim());
}
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
{
    console.log("Ревуть воли як ясла повні".split(" "));
}

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
{
    let in_mass = [10, 8, -7, 55, 987, -1011, 0, 1050, 0],
        new_mass =[]

    in_mass.map((element) => new_mass.push(String(element)))
    console.log(new_mass)
// АБО
    // let strings = arr.map(value => value.toString());
    // let strings = arr.map(value => String(value));
    // let strings = arr.map(value => value + '');



}

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

{
    let nums = [11,21,3],
        arg = "descending"

    function sorted (in_num,in_arg)
    {
        if (in_arg === "ascending")
            {
                console.log(in_num.sort((in_num1, in_num2) => in_num1 - in_num2));
            }
        else if (in_arg === "descending")
            {
                console.log(in_num.sort((in_num1, in_num2) => in_num2 - in_num1));
            }
        else
            {
                console.log("Invalid command");
            }
    }
    sorted(nums,arg)
}

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
{
    let coursesAndDurationArray =
        [
            {title: 'JavaScript Complex', monthDuration: 5},
            {title: 'Java Complex', monthDuration: 6},
            {title: 'Python Complex', monthDuration: 6},
            {title: 'QA Complex', monthDuration: 4},
            {title: 'FullStack', monthDuration: 7},
            {title: 'Frontend', monthDuration: 4}
        ]

    console.log(coursesAndDurationArray.sort((el1, el2) =>
        el2.monthDuration - el1.monthDuration).filter( (num) => num.monthDuration > 5 ));
}

//  описати колоду карт
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }


    let suit = ['spade', 'diamond','heart', 'clubs'],
        value = ['6','7','8','9','10','ace','jack','queen','king','joker'],
        color = ['red','black'],
        cardSuit = []
        card = {}

    // Заповнюємо колоду карт
    // витратив 3 год поки написав ці цикли з врахуванням джокерів та колоьру , швидше б руками набрав ...))
    for (let s= 0; s < suit.length; s++)
    {
        for (let v = 0; v < value.length; v++)
        {
            for (let c = 0; c < color.length; c++)
            {
                if (value[v] !== "joker")
                {
                    if ((suit[s] === "diamond" || suit[s] === "heart") && color[c] === "red")
                        {
                            card = {cardSuit: suit[s], value: value [v], color: color[c]}
                            cardSuit.push(card)
                        }
                    if ((suit[s] === "spade" || suit[s] === "clubs") && color[c] === "black")
                        {
                            card = {cardSuit: suit[s], value: value [v], color: color[c]}
                            cardSuit.push(card)
                        }
                }
                if (value[v] === "joker" && s < 1)
                    {
                        card = {cardSuit: value[v], color: color[c]}
                        cardSuit.push(card)
                    }
            }
        }
    }
    console.log(cardSuit)

    cardSuit.filter ((element) =>
        {
            //піковий туз
            if (element.cardSuit === "spade" && element.value === "ace" )
                {
                    console.log(element);
                }
            //всі шістки
            if (element.value === "6" )
                {
                    console.log(element);
                }
            //всі червоні карти
            if (element.color === "red" )
                {
                    console.log(element);
                }
            //всі буби
            if (element.cardSuit === "diamond" )
                {
                    console.log(element);
                }
            //всі трефи від 9 та більше
            if (element.cardSuit === "clubs" && (+element.value === 9 || +element.value === 10 ||
                    element.value === "jack" || element.value === "qeen" || element.value === "king" ||
                    element.value === "ace") )
            //АБО
                //// let filter = deck.filter(value =>(value.cardSuit === 'clubs' && value.value >= 9) ||
                // //     (value.cardSuit === 'clubs' && typeof value.value === 'string'));
                {
                    console.log(element)
                }
        })



// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let mass_of_suit = cardSuit.reduce((accumulator, element) =>
    {
        if (element.cardSuit === "spade")
            {
                accumulator.spads.push(element.value)
            }
        if (element.cardSuit === "diamond")
            {
                accumulator.diamonds.push(element.value)
            }
        if (element.cardSuit === "heart")
            {
                accumulator.hearts.push(element.value)
            }
        if (element.cardSuit === "clubs")
            {
                accumulator.clubs.push(element.value)
            }
        return accumulator
    },
    {spads: [] , diamonds: [] , hearts: [] , clubs: []})

console.log(mass_of_suit);