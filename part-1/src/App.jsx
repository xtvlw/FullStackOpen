

const Header = ({courseName}) => {
  return <h1>{courseName}</h1>
}

const Content = ({ part, exercise }) => {
  return <p>{part} {exercise}</p>
}

const Total = ({ numberOfExercises }) => {
  return <p>Number of exercises {numberOfExercises}</p>
}

const App = () => {

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header courseName={course} />

      <Content part={part1} exercise={exercises1} />
      <Content part={part2} exercise={exercises2} />
      <Content part={part3} exercise={exercises3} />

      <Total numberOfExercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App
