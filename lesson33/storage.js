
// localStorage.setItem('name', 'valeria')
// sessionStorage.setItem('day', 'wed')
// console.log(localStorage.getItem('name'))

// const testLocal = () => {
    
// }

// const testCookie = () => {
//     document.cookie = `date1=${new Date()}; Expires=Fri, 31 Dec 9999 23:59:59 GMT; Secure;`
// }

const allCookies = document.cookie
console.log(allCookies)
// testCookie()

fetch("http://127.0.0.1:5501/lesson33").then(() => {
    console.log('done')
})
.catch(() => {
    console.error('error')
})