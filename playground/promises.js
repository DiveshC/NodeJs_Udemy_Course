const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve([7,2,3]);
    }, 2000);
})


doWorkPromise.then((result) => {
    console.log('success', result);
}).catch((error) => {
    console.log('error', error);
})

//
//                              Fullfilled
//                              /
// Promise     --- pending  --->
//                              \
//                              Rejected
//