import Link from "next/link";
import styles from "../styles/Projects.module.scss";

const items = [
  {
    title: "Title",
    description: "Description",
    price: 300,
  },
  {
    title: "Title",
    description: "Description",
    price: 300,
  },
  {
    title: "Title",
    description: "Description",
    price: 300,
  },
  {
    title: "Title",
    description: "Description",
    price: 300,
  },
  {
    title: "Title",
    description: "Description",
    price: 300,
  },
  {
    title: "Title",
    description: "Description",
    price: 300,
  },
  {
    title: "Title",
    description: "Description",
    price: 300,
  },
  {
    title: "Title",
    description: "Description",
    price: 300,
  },
  {
    title: "Title",
    description: "Description",
    price: 300,
  },
  {
    title: "Title",
    description: "Description",
    price: 300,
  },
];

export default function Projects() {
  return (
    <>         
      <main className={styles.projectsContainer}>
        {items.map((item) => {
          return (
            <div className={styles.project}>
              <div>
                <img
                  src="https://picsum.photos/300"
                  style={{ width: "100%" }}
                />
              </div>
              <div className={styles.info}>
                <div className={styles.details}>
                  <div className={styles.detailsTitle}>{item.title}</div>
                  <div className={styles.detailsDesc}>{item.description}</div>
                </div>
                <div className={styles.price}>
                  <div>${item.price}</div>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}
