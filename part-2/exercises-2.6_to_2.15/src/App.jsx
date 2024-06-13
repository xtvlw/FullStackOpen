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

  const updatePerson = person => {
    server.update(person)
        .then(data => {
          setPersons(persons.map(p => p.id == person.id ? person : p))
          setFilteredContact(persons.map(p => p.id == person.id ? person : p))
        })
  }

  const addPerson = event => {
    event.preventDefault()

    const lastId = persons[persons.length - 1].id
    const newId = Number(lastId) + 1

    const newPerson = {
      name: newName,
      number: newNumber,
      id: newId.toString()
    }

    if (isPersonAdded(newPerson.name)) {

      const userWantsToUpdate = confirm(`${newPerson.name} is already added to the phonebook, do you want to update the number?`)

      if (userWantsToUpdate){
        const personToUpdate = persons.filter(p => p.name === newPerson.name)[0]

        const updatedPerson = {
          name: personToUpdate.name,
          number: newPerson.number,
          id: personToUpdate.id.toString()
        }

        updatePerson(updatedPerson)
      }

      return
    }

    server.add(newPerson).then(res => {
      setPersons([...persons, res])
      setFilteredContact([...persons, res])
    })
  }

  const deletePerson = event => {
    const id = event.target.id
    server.deletePerson(id)
        .then(status => {
          setPersons(persons.filter(person => person.id != id))
          setFilteredContact(persons.filter(person => person.id != id))
        })
  }



  return (
    <div>

      <h2>Phonebook</h2>

      <Filter persons={persons} setFilteredContact={setFilteredContact} />

      <h2>Add a new contact</h2>

      <Form addPerson={addPerson} setNewName={setNewName} setNewNumber={setNewNumber}/>

      <h2>Numbers</h2>

      <DisplayContacts contacts={filteredContact} deleteHandler={deletePerson} />

    </div>
  )
}

export default App
