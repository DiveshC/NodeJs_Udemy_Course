//CRUD  --> Create read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');



const connectionURL = 'mongodb://127.0.0.1:27017';
const database = 'task-manager';

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if(error){
        return console.log('Unable to connect to database');
    }

    const db = client.db(database);
    //create (insertOne insertMany)
    //read (findOne find)

    // db.collection('users').findOne({name:'Divesh'}, (error, user)=>{
    //     if(error){
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(user);
    // })


    // db.collection('users').find({age:20}).count((error, count) => {
    //     console.log(count);
    // })

    // db.collection('tasks').findOne({_id:new ObjectID("5cf5c10c7f7e2500e46bdf7a")}, (error, task) =>{
    //     if(error){
    //         return console.log('Error finding task');
    //     }
    //     console.log(task);
    // })

    // db.collection('tasks').find({completed:false}).toArray((error, count) =>{
    //     console.log(count);
    // })

    //Update
    // db.collection('users').updateOne({
    //     _id:new ObjectID("5cf54528175b2a2f180ec5fc")
    // },{
    //     $set:{
    //         name:'Mike'
    //     }    
    // });


    // updatePromise.then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // });

    // db.collection('tasks').updateMany({completed:false}, {
    //     $set:{
    //         completed: true
    //     }
    // }).then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // });

    //delete 

    db.collection('users').deleteOne({name:'Divesh'})

});