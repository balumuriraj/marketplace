import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.header}>
      <Link href="/">
      <div className={styles.headerLogo}>
        <div>Logo</div>
      </div>
      </Link>
      <div className={styles.menu}>
        <div>Product</div>
        <Link href="/projects/"><div>Marketplace</div></Link>
        <div>Company</div>
      </div>
      <div className={styles.login}>
        <div>Login</div>
        <div className={styles.signup}>Sign Up</div>
      </div>
    </div>
  );
}
