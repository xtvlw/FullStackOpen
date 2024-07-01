
const FormInput = ({ text, updateHandler }) => {
    return (
        <div>
            {text}: <input onChange={updateHandler}/>
        </div>
    )
}

export default FormInput
