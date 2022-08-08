import { useState } from "react";
import Navbar from "../../components/Navbar";
import Projects from "../../components/Projects";
import styles from "../../styles/Projects.module.scss";

export default function ProjectsPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Navbar />
      <div className={styles.addContainer}>
        {submitted ? (
          <div>
            <h1>Project posted successfully!</h1>
          </div>
        ) : (
          <>
            <h2>Post your Project</h2>
            <div className={styles.addblock}>
              <div>
                <p>Title</p>
                <input type="text" placeholder="e.g. Build me a website" required />
              </div>
              <div>
                <p>Description</p>
                <textarea placeholder="Describe your project here..." required />
              </div>
              <div>
                <p>Price</p>
                <input type="number" placeholder="e.g. $250.00" required />
              </div>
              <div>
                <p>Upload files</p>
                <input type="file" multiple required />
              </div>
              <div>
                <button onClick={() => setSubmitted(true)}>Submit</button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
