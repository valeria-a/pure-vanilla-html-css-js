const COLORS = ['blue', 'green', 'red', 'yellow', 'purple']
let idx = 0
let intervalId = null

const handleClick = (event) => {

    btn = event.target

    if (btn.innerText === 'Start') {
        btn.innerText = 'Stop'

        intervalId = setInterval(() => {
            const box = document.getElementsByClassName('box')[0]
            box.style = `background-color: ${COLORS[idx]}`

            idx++

            if (idx > COLORS.length - 1) {
                idx = 0
            }            
        }, 1000)
    } else {
        btn.innerText = 'Start'
        clearInterval(intervalId)
    }

}