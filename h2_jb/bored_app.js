
const BORED_API_BASE_URL = 'http://www.boredapi.com/api/activityaaaaaaa'

const handleSubmit = (event) => {

    event.preventDefault();

    // disable elements
    const btn = document.getElementById('submit-btn-id')
    btn.setAttribute('disabled', true)

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries())

    console.log(data)

    fetch(`${BORED_API_BASE_URL}?type=${data.activity_type}`)
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
            btn.removeAttribute('disabled')
        })
        .catch((error) => {
            console.error(error)
            document.getElementById('activity').innerText = 'Error'
            btn.removeAttribute('disabled')
        })

}