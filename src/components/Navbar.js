import Button from "./Button";
import styles from "./Navbar.module.css";
const Navbar = () => {
  

  return (
    <div className={styles.navs}>
      <div className={styles.logo}>
        <img className={styles.logoChild} alt="" src="/star-121.svg" />
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
        <Button />
        <button className={styles.button} id="hh">
          <div className={styles.buttonInner}>
            <div className={styles.signUpWrapper}>
              <div className={styles.signUp}>sign up</div>
            </div>
          </div>
        </button>
      </div>
      
    </div>
  );
};

export default Navbar;
