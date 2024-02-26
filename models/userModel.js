const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "le nom est requis"],
    },
    firstname: {
        type: String,
        required: [true, "la descripton est requise"],
    },
    mail: {
        type: String,
        required: [true, "le mail est requis"],
    },
    password: {
        type: String,
        required: [true, "le mot de passe est requis"],
    },
});

const userModel = mongoose.model("Users", userSchema);
