import { useEffect, useState } from "react";
import CourseListItem from "./CourseListItem";
import "./CoursesList.css";

function CoursesList() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:4000/api/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  function renderCourses() {
    if (loading) {
      return "Loading...";
    } else if (error) {
      return "Error!";
    } else if (courses.length === 0) {
      return "No available courses";
    } else {
      return courses.map((course, index) => {
        return (
          <CourseListItem
            id={course._id}
            index={index + 1}
            courseName={course.name}
            courseLocation={course.location}
            key={course._id}
            onClick={handleCourseClick}
          />
        );
      });
    }
  }

  function handleCourseClick(courseId) {
    console.log(`Course with id ${courseId} clicked`);
  }

  return <div className="CoursesList">{renderCourses()}</div>;
}

export default CoursesList;
