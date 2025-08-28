const express = require('express');   
const db = require('./db');           
const { getItems, addItem, updateItem, deleteItem } = require('./routes'); // API роуты

const app = express();                

app.use(express.json());
app.use(express.static(__dirname + '/static'));

// API роуты
app.get('/items', getItems);
app.post('/items', addItem);
app.put('/items/:id', updateItem);
app.delete('/items/:id', deleteItem);

// Healthcheck endpoint для Docker
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

db.init().then(() => {
    app.listen(3000, () => console.log('Listening on port 3000'));
}).catch((err) => {
    console.error(err);
    process.exit(1);
});

// Graceful shutdown
const gracefulShutdown = () => {
    db.teardown()
        .catch(() => {})
        .then(() => process.exit());
};

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
process.on('SIGUSR2', gracefulShutdown); 
