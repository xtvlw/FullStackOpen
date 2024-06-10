import { useState } from 'react'

import FormInput from "./FormInput.jsx"

const Form = ({ addPerson, setNewName, setNewNumber }) => {


    const changeName = event => {
        setNewName(event.target.value)
    }

    const changeNumber = event => {
        setNewNumber(event.target.value)
    }

    return (
        <form onSubmit={addPerson}>
            <FormInput text="Name" updateHandler={changeName} />
            <FormInput text="Number" updateHandler={changeNumber} />
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    )
}

export default Form
