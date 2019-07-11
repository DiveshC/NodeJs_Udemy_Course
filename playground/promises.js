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

const add = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(a+b);
        },2000);
    });
}
//Nested promises
// add(1,2).then((sum) =>{
//     console.log(sum);

//     add(sum, 5)/then((sum2)=>{
//         console.log(sum2);
//     }).catch((err)=>{
//         console.log(err);
//     })
// }).catch((err)=>{
//     console.log(err);
// })

//promise chaining :
add(1,1).then((sum)=>{
    console.log(sum);

    return add(sum, 4);
}).then((sum2)=>{
    console.log(sum2);
}).catch((err)=>{
    console.log(err);
})


