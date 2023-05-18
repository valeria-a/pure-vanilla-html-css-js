
const BORED_API_BASE_URL = 'http://www.boredapi.com/api/activity'

const handleSubmit = (event) => {

    event.preventDefault();

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries())

    // disable elements
    const fieldset = document.getElementById('fieldset-id')
    fieldset.setAttribute('disabled', true)

    console.log('form data:', data)

    const searchParams = new URLSearchParams(data);
    const urlToSend = `${BORED_API_BASE_URL}?${searchParams.toString()}`
    fetch(urlToSend)
        .then((response) => {
            if (response.status !== 200) {
                throw `Error status: ${response.status}`
            } else {
                return response.json()
            }
        })
        .then((jsonData) => {
            console.log('Received activity:', jsonData)

            if ('error' in jsonData) {
                throw `Received error: ${jsonData.error}`
            }

            document.getElementById('activity').innerText = jsonData.activity
            fieldset.removeAttribute('disabled')
        })
        .catch((error) => {
            console.error(error)
            document.getElementById('activity').innerText = 'Error'
            fieldset.removeAttribute('disabled')
        })

}