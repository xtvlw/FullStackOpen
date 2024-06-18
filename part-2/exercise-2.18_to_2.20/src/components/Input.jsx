
const Input  = ( { label, changeHandler, value }) => {

  return (
    <>
    <label>
    {label}<input onChange={changeHandler} value={value} />
    </label>
    </>
  )
}

export default Input
