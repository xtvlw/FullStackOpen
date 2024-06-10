import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const changeName = event => {
    setNewName(event.target.value)
  }
  const isPersonAdded = name => {
    const personCheck = persons.find(p => p.name === name)
    console.log(personCheck)
    if (personCheck != undefined){
      return true
    }

    return false
  }

  const addPerson = event => {
    event.preventDefault()
    const newPerson = { name: newName }

    if (isPersonAdded(newPerson.name)) {
      alert(`${newPerson.name} is already added to the phonebook`)
      return
    }

    setPersons([...persons, newPerson])
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={changeName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, i) => {
        return <p key={i}>{person.name}</p>
      })}
    </div>
  )
}

export default App
