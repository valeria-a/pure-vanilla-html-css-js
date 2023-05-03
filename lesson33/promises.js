// Essentially, a promise is a returned object to which you attach callbacks, 
// instead of passing callbacks into a function.

// setTimeout(()=>{}, 2000)


console.log('Started')



// setTimeout(() => {console.log('4 secs passed')}, 4000)
// console.log('hi')

// Pretend we want to implement the following:
// set timer for 5 seconds -> log -> 3 seconds -> log -> 2 seconds -> log
// setTimeout(() => {
//     console.log(new Date(), '5 seconds passed')
//     setTimeout(() => {
//         console.log(new Date(), 'another 3 seconds passed')
//         setTimeout(() => {
//             console.log(new Date(), 'another 2 seconds passed')
//         }, 2000)
//     }, 3000)
// }, 5000)

// we would like to have something like:
// setTimeout(5000)
//     .then(() => {
//         console.log(new Date(), '5 seconds passed')
//         setTimeout(3000)
//     })
//     .then(() => {
//         console.log(new Date(), 'another 3 seconds passed')
//         setTimeout(2000)
//     })
//     .then(() => {
//         console.log(new Date(), 'another 2 seconds passed')
//     })


// Implementing our own function that returns promise
// const sleep = (seconds) => {}
// const promise = sleep(3)
// promise.then(() => console.log('time passed'))

// const sleep = (s) => new Promise(resolve => setTimeout(resolve, s*1000))
// const sleep = (s) => {
//     return new Promise((resolveCallback) => {
//         setTimeout(resolveCallback, s*1000)
//     })
// }
// const promise = sleep(5)
// promise.then(() => {console.log('5 secs passed')})

// sleep(5)
//     .then(() => {
//         console.log('5 secs')
//         return sleep(3)
//     })
//     .then(() => {
//         console.log('3 secs')
//     })
//     .catch((error) => {
//         console.error(error)
//     })




// sleep(5)
// .then(() => {
//     console.log('5 secs')
// })
// sleep(3)




// console.log('going to sleep')

// sleep(5)
//     .then(() =>{
//         console.log(new Date(), '5 seconds passed')
//         return sleep(3) // note: return is important!!!
//     })
//     .then(() => {
//         console.log(new Date(), 'another 3 seconds passed')
//         return sleep(2)
//     })
//     .then(() => {
//         console.log(new Date(), 'another 2 seconds passed')
//     })


// Unchained promises are happenning in parallel
// const sleepPromise = sleep(5)

// sleepPromise.then(
//     () => {
//         console.log('finished sleeping 5 seconds 1')
//     }
// )
// sleepPromise.then(
//     () => {
//         console.log('finished sleeping 5 seconds 2')
//     }
// )

// async/await
// sleep(5)
// console.log('5 secs')
// return sleep(3)
// console.log('3 secs')

const sleep = async (s) => new Promise(resolve => setTimeout(resolve, s*1000))

const foo = async () => {
    await sleep(5)
    console.log('5 secs')
}

foo()
console.log('hi')


// const foo = async () => {
//     await sleep(5)
//     console.log(new Date(), '5 seconds passed')
//     await sleep(3)
//     console.log(new Date(), 'another 3 seconds passed')
//     await sleep(2)
//     console.log(new Date(), 'another 2 seconds passed')
// }

// foo()