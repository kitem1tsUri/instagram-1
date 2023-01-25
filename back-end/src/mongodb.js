const mongoose = require("mongoose");

const uri = "mongodb+srv://kitetsu:010707050711@khuslens.jegg0by.mongodb.net/?retryWrites=true&w=majority"
//          End mongodb Atlas iin userName password baina

const connect = async () => {
    try {
        await mongoose.connect(uri, (err) => {
            console.log(err)
        });

        console.log('Database connected');
    } catch (err) {
        console.log(err);
    }
}

module.exports = connect;