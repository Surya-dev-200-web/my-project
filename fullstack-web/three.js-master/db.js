const mongodb = require('mongodb');
const Mongoclient = mongodb.MongoClient;

let database;

async function getDatabase(){
    const client = await Mongoclient.connect('mongodb://127.0.0.1:27017')
    database = client.db('library')
    if(!database){
        console.log('not connected ')

    }
    return database
}
module.exports={ getDatabase}