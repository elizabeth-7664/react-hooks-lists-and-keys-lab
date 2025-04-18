
import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";
import user from "../data/user";  

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <ProjectList projects={user.projects} />
      {/* Display user info if needed */}
      <div style={{ color: user.color }}>
        <h2>{user.name}</h2>
        <p>{user.city}</p>
        <p>{user.bio}</p>
      </div>
    </div>
  );
}

export default App;
