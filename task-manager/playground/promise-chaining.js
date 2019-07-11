require('../src/db/mongoose');

const User = require('../src/models/user');

//"5d07b6076797b44810faf8dc"

//chaining example

// User.findByIdAndUpdate('5d07b6076797b44810faf8dc', {age: 1}).then((user)=>{
//     console.log(user);
//     return User.countDocuments({age:1})
// }).then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
// })

//async await example


const updateAgeAndCount = async (id, age) =>{
    const user = await User.findByIdAndUpdate(id, {age});
    const count = await User.countDocuments({age});
    return count;
}

updateAgeAndCount('5d07b6076797b44810faf8dc', 2).then((result)=> {
    console.log(result);
}).catch((err)=>{
    console.log(err);
})


