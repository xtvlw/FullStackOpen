
const Button = ({ label, deleteHandler, id }) => {
  return (
    <button id={id} onClick={deleteHandler}>
        {label}
    </button>
  )
}

export default Button
