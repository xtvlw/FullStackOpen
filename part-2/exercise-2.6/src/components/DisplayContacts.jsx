
const DisplayContacts = ({ contacts }) => {

  return (
    <div>
      {contacts.map(person => {
        return <p key={person.id}>{person.name} {person.number}</p>
      })}
    </div>
  )
}

export default DisplayContacts
