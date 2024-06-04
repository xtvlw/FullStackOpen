import { useState } from 'react'


const Button = ({ text, setter, content }) => {
  const add = () => {
    const addOne = content + 1;
    setter(addOne);
  }
  return (
    <button onClick={add}>{text}</button>
  )
}

const FeedbackButtons = ({ buttons }) => {
  return (
    <>
      {buttons.map( item => {
        return <Button key={Math.random()}
          content={item.content}
          text={item.text}
          setter={item.setter} />
      })}
    </>
  )
}

const DisplayResults = ({ text, value }) => {
  return <>
    <p>{text}: {value}</p>
  </>
}

const Statistics = ({ data }) => {
  return <>
    <h2>Statistics</h2>
    {data.map( item => {
      return <DisplayResults
        key={Math.random()}
        text={item.text}
        value={item.content} />

    })}
  </>
}

function App() {

  const [badReview, setBadReview] = useState(0);
  const [neutralReview, setNeutralReview] = useState(0);
  const [goodReview, setGoodReview] = useState(0);

  const buttons = [
    {
      text: "Bad",
      setter: setBadReview,
      content: badReview
    },
    {
      text: "Neutral",
      setter: setNeutralReview,
      content: neutralReview
    },
    {
      text: "Good",
      setter: setGoodReview,
      content: goodReview
    }
  ]

  return (
    <>
      <h1>Give feedback</h1>
      <FeedbackButtons buttons={buttons} />
      <Statistics data={buttons}/>
    </>
  )
}

export default App
