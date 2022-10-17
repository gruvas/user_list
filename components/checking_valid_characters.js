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

export default checking_valid_characters