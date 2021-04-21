import "./CourseListItem.css";

function CourseListItem({ courseIndex, courseName, courseLocation }) {
  return (
    <div className="CourseListItem">
      <div className="CourseListItem__index">{courseIndex}</div>
      <div className="CourseListItem__details">
        <div className="CourseListItem__name">{courseName}</div>
        <div className="CourseListItem__location">{courseLocation}</div>
      </div>
      <button className="CourseListItem__button">{"->"}</button>
    </div>
  );
}

export default CourseListItem;
