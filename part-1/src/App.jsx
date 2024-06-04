

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

  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header courseName={course.name} />

      <Content data={ course.parts } />

      <Total parts={ course.parts } />
    </div>
  )
}

export default App
