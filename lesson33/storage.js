const testLocal = () => {
    
}

const testCookie = () => {
    document.cookie = "name=valeria"
}

testCookie()

fetch("http://127.0.0.1:5501/lesson33").then(() => {
    console.log('done')
})
.catch(() => {
    console.error('error')
})