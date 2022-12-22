
let incomingUrl = new URL(location.href)
let postId = incomingUrl.searchParams.get("postId")

let connectDiv = document.querySelector(".connectDiv")
let postDiv = document.querySelector(".postDiv")

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

fetch("https://jsonplaceholder.typicode.com/posts/" + postId + "/comments")
    .then(inCommingObject => inCommingObject.json())
    .then( comentsOfPost =>
    {
        comentsOfPost.forEach ( comments =>
        {
            divOfUserName = document.createElement("div")
            divOfUserName.innerText= `User name : ${comments.name}`
            divOfUserName.classList.add('useBlock');

            divOfComents = document.createElement("div")
            divOfComents.innerText = `Comment :
                                      ${comments.body}`

            divBlock = document.createElement("div")
            divBlock.append(divOfUserName, divOfComents)

            connectDiv.append(divBlock)
        })
    })