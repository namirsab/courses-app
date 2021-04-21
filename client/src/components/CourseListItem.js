import "./CourseListItem.css";

function CourseListItem({
  id,
  courseIndex,
  courseName,
  courseLocation,
  onClick,
}) {
  function handleButtonClick() {
    onClick(id);
  }

  return (
    <div className="CourseListItem">
      <div className="CourseListItem__index">{courseIndex}</div>
      <div className="CourseListItem__details">
        <div className="CourseListItem__name">{courseName}</div>
        <div className="CourseListItem__location">{courseLocation}</div>
      </div>
      <button onClick={handleButtonClick} className="CourseListItem__button">
        {"->"}
      </button>
    </div>
  );
}

export default CourseListItem;
