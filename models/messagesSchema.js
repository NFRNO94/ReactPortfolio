const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    firstName: { type: String, required: true, unique: true },
    lastName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: false, unique: true },
    id: { type: String, required: true, unique: true },
    message: { type: String, required: true, unique: true }
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;