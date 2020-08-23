const express = require('express');
const path = require('path');
const config = require('config');
// const mongoose = require('mongoose');

const app = express();

const testData = [
    {
        id: 1,
        body: 'ssdfsdf',
    },
    {
        id: 2,
        body: '223-sd3-sd',
    },
];

/*
app.use('/api/auth', require('./routes/auth.routs'));

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
 */

app.get('/data', (req, res) => {
    res.send(JSON.stringify(testData));
})

// const PORT = config.get('port') || 5000;  initial version
// const PORT = config.get('port') || 8089;
const PORT = 8089;

async function start() {
    try {
        // await mongoose.connect(config.get('mongoUri'), {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     useCreateIndex: true,
        // });

        app.listen(PORT, () => console.log(`App has been started on port ${PORT}:::`));
    } catch (e){
        console.log(`Eror:: ${e}`);
        process.exit(1);
    }
}

start();