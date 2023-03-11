const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { async } = require("@firebase/util");

const stripe = require("stripe")(
  "sk_test_51MkXtZHqezJmjKmIXume0czbUQdMnzGan16R4YOilFdrPmTQbFT52EfkKiydHZHSJonNzdkznBa7SJE0yXacQCze00MiXiqkqh"
);

// http://127.0.0.1:5001/clone-51976/us-central1/api
const app = express();
app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (request, response) =>
  response.status(200).send("Hello from Cloud"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const api = functions.https.onRequest(app);

exports.api = api

