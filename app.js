const express = require('express');
const path = require('path');
const config = require('config');
// const mongoose = require('mongoose');

const app = express();

app.use('/api/auth', require('./routes/auth.routs'));

if (process.env.NODE_ENV === 'production') {
    app.use('/', app.static(path.join(__dirname, 'client', 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = config.get('port') || 5000;

async function start() {
    try {
        // await mongoose.connect(config.get('mongoUri'), {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     useCreateIndex: true,
        // });

        app.listen(5000, () => console.log(`App has been started on port ${PORT}.`));
    } catch (e){
        console.log(`Eror:: ${e}`);
        process.exit(1);
    }
}