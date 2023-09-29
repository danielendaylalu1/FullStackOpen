import Content from "./Content";
import Header from "./Header";

const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => {
        console.log(course);
        return (
          <div>
            <Header />
            <Content />
          </div>
        );
      })}
    </div>
  );
};

export default Course;
