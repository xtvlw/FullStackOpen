
import Button from "./Button.jsx"

const DisplayContacts = ({ contacts, deleteHandler }) => {
  return (
    <>
      {contacts === undefined ?
          <p></p> :
          contacts.map(person => {
        return <div key={person.id}>
          <p>{person.name} {person.number}</p>
          <Button id={person.id} label="Delete" deleteHandler={deleteHandler} />
          </div>
      })}
    </>
  )
}

export default DisplayContacts
