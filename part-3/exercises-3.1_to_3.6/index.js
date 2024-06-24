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

app.get('/api/persons', (req, res) => {
    res.send(people);
})


app.get('/api/persons/:id', (req, res) => {
    const id = req.params.id;
    const personFromId = people.filter(p => p.id == id);
    const doesPersonExist = personFromId.length == 0 ? false : true;

    if (!doesPersonExist) {
        res.status(204).end();
        return;
    }
    res.send(personFromId);
})


app.get('/info', (req, res) => {
    const date = new Date();
    const numberOfPeople = people.length;
    res.send(`<div>
    <p>Phonebook has info for ${numberOfPeople} people</p>
    <p>${date}</p>
    </div>`);
})

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`server running in port: ${PORT}`);
})
