

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

const Total = ({ numberOfExercises }) => {
  return <p>Number of exercises {numberOfExercises}</p>
}

const App = () => {

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const arrayOfParts = [part1, part2, part3]

  return (
    <div>
      <Header courseName={course} />

      <Content data={ arrayOfParts } />

      <Total numberOfExercises={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App
