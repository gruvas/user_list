function generation_dom(data) {
    let users_dom = document.querySelector('.users')

    if(data.length != 0) {
        users_dom.innerHTML = ''
        
        users_dom.classList.add('grid')

        for (let i = 0; i < data.length; i++) {
            users_dom.innerHTML += `
                <article class="user" id="user${i}">
                    <h2 class="name">${data[i].name}</h2>

                    <div class="phone">
                        <img class="icon_phone" src="./img/phone.svg" alt="phone">
                        <p>${data[i].phone}</p>
                    </div>

                    <div class="mail">
                        <img class="icon_mail" src="./img/mail.svg" alt="mail">
                        <p>${data[i].email}</p>
                    </div>
                </article>
            `
        }
    } else {
        users_dom.innerHTML = `
            <p class='not_found'>
                Пользователей с таким именем не найдено
            </p>
        `

        users_dom.classList.remove('grid')
    }
}

export default generation_dom