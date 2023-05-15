const URL = "https://api.quotable.io/random"

const handleClick = () => {
    // const promise = fetch(URL)
    // const responsePromise = promise.then((response) => {
    //     console.log('response arrived', response)
    // })
    // console.log(responsePromise)
    // console.log("Request sent")

    fetch(URL)
        .then((response) => {
            console.log('response arrived', response)
            return response.json()
        })
        .then((quote) => {
            console.log(quote)
        })
}