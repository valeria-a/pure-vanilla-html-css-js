
function doStuff() {
    let mypromise = new Promise((myresolve, myreject) => {
        // Perform some work (possibly asynchronous)
        // ...
        console.log('starting async job...')
        let res = 0;
    
        if (res == 0) {
            console.log('hi')
            myresolve(value);
        } else {
            console.log('bye')
            // Something went wrong because of "reason"
            // The reason is traditionally an Error object, although
            // this is not required or enforced.
            myreject('oops');
    
            // Throwing an error also rejects the promise.
            // throw "problem";
        }
    });

    mypromise.then(
        () => console.log('DONE')
    ).catch(
        () => console.error('NOT DONE')
    )
}




fetch("dhfgjdfhg").then().catch()





// async function name(params) {
//     response = await fetch("dfgdfgdfg")
//     console.log("request in flight")
//     if response['data'] {
//         r2 = await fetch(response['data'])
//     }

// }





// async function name(params) {
//     response = await fetch("dfgdfgdfg")
//     console.log("request in flight")

//     r2 = await fetch("new")
//     return response, r2
// }

// response, r2 = name()
// foo(reponse)