import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2Xad9CdNsK4bKq2cMQML5csQYyJCq43o",
  authDomain: "clone-4f69b.firebaseapp.com",
  projectId: "clone-4f69b",
  storageBucket: "clone-4f69b.appspot.com",
  messagingSenderId: "1047535566537",
  appId: "1:1047535566537:web:5b87003ec88e2465ef1718",
  measurementId: "G-VYC7J6GXJJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };


// const functions = require("firebase-functions");
// const express = require('express');
// const cors = require('cors');
// const stripe = require('stripe')('sk_test_51LciqcSA0YvvyHmkzvrXOWagM9tw685nNrXDeBbxoPUnX1xD6J4NVJNw8tqg31AcoT9y3H5flHDfJgF2tLfjq5mu00NJRLyfeo')

// //API

// //App Config
// const app = express();

// // - Middleware
// app.use(cors({ origin: true }));
// app.use(express.json());

// // - API routes
// app.get('/', (request, response) => response.status(200).send('hello world'));

// app.post('/payments/create', async (request, response) => {
//     const total = request.query.total;

//     console.log('Payment Request Recceived for the amount: ', total)

//     const paymentIntent = await stripe.paymentIntents.create({
//         amount: total, //subunits of the currency
//         currency: "usd",
//     });
//     // Ok - Created
//     response.status(201).send({
//         clientSecret: paymentIntent.client_secret,
//     })
// })

// //Listen command
// exports.api = functions.https.onRequest(app)
