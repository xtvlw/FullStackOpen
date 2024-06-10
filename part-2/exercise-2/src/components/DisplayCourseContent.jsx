

const totalNumberOfExercise = (data) => {
    return data.reduce((m, n) => {
        return m + n.exercises
    }, 0)
}

const DisplayCourseContent = ({ data }) => {
    const numberOfExercises = totalNumberOfExercise(data)

    return(
        <div>
            {data.map(item => {
                return <p key={item.id}>{item.name} {item.exercises}</p>
            })}
            <p>total of {numberOfExercises} exercises</p>
        </div>
    )
}


export default DisplayCourseContent
