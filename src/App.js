import React from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Testimonials />
      <Interests />
      <Contact />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Vy Nguyen</h1>
      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#certifications">Certifications</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a
            href="/images/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <h2>Hello, I'm Vy 👋</h2>
      <p>Full-Stack Developer | George Brown College</p>
      <a href="#projects" className="btn">
        View My Work
      </a>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        I'm a full-stack developer passionate about solving real-world problems
        through scalable and efficient web applications using React, .NET,
        Python, and SQL.
      </p>
      <img
        src="/images/mypicture.JPG"
        className="profile-pic"
        alt="Vy Nguyen"
      />
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div>
        <h3>Software Developer Intern - ABC Tech</h3>
        <p>
          <em>May 2024 – August 2024</em>
        </p>
        <ul>
          <li>Built REST APIs with .NET Core</li>
          <li>Collaborated on Agile sprints and GitHub pull requests</li>
        </ul>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <img
            src="/images/Inventory.png"
            className="project-img"
            alt="Inventory"
          />
          <h3>Smart Inventory</h3>
          <p>ASP.NET Core app with admin dashboard and filtering.</p>
          <a href="https://github.com/ttphan23/COMP2139" target="_blank">
            GitHub
          </a>
        </div>
        <div className="project-card">
          <img src="/images/Hero.png" className="project-img" alt="Hero Game" />
          <h3>Hero vs Monster</h3>
          <p>Python OOP game with SQLite quest tracking.</p>
          <a
            href="https://github.com/vynguyen175/vy_quest_feature"
            target="_blank"
          >
            GitHub
          </a>
        </div>
        <div className="project-card">
          <img
            src="/images/Gomoku.png"
            className="project-img"
            alt="Gomoku AI"
          />
          <h3>Gomoku AI</h3>
          <p>Java AI using Minimax with alpha-beta pruning.</p>
          <a href="https://github.com/vynguyen175/Gomoku" target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul>
        <li>Languages: JavaScript, Python, C#, SQL</li>
        <li>Frameworks: React, ASP.NET Core, Node.js</li>
        <li>Tools: Git, GitHub, VS Code, Rider</li>
        <li>Database: SQL Server, SQLite</li>
      </ul>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <h2>Certifications</h2>
      <ul>
        <li>Azure Fundamentals – June 2024</li>
        <li>Scrum Master – March 2024</li>
      </ul>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <h2>Testimonials</h2>
      <blockquote>
        "Vy is an exceptional developer and problem solver." — Jane Doe, Senior
        Dev
      </blockquote>
    </section>
  );
}

function Interests() {
  return (
    <section id="interests" className="interests">
      <h2>Interests</h2>
      <ul>
        <li>UI/UX Design</li>
        <li>Gaming & Esports</li>
        <li>Hackathons</li>
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>
        Email:{" "}
        <a href="mailto:vy.nguyen2@georgebrown.ca">vy.nguyen2@georgebrown.ca</a>
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Vy Nguyen • Made with 💙 React</p>
    </footer>
  );
}
