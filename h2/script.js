const submitHandler = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const params = Object.fromEntries(formData.entries())
    const searchParams = new URLSearchParams(params);


    const fullUrl = `http://www.boredapi.com/api/activity/?${searchParams.toString()}`
    console.log(fullUrl)

    // display spinner
    const spinner = document.getElementsByClassName('spinner-border')[0]
    spinner.removeAttribute('hidden')
    const fieldset = document.getElementsByTagName('fieldset')[0]
    fieldset.setAttribute('disabled', true)

    // fetch(fullUrl)
    //     .then((response) => response.json() )
    //     .then((json) => {
    //         console.log(json)
    //         spinner.setAttribute('hidden', true)
    //     })
    //     .catch((error) => {
    //         //todo - display error to a user
    //         console.error(error)
    //     })

    try {
        const response = await fetch(fullUrl)
        const data = await response.json()
    } catch (error) {
        
    }
    spinner.setAttribute('hidden', true)
    console.log(data)
    
    document.getElementById('temp-activity-id').innerText = data.activity
    fieldset.removeAttribute('disabled')
    
}