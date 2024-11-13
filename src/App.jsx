import { useState } from "react";
import styles from "./index.module.css";
import logo from "./assets/megaphone.png";

function App() {
  const [tweetDescription, setTweetDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitting!", tweetDescription);
  };

  return (
    <main className={styles.body}>
      <div className={styles.chatContainer}>
        <img src={logo} alt="logo" className={styles.icon} />
        <h3 className={styles.heading1}>Generate twitter post with AI</h3>

        <form className={styles.form} onSubmit={onSubmit}>
          <input
            type="text"
            name="query-description"
            placeholder="Describe your project"
            onChange={(e) => setTweetDescription(e.target.value)}
          />
          <input
            type="submit"
            value="Generate tweet"
            className={styles.inputButton}
          />
        </form>
      </div>
      <a
        href="https://www.flaticon.com/free-icons/megaphone"
        title="megaphone icons"
      >
        Megaphone icons created by Freepik - Flaticon
      </a>
    </main>
  );
}

export default App;
