import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-cards">

        <div className="card">
          <img src="portfolio.jpg" alt="Project 1" />
          <h3>My Portfolio</h3>
          <p>A personal portfolio to showcase my skills, projects, and achievements in web development. 
            This site is responsive and has an interactive winter-themed design with creative hover effects.<br/>
            Tech Stack used : ReactJS, CSS, and JavaScript.
            </p>
          <a href="https://github.com/paridhi-kapoor/MyPortfolio" target="_blank" rel="noopener noreferrer">View on GitHub</a> <br/>
          <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">Take A Look</a>

        </div>

        <div className="card">
          <img src="todo.jpg" alt="Project 2" />
          <h3>Personal Task Manager</h3>
          <p>A simple yet efficient To-Do application that helps users organize tasks and boost productivity. 
            The app allows users to add, edit, mark as complete, and delete tasks with an intuitive interface and real-time updates.<br/>
            Tech Stack used : ReactJS, CSS, and JavaScript.
            </p>
          <a href="https://github.com/paridhi-kapoor/Personal_Task_Manager/tree/main" target="_blank" rel="noopener noreferrer">View on GitHub</a><br/>
          <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">Take A Look</a>
          </div>

          <div className="card">
          <img src="" alt="Project 3" />
          <h3>Weather App</h3>
          <p>A brief description of the project.</p>
          <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
      </div>
    </section>
  );
}

export default Projects;
