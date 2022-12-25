
// Опис змінних

let informationOfUser = document.querySelector(".informationOfUser") // находимо div class="informOfUser"
let button = document.querySelector(".btn")                          // находимо button class="btn"
let titleOfPosts = document.querySelector(".titleOfPosts")           // находимо div class="titleOfPosts"

let incomingUrl = new URL(location.href)
let userId = incomingUrl.searchParams.get("id")

fetch('https://jsonplaceholder.typicode.com/users/' + userId)   //Находимо інформацію про юзера
    .then(inCommingUser => inCommingUser.json())                     // та додаємо її в контейнер informationOfUser
    .then( user =>
    {
        div = document.createElement("div")
        div.classList.add('detailInformationOfUser')
        div.innerText =
            `ID : ${user.id}
             Name : ${user.name}
             User Name : ${user.username}
             Email : ${user.email}
             Address : ${user.address.zipcode},${user.address.street} str , ${user.address.suite}, ${user.address.city}
             Geo : lat ${user.address.geo.lat} , lng ${user.address.geo.lng}
             Phone : ${user.phone}
             Website : ${user.website}
             Company : ${user.company.name},
             catchPhrase :${user.company.catchPhrase},
             bs :${user.company.bs}`
        informationOfUser.appendChild(div)
    })

button.onclick = function ()     // реалізація кнопки "Detailed information of post" та вивід інформації
    {
        fetch("https://jsonplaceholder.typicode.com/users/" + userId + "/posts")
            .then(inCommingUserPost => inCommingUserPost.json())
            .then( posts =>
            {
                titleOfPosts.innerHTML = "" // блокуємо дублюючий вивід інформації при повторному -
                posts.forEach( userPost =>  // нажатті кнопки "Detailed information of post"
                {
                    divOfTitle = document.createElement("div")  // створюємо блок Title та наповнюємо його інформ.
                    divOfTitle.classList.add("divOfTitle")
                    divOfTitle.innerHTML = `Title to post ${userPost.id} : 
                                            <p>           ${userPost.title} </p>`

                    buttonOfPosts = document.createElement("button")  // реалізація кнопки-переходу на сторінку
                    buttonOfPosts.innerText = `Detailed information of post`  // з детальною інформацією про пост
                    buttonOfPosts.setAttribute(
                        "onclick",`document.location="postDetails.html?postId=" + ${userPost.id}`)

                    divBlock = document.createElement("div") // створюємо блок div для Title та buttonOfPosts
                    divBlock.append(divOfTitle,buttonOfPosts) // додаємо  в блок кнопку buttonOfPosts та Title
                    titleOfPosts.append(divBlock)             // додаємо блок div в контейнер постів - titleOfPosts
                })
            })
    }

    // Структура алгоритму :
    // 1. Знаходимо блоки з розмітки HTML :
    //          informationOfUser - відображення інформації про користувача
    //          button            - кнопка , вивід інформації про пости користувача
    //          titleOfPosts      - контейнер з Title користувача
    //
    // 2. Зчитуємо поточну url , "забираємо"  id та виводимо інформацію про користувача
    //
    // 3. Кнопка button - при натисканні відображаються пости користувача
    //
    // 4. Відображення постів користувача.