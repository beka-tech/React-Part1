import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import image from "./image/img.png";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#C3DCAF",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#C3DCAF",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src={image} alt="beka" />;
}
function Intro() {
  return (
    <div>
      <h1>Beka Aman</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {/* Map Through Skill Objects */}
      {skills.map((skill) => (
        <Skill skillobj={skill} />
      ))}
    </div>
  );
}
function Skill({ skillobj }) {
  return (
    <div className="skill" style={{ background: skillobj.color }}>
      <span>{skillobj.skill}</span>
      <span>{skillobj.level}</span>
      <span>
        {skillobj.level === "beginner" && "👶"}
        {skillobj.level === "intermediate" && "👍"}
        {skillobj.level === "advanced" && "💪"}
      </span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
