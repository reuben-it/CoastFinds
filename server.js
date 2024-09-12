const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();

// MongoDB connection URL
const url = 'mongodb://localhost:27017';
const dbName = 'India';

// Array of collection names
const collectionNames = ['Andaman_Nicobar_Islands', 'Andhra_Pradesh','Goa','Gujarat','Karnataka','Kerala','Lakshadweep','Maharashtra','Odisha','Puducherry','Tamil_Nadu', 'West_Bengal'];

// Connect to MongoDB
MongoClient.connect(url, function(err, client) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MongoDB');

    // Get the database
    const db = client.db(dbName);

    // Loop through each collection
    collectionNames.forEach(function(collectionName) {
      console.log(`Fetching data from ${collectionName} collection`);

      // Get the collection
      const collection = db.collection(collectionName);

      // Find all documents in the collection
      collection.find().toArray(function(err, documents) {
        if (err) {
          console.log(err);
        } else {
          console.log(documents);

          // Display the data in an HTML table
          app.get(`/${collectionName}`, function(req, res) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(`<h1>Documents in ${collectionName} collection</h1>`);
            res.write('<table border="1">');
            res.write('<tr><th>_id</th><th>name</th><th>email</th></tr>'); // adjust column headers as needed

            documents.forEach(function(document) {
              res.write('<tr>');
              res.write('<td>' + document._id + '</td>');
              res.write('<td>' + document.Beach + '</td>'); // adjust field names as needed
              res.write('<td>' + document.Latitude + '</td>');
              res.write('<td>' + document.Longitude + '</td>');
              res.write('<td>' + document.City + '</td>');
              res.write('</tr>');
            });

            res.write('</table>');
            res.end();
          });
        }
      });
    });

    // Start the server
    app.listen(3000, function() {
      console.log('Server started on port 3000');
    });
  }
});