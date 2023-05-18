const DOG_URL = "https://random.dog/woof.json"

// async function getDog (event) {

// }

// filter out mp4, display only jpg, jpeg, png
// continue sending requests until you get an image
//disable and enable the button when needed
const getDog = async (event) => {
    const response = await fetch(DOG_URL)
    const json = await response.json()
    const dogUrl = json.url

    // DOM manipulation
    const img = document.getElementById('dog-img')
    img.setAttribute('src', dogUrl)
    img.hidden = false
}