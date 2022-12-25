
let mainDivOfUsers = document.querySelector(".mainDivOfUsers")

fetch('https://jsonplaceholder.typicode.com/users')
    .then(inCommingData => inCommingData.json())
    .then( arrayOfUsers =>
    {
        arrayOfUsers.forEach( user =>
        {
            userDiv = document.createElement("div")
            userDiv.classList.add("userDiv")
            userDiv.innerHTML = `<b>    Name:  </b> ${user.name} 
                                 <p><b> ID:    </b> ${user.id}   </p>`

            buttonDiv = document.createElement("div")
            button = document.createElement("button")
            button.innerText = "Detailed information of user"
            button.setAttribute("onclick",`document.location='userDetails.html?id='+ ${user.id}`)

            buttonDiv.appendChild(button)
            userDiv.appendChild(buttonDiv)
            mainDivOfUsers.appendChild(userDiv)
        })
    })

    // Структура алгоритму :
    // 1. Створюємо блок користувача - userDiv
    // 2. Наповнюємо userDiv інформацією
    // 3. Створюємо блок buttonDiv для кнопки button
    // 4. В кнопці button прописуємо лінк переходу на відповідну сторінку користувача і передаємо його в url
    // 5. Додаємо "дочірні" блоки buttonDiv , userDiv в основний контейнер mainDivOfUsers