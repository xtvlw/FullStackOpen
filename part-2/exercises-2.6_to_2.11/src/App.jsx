import { useState, useEffect } from 'react'


import Form from "./components/Form.jsx"
import FormInput from "./components/FormInput.jsx"
import DisplayContacts from "./components/DisplayContacts.jsx"
import Filter from "./components/Filter.jsx"

import server from  "./services/phonebook"

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredContact, setFilteredContact] = useState([])

  useEffect(() => {
    server.getAll()
    .then(res => {
      setPersons(res)
      setFilteredContact(res)
    })
  }, [])


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

    server.add(newPerson).then(res => {
      setPersons([...persons, res])
      setFilteredContact([...persons, res])
    })
  }



  return (
    <div>

      <h2>Phonebook</h2>

      <Filter persons={persons} setFilteredContact={setFilteredContact} />

      <h2>Add a new contact</h2>

      <Form addPerson={addPerson} setNewName={setNewName} setNewNumber={setNewNumber}/>

      <h2>Numbers</h2>

      <DisplayContacts contacts={filteredContact} />

    </div>
  )
}

export default App
