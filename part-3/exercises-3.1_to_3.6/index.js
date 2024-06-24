const express = require("express");
const morgan = require("morgan");

const app = express()

morgan.token('content', (req) => {
    const body = req.body;

    if (!body.name) {
        return
    }

    return JSON.stringify({
        name: body.name,
        number: body.number
    })
})



app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time[3] ms  :content'));


let people = [
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


const generateId = () => {
    const newId = parseInt(Math.random(1, 10000) * 10000).toString();
    const isIdUsed = people.findIndex(p => p.id == newId) == -1 ? false : true;
    if (isIdUsed) {
        return generateId();
    }
    return newId;
}


const checkBody = (body) => {
    if (!body.name) {
        return {
            status: 400,
            message: "No Name."
        }
    }

    if (!body.number) {
        return {
            status: 400,
            message: "No Number."
        }
    }

    const isNameUnique = people.find(p => p.name == body.name) == undefined ? true : false;
    if (!isNameUnique) {
        return {
            status: 400,
            message: "Name needs to be unique."
        }
    }

    return {
        status: 200,
        message: "OK."
    }

}


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


app.post('/api/persons', (req, res) => {
    const body = req.body;

    const checker = checkBody(body);

    if (checker.status != 200) {
        res.status(checker.status).json(checker.message);
        return;
    }

    const newPerson = {
        id: generateId(),
        name: body.name,
        number: body.number
    }

    people.push(newPerson)
    res.status(200).json({
        message: "Person Added."
    });

})

app.delete('/api/persons/:id', (req, res) =>  {
    const id = req.params.id;
    people = people.filter(p => p.id != id);
    res.status(200).end()
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
