import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="Navigation">
      <div className="Navigation__item">
        <NavLink to="/courses">Courses</NavLink>
      </div>
      <div className="Navigation__item">
        <NavLink to="/students">Students</NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
