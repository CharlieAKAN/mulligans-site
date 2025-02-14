import Image from "next/image";
import logo from "../public/logo.png"; // Adjust if your logo file is named differently
import styles from "./page.module.css"; // Keep this, and remove the conflicting `styles` object

export default function Home() {
  return (
    <main className={styles.container}>
      {/* Logo */}
      <Image 
        src={logo} 
        alt="Mulligans Coffee and Cards Logo" 
        width={140} 
        height={140} 
        className={styles.logo} 
        priority
      />

      <div className={styles.card}>
        <h1 className={styles.title}>Mulligans Coffee & Cards</h1>
        <p className={styles.subtitle}>We&apos;re Coming Back Bigger and Better!</p>

        <p className={styles.text}>
          In just one month, we&apos;ll be reopening with exciting updates, 
          and our Binder Bot will be <strong>completely upgraded</strong>!
        </p>

        <p className={styles.text}>Stay tuned for more updates. You won&apos;t want to miss this!</p>
      </div>
    </main>
  );
}
