

const Part = ({ text, exercise }) => {
  return <p>{text} {exercise}</p>
}

const Header = ({courseName}) => {
  return <h1>{courseName}</h1>
}

const Content = ({ data }) => {
  return <div>
  {data.map(item => {
    return <Part key={Math.random()} text={item.name} exercise={item.exercises} />
  })}
  </div>
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const Total = ({ parts }) => {
  let  inititalValue = 0
  return <p>
    Number of exercises { parts.reduce( (n, m) => {
      return n + m.exercises
      }, inititalValue)}
  </p>
}

const App = () => {

  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header courseName={course} />

      <Content data={ parts } />

      <Total parts={ parts } />
    </div>
  )
}

export default App
