// setTimeout(() =>{
//     console.log('2 seconds');
// }, 2000); 

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             lat: 0,
//             long:0
//         };
//         callback(data);
//     },2000);
// }

// geocode('Toronto', (data) =>{
//     console.log(data);
// });

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (a, b, callback) => {
    setTimeout(()=>{
        callback(a+b);
    },2000);
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})


const doWorkCallback = (callabck) =>{
    setTimeout(() => {
        callback('this is my error', undefined);
    }, 2000)
}

doWorkCallback((error, result)=>{
    if(error){
        return console.log(error);
    }
    console.log(result);

})