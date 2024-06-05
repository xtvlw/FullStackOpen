import { useState } from 'react'

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
      votes: 0,
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

  const changeQuote = () => {
    const randIndex = Number.parseInt(Math.random() * anecdotes.length);
    setSelected(randIndex);
  }

  const voteToQuote = () => {
    const addVote = { ...data };
    addVote[selected].votes += 1;
    setData(addVote);
  }

  return (
    <div>
      <p>{data[selected].quote}</p>
      <p>This quote have: {data[selected].votes} votes</p>
      <div>
        <button onClick={voteToQuote}>
          Vote
        </button>
        <button onClick={changeQuote}>
          click to change quote
        </button>
      </div>

    </div>
  )
}

export default App
