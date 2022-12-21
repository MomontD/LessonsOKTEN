
let mainDiv = document.querySelector(".mainDivOfUsers")

fetch('https://jsonplaceholder.typicode.com/users')
    .then(inCommingData => inCommingData.json())
    .then( arrayOfUsers =>
    {
        arrayOfUsers.forEach( user =>
        {
            userDiv = document.createElement("div")
            userDiv.classList.add("userDiv")
            userDiv.innerText = `Name : ${user.name}
                                 ID   : ${user.id}`

            buttonDiv = document.createElement("div")
            button = document.createElement("button")
            button.innerText = "detailed information of user"
            button.setAttribute("onclick",`document.location='userDetails.html?id='+ ${user.id}`)

            buttonDiv.appendChild(button)
            userDiv.appendChild(buttonDiv)
            mainDiv.appendChild(userDiv)
        })
    })