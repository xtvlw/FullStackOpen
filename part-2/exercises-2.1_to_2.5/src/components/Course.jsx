import Header from "./Header.jsx"
import DisplayCourseContent from "./DisplayCourseContent.jsx"


const Course = ({ course }) => {
    return(
        <>
            <Header content={course.name} />
            <DisplayCourseContent data={course.parts}/>
        </>
    )
}


export default Course
