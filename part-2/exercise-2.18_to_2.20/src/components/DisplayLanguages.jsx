
import "./DisplayLanguages.style.css"
import "./_variables.style.css"

const DisplayLanguages  = ({ data }) => {

  return (
      <>
      <p className="no-margin">Languages</p>
      <ul className="language-list">
        {Object.keys(data).map(item => {
            return <li key={data[item]} className="language-list-item">
            {data[item]}
            </li>
        })}
        </ul>
    </>

  )
}

export default DisplayLanguages
