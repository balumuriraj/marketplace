import Navbar from "../../components/Navbar";
import Projects from "../../components/Projects";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <div>
        <div style={{ paddingTop: 55 }}>
          <div style={{ paddingLeft: 20 }}>
            <h1>Projects</h1>
          </div>
          <Projects />
        </div>
      </div>
    </>
  );
}
