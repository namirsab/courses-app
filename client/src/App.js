import "./App.css";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import StudentsPage from "./components/StudentsPage";
import CoursesPage from "./components/CoursesPage";

function App() {
  const location = useLocation();

  function renderHeaderText() {
    let headerText;
    if (location.pathname.includes("courses")) {
      headerText = "Courses";
    } else if (location.pathname.includes("students")) {
      headerText = "Students";
    }

    return headerText;
  }
  return (
    <div className="App">
      <header className="App__header">
        <h1>{renderHeaderText()}</h1>
      </header>
      <main className="App__content">
        <Switch>
          <Route path="/students">
            <StudentsPage />
          </Route>
          <Route path="/courses">
            <CoursesPage />
          </Route>
          <Route path="/">
            <Redirect to="/courses" />
          </Route>
        </Switch>
      </main>
      <footer className="App__nav-footer">
        <Navigation />
      </footer>
    </div>
  );
}

export default App;
