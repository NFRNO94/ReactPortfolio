const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI
    || 'mongodb://localhost/MovieDB',
);

const messageSeed = [
    {
        firstName: 'Test',
        lastName: 'Tester',
        email: 'test@test.com',
        phoneNumber: "555-555-5555",
        id: "1",
        message: "Sample message typed in here from respondee"
    },
];

db.Message
  .remove({})
  .then(() => db.Message.collection.insertMany(messageSeed))
  .then((data) => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });