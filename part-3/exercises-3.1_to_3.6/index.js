const express = require("express");
const app = express()

const people = [
    {
      "id": "1",
      "name": "Arto Hellas",
      "number": "040-123456"
    },
    {
      "id": "2",
      "name": "Ada Lovelace",
      "number": "39-44-5323523"
    },
    {
      "id": "3",
      "name": "Dan Abramov",
      "number": "12-43-234345"
    },
    {
      "id": "4",
      "name": "Mary Poppendieck",
      "number": "39-23-6423122"
    }
]

app.get('/persons', (req, res) => {
    res.send(people);
})

app.get('/info', (req, res) => {
    const date = new Date();
    const numberOfPeople = people.length;
    res.send(`<div>
    <p>Phonebook has info for ${numberOfPeople} people</p>
    <p>${date}</p>
    </div>`)
})

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`server running in port: ${PORT}`);
})
