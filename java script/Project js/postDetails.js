
let incomingUrl = new URL(location.href)             // читаємо url
let postId = incomingUrl.searchParams.get("postId") // та знаходимо необхідний id

let postDiv = document.querySelector(".postDiv")         // знаходимо блок для наповнення інформації про пост
let connectDiv = document.querySelector(".connectDiv")  //  знаходимо блок для наповнення інформації про коментар

// виводимо детальну інформацію про пост користувача
fetch("https://jsonplaceholder.typicode.com/posts/" + postId)
    .then(inCommingObject => inCommingObject.json())
    .then( postOfUser =>
    {
        for (const element in postOfUser)
        {
            divElementPost = document.createElement("div")
            divElementPost.innerText = `${element} : ${postOfUser[element]}`
            postDiv.append(divElementPost)
        }
    })

// виводимо інформацію про коментарі до посту
fetch("https://jsonplaceholder.typicode.com/posts/" + postId + "/comments")
    .then(inCommingObject => inCommingObject.json())
    .then( comentsOfPost =>
    {
        comentsOfPost.forEach ( comments =>
        {
            divOfUserName = document.createElement("div")  // створємо окремий блок для імя коментатора
            divOfUserName.innerHTML= ` User name :  
                                      <p> ${comments.name} </p>`
            divOfUserName.classList.add('userBlock');

            divOfComents = document.createElement("div")   //  створємо окремий блок для коментаря
            divOfComents.innerHTML = `Comment : 
                                       <p> ${comments.body} </p>`

            divBlock = document.createElement("div")       // створюємо divBlock в який додамо блок з імям та коментарем
            divBlock.append(divOfUserName, divOfComents)

            connectDiv.append(divBlock)                            // додаємо кожний divBlock в "зєднуючий" контейнер
                                                                   // connectDiv
        })
    })

// Структура алгоритму :
// 1. Читаємо url та знаходимо необхідний id користувача
// 2. Виводимо детальну інформацію про пост користувача
// 3. Виводимо інформацію про коментарі до посту