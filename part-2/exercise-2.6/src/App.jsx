import { useState } from 'react'

import Form from "./components/Form.jsx"
import FormInput from "./components/FormInput.jsx"
import DisplayContacts from "./components/DisplayContacts.jsx"


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState(false)
  const [filteredContact, setFilteredContact] = useState(persons)

  const isPersonAdded = name => {

    const personCheck = persons.find(p => p.name === name)

    if (personCheck != undefined){
      return true
    }
    return false
  }

  const addPerson = event => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    if (isPersonAdded(newPerson.name)) {
      alert(`${newPerson.name} is already added to the phonebook`)
      return
    }

    setPersons([...persons, newPerson])
    setFilteredContact([...persons, newPerson])
  }


  const changeSearch = event => {
    const newSearch = event.target.value

    if (newSearch === '') {
      setFilteredContact(persons)
      return
    }


    setFilteredContact(persons.filter(person => {
        const lowerCasePerson = person.name.toLowerCase()
        const lowerCaseSearch = newSearch.toLowerCase()

        if (lowerCasePerson.includes(lowerCaseSearch)) {
          return person
        }

      }))

  }

  return (
    <div>

      <h2>Phonebook</h2>

      <FormInput text="Filter shown with" updateHandler={changeSearch} />

      <h2>Add a new contact</h2>

      <Form addPerson={addPerson} setNewName={setNewName} setNewNumber={setNewNumber}/>

      <h2>Numbers</h2>

      <DisplayContacts contacts={filteredContact} />

    </div>
  )
}

export default App
