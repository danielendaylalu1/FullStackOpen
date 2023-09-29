import Content from "./Content";
import Header from "./Header";
import { v4 as uuidv4 } from "uuid";

const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => {
        console.log(course);
        return (
          <div key={uuidv4()}>
            <Header header={course.name} />
            <Content parts={course.parts} />
          </div>
        );
      })}
    </div>
  );
};

export default Course;
