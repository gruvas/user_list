import adding_data_popup from './adding_data_popup.js'
import adding_data_popup from './generation_dom.js'


// Функция на прием всех записей в бд
export async function request_all_users() {
    let url = 'http://127.0.0.1:3000'
    
    let promise = await fetch(url)

    let data = await promise.json()

    await generation_dom(data)

    adding_data_popup(data)
}




// Функция на прием записей, удовлетворяющих запрос
export async function request_search(value) {
    let url = 'http://127.0.0.1:3000?term='

    let promise = await fetch(url + value)

    let data = await promise.json()

    await generation_dom(data)

    adding_data_popup(data)
}