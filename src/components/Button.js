import styles from "./Button.module.css";
const Button = () => {
  return (
    <button className={styles.button} id="login" type="undefined">
      <div className={styles.buttonInner}>
        <div className={styles.logInWrapper}>
          <div className={styles.logIn}>Log in</div>
        </div>
      </div>
    </button>
  );
};

export default Button;
