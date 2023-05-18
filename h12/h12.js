const IP_URL = "https://api.ipify.org/?format=json"
const GEO_IP_URL = "http://ip-api.com/json/"



async function handleGet() {

    const btn = document.getElementById('btn')
    btn.setAttribute('disabled', true)

    try {
        let response = await fetch(IP_URL)
        let jsonData = await response.json()
        response = await fetch(GEO_IP_URL+jsonData.ip)
        jsonData = await response.json()
        console.log(jsonData)
        document.getElementById('geo').innerText = 
            `Country: ${jsonData.country} City: ${jsonData.city}`
    } catch (error) {
        document.getElementById('geo').innerText = 
            'Error occurred'
    } finally {
        btn.removeAttribute('disabled')
    }

        
    
    
    
    // .then(response => response.json())
    //     .then(jsonData => {
    //         console.log(jsonData)
    //         const ip = jsonData.ip
    //         return fetch(GEO_IP_URL+ip)
    //     })
    //     .then(response => response.json())
    //     .then(geoJson => {
    //         console.log(geoJson)
    //         document.getElementById('geo').innerText = 
    //             `Country: ${geoJson.country} City: ${geoJson.city}`
    //     })
    //     .catch(error => {
    //         document.getElementById('geo').innerText = `Error occured: ${error}`
    //     })
    //     .finally(() => {
    //         btn.removeAttribute('disabled')
    //     })
}

// function handleGet() {

//     const btn = document.getElementById('btn')
//     btn.setAttribute('disabled', true)

//     fetch(IP_URL)
//         .then(response => response.json())
//         .then(jsonData => {
//             console.log(jsonData)
//             const ip = jsonData.ip
//             return fetch(GEO_IP_URL+ip)
//         })
//         .then(response => response.json())
//         .then(geoJson => {
//             console.log(geoJson)
//             document.getElementById('geo').innerText = 
//                 `Country: ${geoJson.country} City: ${geoJson.city}`
//         })
//         .catch(error => {
//             document.getElementById('geo').innerText = `Error occured: ${error}`
//         })
//         .finally(() => {
//             btn.removeAttribute('disabled')
//         })
    
// }