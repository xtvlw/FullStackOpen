import { useState, useEffect } from 'react'
import axios from "axios"

import Form from "./components/Form.jsx"
import FormInput from "./components/FormInput.jsx"
import DisplayContacts from "./components/DisplayContacts.jsx"
import Filter from "./components/Filter.jsx"


const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredContact, setFilteredContact] = useState([])

  useEffect(() => {
    axios
    .get("http://localhost:3001/persons")
    .then(res => {
      setPersons(res.data)
      setFilteredContact(res.data)
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

    setPersons([...persons, newPerson])
    setFilteredContact([...persons, newPerson])
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
