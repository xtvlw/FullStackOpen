import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

import Input from "./components/Input.jsx"
import List from "./components/List.jsx"
import DisplayCountry from "./components/DisplayCountry.jsx"

function App() {
  const getAllUrl = "https://studies.cs.helsinki.fi/restcountries/api/all"

  const [rawSearchData, setRawSearchData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  const [searchName, setSearchName] = useState("")


  useEffect(() => {
    axios.get(getAllUrl)
    .then(data => {
      setFilteredData(data.data)
      setRawSearchData(data.data)
    })
  }, [])


  const setNewFilter = event => {
    const country = event.target.value
    const newCountry = rawSearchData.filter(item => item.name.common == country)
    setFilteredData(newCountry)
  }

  const searchInRawData = (searchName) => {
    if (searchName == '') {
      setFilteredData(rawSearchData)
      return
    }
    const newSeachData = rawSearchData.filter(data => {
      if (data.name.common.toLowerCase().includes(searchName)) {
        return data
      }
      if (data.name.official.toLowerCase().includes(searchName)) {
        return data
      }
    })
    setFilteredData(newSeachData)
  }

  const updateSearch = event => {
    const newNameSearch = event.target.value
    setSearchName(newNameSearch)
    searchInRawData(newNameSearch)
  }

  return (
    <>
      <Input label="Find countries: " changeHandler={updateSearch} value={searchName}/>
      {filteredData.length === 1 ?
        <DisplayCountry data={filteredData}/> :
        filteredData.length < 10 ?
        <List data={filteredData}  setNewFilter={setNewFilter} /> :
        <p>There's too may countries to display</p>
      }
    </>
  )
}

export default App
