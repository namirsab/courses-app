import "./CourseList.css";
import CourseListItem from "./CourseListItem";

function CourseList() {
  return (
    <div>
      <h2>CourseList</h2>
      <CourseListItem
        courseIndex="1"
        courseName="React Router is amazing"
        courseLocation="Remote"
      />
      <CourseListItem
        courseIndex="2"
        courseName="NodeJS for beginners"
        courseLocation="Hamburg"
      />
      <CourseListItem
        courseIndex="3"
        courseName="Express: is it so fast?"
        courseLocation="Cologne"
      />
      <CourseListItem
        courseIndex="4"
        courseName="React Custom Hooks: wtf"
        courseLocation="Munich"
      />
      <CourseListItem
        courseIndex="5"
        courseName="Adobe XD by Sascha Lerner"
        courseLocation="Hamburg"
      />
    </div>
  );
}

export default CourseList;
