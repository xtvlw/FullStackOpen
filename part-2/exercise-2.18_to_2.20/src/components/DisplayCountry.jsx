import DisplayLanguages from "./DisplayLanguages.jsx"

import "./DisplayCountry.style.css";
import "./_variables.style.css"

const DisplayCountry  = ({ data, setNewFilter }) => {
    const country = data[0]

    const area = new Intl.NumberFormat().format(country.area)

    return (
      <div>
        <h1 className="ccountry-name">{country.name.common}</h1>
        <p className="sub-title">{country.name.official}</p>
        <div className="country-info">
          <p>Capital: {country.capital[0]}</p>
          <p>Area: {area} Km<sup>2</sup></p>
          <DisplayLanguages data={country.languages} setNewFilter={setNewFilter}/>
        </div>
        <img className="country-flag" src={country.flags.svg} alt={country.flags.alt} />
      </div>
  )
}

export default DisplayCountry
