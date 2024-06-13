import FormInput from "./FormInput.jsx"

const Filter = ({ persons, setFilteredContact }) => {
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
      <FormInput text="Filter shown with" updateHandler={changeSearch} />
    </div>
  )
}

export default Filter
