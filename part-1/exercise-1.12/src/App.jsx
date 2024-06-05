import { useState } from 'react'

const DisplayQuote = ({ data })=> {
  return <div>
    <p>{data.quote}</p>
    <p>This quote have {data.votes} votes</p>
  </div>
}

const Button = ({ funct, text }) => {
  return <button onClick={funct}>
  {text}
  </button>
}

const App = () => {
  const anecdotes = [
    {
      votes: 0,
      quote: 'If it hurts, do it more often.'
    },
    {
      votes: 0,
      quote: 'Adding manpower to a late software project makes it later!'
    },
    {
      votes: 0,
      quote: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.'
    },
    {
      votes: 0,
      quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.'
    },
    {
      votes: 1,
      quote: 'Premature optimization is the root of all evil.'
    },
    {
      votes: 0,
      quote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
    },
    {
      votes: 0,
      quote: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
    },
    {
      votes: 0,
      quote: 'The only way to go fast, is to go well.'
    }
  ]

  const [data, setData] = useState(anecdotes);
  const [selected, setSelected] = useState(0);
  const [mostVoted, setMostVoted] = useState(anecdotes[4]);

  const changeQuote = () => {
    const randIndex = Number.parseInt(Math.random() * anecdotes.length);
    setSelected(randIndex);
  }

  const voteToQuote = () => {
    const addVote = { ...data };
    addVote[selected].votes += 1;
    if (addVote[selected].votes >= mostVoted.votes) {
      setMostVoted(addVote[selected]);
    }
    setData(addVote);
  }

  return (
    <div>
      <h1>Anecdotes of the day</h1>
      <DisplayQuote data={data[selected]} />

      <Button funct={voteToQuote} text="Vote" />
      <Button funct={changeQuote} text="click to change quote" />

      <h2>Most voted quote</h2>
      <DisplayQuote data={mostVoted} />
    </div>
  )
}

export default App
