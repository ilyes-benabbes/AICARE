import styles from "./LoginPage.module.css";
const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.navs}>
        <div className={styles.logo}>
          <img className={styles.logoChild} alt="" src="/star-15.svg" />
          <div className={styles.aicare}>aicare</div>
          <div className={styles.logoItem} />
        </div>
        <div className={styles.navLinks}>
          <div className={styles.home}>Home</div>
          <div className={styles.aboutParent}>
            <div className={styles.home}>About</div>
            <div className={styles.akarIconschevronDown} />
          </div>
          <div className={styles.home}>contact us</div>
          <div className={styles.pricingWrapper}>
            <div className={styles.home}>Pricing</div>
          </div>
          <button className={styles.button} id="hh">
            <div className={styles.buttonInner}>
              <div className={styles.signUpWrapper}>
                <div className={styles.signUp}>sign up</div>
              </div>
            </div>
          </button>
        </div>
        <div className={styles.t}>t</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.signInWrapper}>
            <b className={styles.signIn}>sign in</b>
          </div>
          <div className={styles.emailWrapper}>
            <div className={styles.email}>Email</div>
          </div>
          <div className={styles.email1}>
            <div className={styles.placeholder}>Please enter your email</div>
          </div>
          <div className={styles.password}>Password</div>
          <div className={styles.password1}>
            <div className={styles.placeholder1}>Enter password</div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.continueWrapper}>
            <div className={styles.continue}>Continue</div>
          </div>
          <div className={styles.alreadyHaveAn}>Already have an account</div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
