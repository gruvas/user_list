
let users_dom = document.querySelector('.users')
let input = document.querySelector('.input_search_name')

let popup = document.querySelector('.popup_wrapper')

let user_name = document.querySelector('.popup_form_name')
let phone = document.querySelector('.popup_field_phone')
let mail = document.querySelector('.popup_field_mail')
let date = document.querySelector('.popup_field_date')
let position = document.querySelector('.popup_field_position')
let department = document.querySelector('.popup_field_department')

let field_address = document.querySelector('.popup_additional_information_text')


// Когда мы выбираем пользователя, то в подвале всплывающего окна идет данный текст и необходимо
// вставить в конце адрес пользователя.
let field_address_sample = `Разработка использует текст Lorem ipsum в качестве заполнителя макета страницы.
Так как дополнительной информации в JSON нет, а адрес нигде не используется закинул
его сюда`

let url = 'http://127.0.0.1:3000'
let url_search = 'http://127.0.0.1:3000?term='

// Функция на прием всех записей в бд
async function request() {
    let promise = await fetch(url)

    let data = await promise.json()

    await generation_dom(data)

    add_click(data)
}

request()

// Функция на прием записей, удовлетворяющих запрос
async function search(value) {
    let promise = await fetch(url_search + value)

    let data = await promise.json()

    await generation_dom(data)

    add_click(data)
}

// Проверка на запрещенные символы 
// (если попытаться ввести данные символы в input, 
// с последующей отправкой на сервер, то сервер падает)
function checking_valid_characters(value) {
    let str = value.split('')
    
    str = str.filter((element) => {
        if(element != '/' && element != '\\'
        && element != '(' && element != ')'
        && element != '*' && element != '?'
        && element != '[' && element != ']'
        && element != '#') {
            return true
        }

        return false
    })

    return str.join('')
}

input.oninput = async function() {
    input.value = await checking_valid_characters(input.value)

    search(input.value)
}


function generation_dom(data) {
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

// Замена данных при клике на пользователя
function add_click(data) {
    for (let i = 0; i < data.length; i++) {
        document.querySelector(`#user${i}`).addEventListener('click', () => {            
            popup.classList.remove('hide')
            user_name.textContent = data[i].name
            date.textContent = data[i].hire_date
            position.textContent = data[i].position_name
            department.textContent = data[i].department
            field_address.textContent = field_address_sample + ' ' + data[i].address

            phone.innerHTML = ''
            phone.innerHTML = `<a href="tel:${data[i].phone}" class="popup_form_fields_right popup_field_phone">${data[i].phone}</a>`
            
            mail.innerHTML = ''
            mail.innerHTML = `<a href="mailto:${data[i].email}" class="popup_form_fields_right popup_field_mail">${data[i].email}</a>`
            
            check_click_outside()
        })
    }
}


// Проверка на то, кликнули вне зоны popup или нет
function check_click_outside() {
    document.querySelector('.popup_wrapper').addEventListener('click', (e) =>{                
        if(e.target.classList != 'popup_form' 
        && e.target.classList != 'popup_form_content'
        && e.target.classList != 'popup_form_name' 
        && e.target.classList != 'popup_form_fields'
        && e.target.classList != 'popup_form_fields_left' 
        && e.target.classList[0] != 'popup_form_fields_right'
        && e.target.classList != 'popup_additional_information' 
        && e.target.classList != 'popup_additional_information_text'
        && e.target.classList != 'popup_additional_information_title') {
            popup.classList.add('hide')
        }
    })
}

