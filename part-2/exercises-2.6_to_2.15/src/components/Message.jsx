const positiveClassStyle = "positive"
const negativeClassStyle = "negative"

const Message = ({ type, label, showMessage }) => {

    const classStyle = type === "positive" ? positiveClassStyle : negativeClassStyle;

    const none = showMessage ? "" : "none"

    const classes = `message ${none} ${classStyle}`

    return (
      <div className={classes}>
        <p>{label}</p>
      </div>
  )
}

export default Message
