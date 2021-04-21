import "./CourseList.css";
import CourseListItem from "./CourseListItem";

function CourseList() {
  const courses = [
    {
      _id: "a",
      name: "React Router is amazing",
      location: "Remote",
    },
    {
      _id: "b",
      name: "NodeJS for beginners",
      location: "Hamburg",
    },
    {
      _id: "c",
      name: "Express: is it so fast",
      location: "Cologne",
    },
    {
      _id: "d",
      name: "React Custom Hooks: wtf",
      location: "Munich",
    },
    {
      _id: "e",
      name: "Adobe XD by Sascha Lerner",
      location: "Hamburg",
    },
    {
      _id: "f",
      name: "Adobe XD by Sascha Lerner",
      location: "Hamburg",
    },
    {
      _id: "g",
      name: "Adobe XD by Sascha Lerner",
      location: "Hamburg",
    },
    {
      _id: "h",
      name: "Adobe XD by Sascha Lerner",
      location: "Hamburg",
    },
  ];

  function renderCourses() {
    const coursesComponents = courses.map((course, index) => {
      return (
        <CourseListItem
          key={course._id}
          id={course._id}
          courseIndex={index + 1}
          courseName={course.name}
          courseLocation={course.location}
          onClick={handleCourseClick}
        />
      );
    });

    return coursesComponents;
  }

  function handleCourseClick(id) {
    // TODO: Move the user to the View Single Course page
    console.log(`Course with id ${id} was clicked`);
  }

  return (
    <div>
      <h2>CourseList</h2>
      {renderCourses()}
    </div>
  );
}

export default CourseList;
