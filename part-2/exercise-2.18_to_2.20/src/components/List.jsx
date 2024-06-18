
import "./List.style.css"
import "./_variables.style.css"


const List  = ({ data, setNewFilter }) => {

  return (
    <ul className="country">
    {data.map(item => {
        return(
          <div key={item.name.common} className="flex">
            <li  className="country-list-item">
              {item.name.common}
              <ul className="official-list">
                <li className="official-list-item" >{item.name.official}</li>
              </ul>
            </li>
            <div>
              <button className="list-button" value={item.name.common} onClick={setNewFilter}>
                show
              </button>
            </div>
          </div>
        )
    })}
    </ul>

  )
}

export default List
