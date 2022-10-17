// Проверка на то, кликнули вне зоны popup или нет
function check_click_outside() {
    let popup = document.querySelector('.popup_wrapper')

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

export default check_click_outside