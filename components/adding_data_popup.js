import check_click_outside from './check_click_outside.js'


// Замена данных в popup при клике на пользователя
// и отслеживание клика вне popup
function adding_data_popup(data) {
    let popup = document.querySelector('.popup_wrapper')

    let user_name = document.querySelector('.popup_form_name')
    let phone = document.querySelector('.popup_field_phone')
    let mail = document.querySelector('.popup_field_mail')
    let date = document.querySelector('.popup_field_date')
    let position = document.querySelector('.popup_field_position')
    let department = document.querySelector('.popup_field_department')
    
    let field_address = document.querySelector('.popup_additional_information_text')

    // Когда мы выбираем пользователя, то в подвале 
    // всплывающего окна идет данный текст и необходимо
    // вставить в конце адрес пользователя.
    let field_address_sample = `Разработка использует текст Lorem ipsum в качестве заполнителя макета страницы.
    Так как дополнительной информации в JSON нет, а адрес нигде не используется закинул
    его сюда`
    

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

export default adding_data_popup