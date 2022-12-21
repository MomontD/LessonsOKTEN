
let incomingUrl = new URL(location.href)
let postId = incomingUrl.searchParams.get("postId")

let postDiv = document.querySelector(".postDiv")
let commentsDiv = document.querySelector(".commentsDiv")



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
            divOfComents = document.createElement("div")
            divOfComents.innerText= `User name : ${comments.name}
                                     Comment : 
                                     ${comments.body}`
            commentsDiv.append(divOfComents)
        })
    })