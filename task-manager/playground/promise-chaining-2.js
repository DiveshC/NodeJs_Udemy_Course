require('../src/db/mongoose');

const Task = require('../src/models/task');

//promise chaining example

// Task.findByIdAndDelete('5cf818d8f125294be081e61e').then((task)=>{
//     console.log(task);
//     return Task.countDocuments({completed: false})
// }).then((count)=>{
//     console.log(count);
// }).catch((err)=>{
//     console.log(err);
// });

//async await example 

const deleteTaskAndCount = async (id, completed) =>{
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed  });
    return count;
}

deleteTaskAndCount('5cf818d8f125294be081e61e', false).then((count)=>{
    console.log(count);
}).catch((err) =>{
    console.log(err);
});

