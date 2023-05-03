
// localStorage.setItem('name', 'valeria')
// sessionStorage.setItem('day', 'wed')
// console.log(localStorage.getItem('name'))

// const testLocal = () => {
    
// }

const testCookie = () => {
    document.cookie = "name=valeria; expires=2024-01-01T19:00:00; secure"
}

testCookie()

fetch("http://127.0.0.1:5501/lesson33").then(() => {
    console.log('done')
})
.catch(() => {
    console.error('error')
})