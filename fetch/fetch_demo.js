const handleResponse = (response) => {
    return response.json()
}

const getQuote = () => {
    url = "https://api.quotableaaaaaaaa.io/random"

    // XHRRequest - old irrelevant

    // fetch

    // async / await

    // fetch(url)
    //     .then((response) => {
    //         return response.json()
    //     })

    // fetch(url).then(handleResponse)

    fetch(url)
        .then((response) => {
            if (response.status === 200) {
                return response.json()
            } else {
                throw 'Received status other than 200'
            }
        })
        .then((jsonResponse) => {
            const elem = document.getElementById('quote')
            elem.innerText = jsonResponse.content
        })
        .catch((error) => {
            console.error(error)
            const elem = document.getElementById('quote')
            elem.innerText = `Error occured: ${error}`
        })


}