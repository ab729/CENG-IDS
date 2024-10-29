import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import pages
import login from "./Pages/signin/signin";
import students from "./Pages/students/students";
import teachers from "./Pages/teachers/teachers";
import about from "./Pages/about/about";

// import components
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/login" Component={login} />
            <Route path="/students" Component={students} />
            <Route path="/teachers" Component={teachers} />
            <Route path="/about-us" Component={about} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
