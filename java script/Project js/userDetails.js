
// опис змінних та script для відображення детальної інформації про користувача
let informationOfUser = document.querySelector(".informationOfUser") // находимо div class="informOfUser"
let button = document.querySelector(".btn")                // находимо button class="btn"
let titleOfPosts = document.querySelector(".titleOfPosts") // находимо div class="titleOfPosts"

let incomingUrl = new URL(location.href)
let userId = incomingUrl.searchParams.get("id")

fetch('https://jsonplaceholder.typicode.com/users/' + userId)
    .then(inCommingUser => inCommingUser.json())
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
             Company : ${user.company.name},catchPhrase :${user.company.catchPhrase},bs :${user.company.bs}`
        informationOfUser.appendChild(div)
    })

//реалзація кнопки button

button.onclick = function ()

{
    fetch("https://jsonplaceholder.typicode.com/users/" + userId + "/posts")
        .then(inCommingUserPost => inCommingUserPost.json())
        .then( posts =>
        {
            posts.forEach( userPost =>
            {
                divOfTitle = document.createElement("div")
                divOfTitle.classList.add("divOfTitle")
                divOfTitle.innerText = `Title to post ${userPost.id} : 
                                                      ${userPost.title}`

                buttonOfPosts = document.createElement("button")
                buttonOfPosts.innerText = "detailed information of posts"
                buttonOfPosts.setAttribute(
                    "onclick",`document.location="postDetails.html?postId=" + ${userPost.id}`)

                divOBlock = document.createElement("div")
                divOBlock.append(divOfTitle,buttonOfPosts)
                titleOfPosts.append(divOBlock)

            })
        })
}
