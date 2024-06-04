

const Part = ({ text, exercise }) => {
  return <p>{text} {exercise}</p>
}

const Header = ({courseName}) => {
  return <h1>{courseName}</h1>
}

const Content = ({ data }) => {
  return <div>
  {data.map(item => {
    return <Part key={Math.random()} text={item.parts} exercise={item.exercises} />
  })}
  </div>
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

  const arrayOfParts = [
      {
        parts: part1,
        exercises: exercises1
      },
      {
        parts: part2,
        exercises: exercises2
      },
      {
        parts: part3,
        exercises: exercises3
      }
    ]

  return (
    <div>
      <Header courseName={course} />

      <Content data={ arrayOfParts } />

      <Total numberOfExercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App
