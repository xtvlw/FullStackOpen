
import "./List.style.css"
import "./_variables.style.css"


const List  = ({ data }) => {

  return (
    <ul className="country">
    {data.map(item => {
        return <li key={item.name.common} className="country-list-item">
        {item.name.common}
        <ul className="official-list">
          <li className="official-list-item" >{item.name.official}</li>
        </ul>
        </li>
    })}
    </ul>
  )
}

export default List
