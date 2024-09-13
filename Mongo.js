const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017'; // Your MongoDB URL
const dbName = 'India'; // Your database name
let _db;

function connectToDb() {
  return new Promise((resolve, reject) => {
    const client = new MongoClient(url); // No need for deprecated options
    
    client.connect((err) => {
      if (err) {
        reject(err);
        return;
      }
      _db = client.db(dbName);
      resolve();
    });
  });
}

function getDb() {
  return _db;
}

module.exports = { connectToDb, getDb };
