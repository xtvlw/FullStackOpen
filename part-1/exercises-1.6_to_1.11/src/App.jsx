import { useState } from 'react'
import "./app.css"

const Button = ({ text, setter }) => {

  return (
    <button onClick={setter}>{text}</button>
  )
}

const FeedbackButtons = ({ buttons, statistics }) => {

  const add = (setter, content, id) => () => {

    const addOne = content + 1
    setter(addOne);

    let initVaelue = 1;
    const newSum = buttons.reduce( (n, m) => {
      return n + m.content
    }, initVaelue)
    statistics.filter(n => n.id == "sum")[0].setter(newSum);


    let numOfPositiveReview = buttons
      .filter(n => n.id == "good")[0].content;
    if (id == "good") {
      numOfPositiveReview = addOne
    }
    const newPositiveStat = numOfPositiveReview * 100 / newSum + "%";
    statistics.filter(n => n.id == "positive")[0].setter(newPositiveStat);


    let numOfBadReview = buttons
      .filter(n => n.id == "bad")[0].content;
    if (id == "bad") {
      numOfBadReview = addOne;
    }

    const newAverege = (numOfPositiveReview - numOfBadReview) / newSum;
    statistics.filter(n => n.id == "averege")[0].setter(newAverege);

  }

  return (
    <>
      {buttons.map( item => {
        return <Button key={Math.random()}
          text={item.text}
          setter={add(item.setter, item.content, item.id)} />
      })}

    </>
  )
}

const DisplayResults = ({ text, value }) => {
  return <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
}

const Statistics = ({ data }) => {
  if (data.statistics.filter(n => n.id == "sum")[0].content == 0) {
      return <>
        <p>No feedback given</p>
      </>
  }
  return <>
    <h2>Statistics</h2>
    <table>
      <thead>
        <tr>
          <th>Data</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {data.buttons.map( item => {
          return <DisplayResults
            key={Math.random()}
            text={item.text}
            value={item.content} />
        })}

        {data.statistics.map( item => {
          return <DisplayResults
            key={Math.random()}
            text={item.text}
            value={item.content} />
        })}
      </tbody>
    </table>
  </>
}

function App() {

  const [badReview, setBadReview] = useState(0);
  const [neutralReview, setNeutralReview] = useState(0);
  const [goodReview, setGoodReview] = useState(0);

  const [averegeReview, setAveregeReview] = useState(0);
  const [reviewSum, setReviewSum] = useState("");
  const [positiveReview, setPositiveReview] = useState(0);

  const data = {
    buttons: [
      {
        id: "bad",
        text: "Bad",
        setter: setBadReview,
        content: badReview
      },
      {
        id: "neutral",
        text: "Neutral",
        setter: setNeutralReview,
        content: neutralReview
      },
      {
        id: "good",
        text: "Good",
        setter: setGoodReview,
        content: goodReview
      }
    ],
    statistics: [
      {
        id: "sum",
        text: "All",
        setter: setReviewSum,
        content: reviewSum
      },
      {
        id: "averege",
        text: "Averege",
        setter: setAveregeReview,
        content: averegeReview
      },
      {
        id: "positive",
        text: "Positive",
        setter: setPositiveReview,
        content: positiveReview
      }
    ]
  }


  return (
    <>
      <h1>Give feedback</h1>
      <FeedbackButtons buttons={data.buttons} statistics={data.statistics} />
      <Statistics data={data}/>
    </>
  )
}

export default App
