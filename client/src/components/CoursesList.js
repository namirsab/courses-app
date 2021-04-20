import CourseListItem from "./CourseListItem";
import "./CoursesList.css";

function CoursesList() {
  const courses = [
    {
      _id: "1",
      name: "Advanced React",
      location: "Remote",
    },
    {
      _id: "2",
      name: "CSS for Beginners",
      location: "Hamburg",
    },
    {
      _id: "3",
      name: "What the hell is JavaScript?",
      location: "Köln",
    },
    {
      _id: "4",
      name: "MongoDB: storing data the easy way",
      location: "Remote",
    },
    {
      _id: "5",
      name: "NodeJS on steroids",
      location: "Remote",
    },
    {
      _id: "6",
      name: "NodeJS on steroids",
      location: "Remote",
    },
    {
      _id: "7",
      name: "NodeJS on steroids",
      location: "Remote",
    },
    {
      _id: "8",
      name: "NodeJS on steroids",
      location: "Remote",
    },
    {
      _id: "9",
      name: "NodeJS on steroids",
      location: "Remote",
    },
    {
      _id: "10",
      name: "NodeJS on steroids",
      location: "Remote",
    },
    {
      _id: "11",
      name: "NodeJS on steroids",
      location: "Remote",
    },
    {
      _id: "12",
      name: "NodeJS on steroids",
      location: "Remote",
    },
    {
      _id: "13",
      name: "NodeJS on steroids",
      location: "Remote",
    },
    {
      _id: "14",
      name: "NodeJS on steroids",
      location: "Remote",
    },
  ];

  function renderCourses() {
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

  function handleCourseClick(courseId) {
    console.log(`Course with id ${courseId} clicked`);
  }

  return (
    <div className="CoursesList">
      {courses.length > 0 ? renderCourses() : "No courses available"}
    </div>
  );
}

export default CoursesList;
