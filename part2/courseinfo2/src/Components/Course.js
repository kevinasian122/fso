
const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
  {parts.map (part => 
    <Part part = {part} />
    )}
          
  </>

const Course = (props) => {
  const {course} = props
  return (
    <div>
      <Header course={course.name} />
      <Content parts = {course.parts}/>
      <Total sum= {course.parts.reduce((acc, part) => acc + part.exercises, 0)} />
    </div>
  )
}

export default Course