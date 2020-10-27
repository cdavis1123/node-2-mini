const express = require ('express');
const app = express();
const bc = require('./controllers/books_controller');
app.use(express.json ());

//endpoints
app.get('/api/books', bc.read);

app.post('/api/books',bc.create);

app.put('/api/books/:id', bc.update);

app.delete('/api/books/:id', bc.delete);
























const port = 4000;
app.listen(port, () => {
console.log(`server running on ${port}`)
})