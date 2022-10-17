import checking_valid_characters from './components/checking_valid_characters.js'
import { request_all_users, request_search } from './components/requests.js'

let input = document.querySelector('.input_search_name')

request_all_users()

input.oninput = async function() {
    input.value = await checking_valid_characters(input.value)

    request_search(input.value)
}
