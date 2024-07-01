import { useState, useEffect } from 'react'


import Form from "./components/Form.jsx"
import FormInput from "./components/FormInput.jsx"
import DisplayContacts from "./components/DisplayContacts.jsx"
import Filter from "./components/Filter.jsx"
import Message from "./components/Message.jsx"

import server from  "./services/phonebook"

import "./index.css"


const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredContact, setFilteredContact] = useState([])

  const [messageProps, setMessageProps] = useState({
    isActive: false
  })

  useEffect(() => {
    server.getAll()
    .then(res => {
      setPersons(res)
      setFilteredContact(res)
    })
  }, [])


  const updateMessage = newMessage => {

    setMessageProps(newMessage)

    const updateMessageTimeout = setTimeout(() => {
      setMessageProps({...messageProps, isActive: false})
    }, 2000)
  }

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

          const newMessage = {
            label: `${person.name} was updated`,
            isActive: true,
            type: "positive"
          }
          updateMessage(newMessage)

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

    server.add(newPerson).then(newPerson => {
      const newPersonArray = [...persons, newPerson]
      console.log(newPerson)
      setPersons(newPersonArray)
      setFilteredContact(newPersonArray)

      const newMessage = {
            label: `${newPerson.name} was added`,
            isActive: true,
            type: "positive"
      }
      updateMessage(newMessage)

    })
  }

  const deletePerson = event => {
    const id = event.target.id

    const newPersons = persons.filter(person => person.id != id)
    const deletedPerson = persons.find(p => p.id == id)

    server.deletePerson(id)
        .then(status => {
          const newMessage = {
            label: `${deletedPerson.name} was deleted`,
            isActive: true,
            type: "positive"
          }
          updateMessage(newMessage)
    })
        .catch(err => {
          const newMessage = {
            label: `${deletedPerson.name} was already deleted`,
            isActive: true,
            type: "negative"
          }
          updateMessage(newMessage)
        })

        setPersons(newPersons)
        setFilteredContact(newPersons)
  }



  return (
    <div>

      <h2>Phonebook</h2>

      <Message label={messageProps.label} type={messageProps.type} showMessage={messageProps.isActive} />


      <Filter persons={persons} setFilteredContact={setFilteredContact} />

      <h2>Add a new contact</h2>

      <Form addPerson={addPerson} setNewName={setNewName} setNewNumber={setNewNumber}/>

      <h2>Numbers</h2>

      <DisplayContacts contacts={filteredContact} deleteHandler={deletePerson} />

    </div>
  )
}

export default App
