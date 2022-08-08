import { useState } from "react";
import Navbar from "../../components/Navbar";
import Projects from "../../components/Projects";
import styles from "../../styles/Projects.module.scss";

export default function RequirementsPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Navbar />
      <div className={styles.addContainer}>
        {submitted ? (
          <div>
            <h1>Requirements posted successfully!</h1>
          </div>
        ) : (
          <>
            <h2>Tell us your Requirements</h2>
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
                <button onClick={() => setSubmitted(true)}>Submit</button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
