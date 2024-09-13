// const express = require("express");
// const path = require("path");
// const { connectToDb, getDb } = require("./Mongo");
// const { log } = require("console");

// const serv = express();

// // Serve static files from the 'public' directory
// serv.use(express.static(path.join(__dirname, "public")));

// // Serve JSON requests
// serv.use(express.json());

// // Serve scripts from the 'scripts' directory globally
// serv.use("/scripts", express.static(path.join(__dirname, "scripts")));

// // Serve index.html for the root route
// serv.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

// // Database connection
// let db;
// connectToDb()
//   .then(() => {
//     db = getDb(); // Get the database object after successful connection
//     serv.listen(9000, () => {
//       console.log("Connected to D.B");
//       console.log("Server is running on port 9000");
//     });
//   })
//   .catch((err) => {
//     console.error("Failed to connect to the database", err);
//   });

// // Route to fetch documents from the "Goa" collection
// serv.get("/Goa", async (req, res) => {
//   if (!db) {
//     return res.status(500).json({ error: "Database not connected" });
//   }

//   try {
//     const beaches = [];
//     const cursor = db.collection("Goa").find().sort(); // Add sorting parameters if necessary

//     // Iterate through the cursor and push each document to the array
//     await cursor.forEach((beach) => beaches.push(beach));

//     res.status(200).json(beaches);
//   } catch (err) {
//     console.error("Failed to fetch documents", err);
//     res.status(500).json({ error: "Could not fetch the documents" });
//   }
// });

// serv.get("/beaches/:state", async (req, res) => {
//     const state = req.params.state; // Get the state from the URL
  
//     if (!db) {
//       return res.status(500).json({ error: "Database not connected" });
//     }
  
//     try {
//       const beaches = [];
//       const cursor = db.collection(state).find().sort(); // Use the state as the collection name
  
//       await cursor.forEach((beach) => beaches.push(beach));
  
//       res.status(200).json(beaches);
//     } catch (err) {
//       console.error(`Failed to fetch documents from ${state} collection`, err);
//       res.status(500).json({ error: `Could not fetch the documents from ${state}` });
//     }
//   });
  
const express = require("express");
const path = require("path");
const { connectToDb, getDb } = require("./Mongo");

const serv = express();

// Serve static files from the 'public' directory
serv.use(express.static(path.join(__dirname, "public")));

// Serve JSON requests
serv.use(express.json());

// Serve scripts from the 'scripts' directory globally
serv.use("/scripts", express.static(path.join(__dirname, "scripts")));

// Serve index.html for the root route
serv.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Database connection and server startup
let db;

async function startServer() {
  try {
    await connectToDb();
    db = getDb(); // Get the database object after successful connection
    
    serv.get("/", async (req, res) => {
      if (!db) {
        return res.status(500).json({ error: "Database not connected" });
      }

      try {
        const patients = [];
        const cursor = db.collection("").find(); // Add .sort() if necessary

        await cursor.forEach((patient) => patients.push(patient));

        res.status(200).json(patients);
      } catch (err) {
        console.error("Failed to fetch documents", err);
        res.status(500).json({ error: "Could not fetch the documents" });
      }
    });

    // serv.post("/patients", (req, res) => {
    //   const patient = req.body;
    //   console.log("HTTP Request to post data");
    //   console.log(req.body);

    //   if (!db) {
    //     return res.status(500).json({ error: "Database not connected" });
    //   }

    //   db.collection("patient")
    //     .insertOne(patient)
    //     .then((result) => {
    //       res.status(201).json(result);
    //     })
    //     .catch((err) => {
    //       console.error("Failed to insert document", err);
    //       res.status(501).json({ error: "Couldn't create a new document" });
    //     });
    // });

    serv.listen(9000, () => {
      console.log("Server is running on port 9000");
    });
  } catch (err) {
    console.error("Failed to connect to the database", err);
  }
}

startServer();
