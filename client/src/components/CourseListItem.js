import "./CourseListItem.css";

function CourseListItem({ id, index, courseName, courseLocation, onClick }) {
  function handleClick() {
    onClick(id);
  }

  return (
    <div className="CourseListItem">
      <div className="CourseListItem__index">{index}</div>
      <div className="CourseListItem__details">
        <div className="CourseListItem__name">{courseName}</div>
        <div className="CourseListItem__location">{courseLocation}</div>
      </div>
      <button onClick={handleClick} className="CourseListItem__nav-button">
        {"->"}
      </button>
    </div>
  );
}

export default CourseListItem;
