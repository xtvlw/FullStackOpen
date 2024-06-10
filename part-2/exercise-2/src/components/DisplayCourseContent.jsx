

const DisplayCourseContent = ({ data }) => {
    return(
        <div>
            {data.map(item => {
                return <p key={item.id}>{item.name} {item.exercises}</p>
            })}
        </div>
    )
}


export default DisplayCourseContent
