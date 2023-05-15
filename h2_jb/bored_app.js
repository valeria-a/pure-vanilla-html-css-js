
const BORED_API_BASE_URL = 'http://www.boredapi.com/api/activity'

const handleSubmit = (event) => {

    event.preventDefault();

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
        })
        .catch((error) => {
            console.error(error)
        })

}