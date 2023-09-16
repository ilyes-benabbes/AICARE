import Button from "./Button";
import styles from "./Navbar.module.css";
import styles2 from "../pages/mycss.module.css";
const NavbarGiver = () => {
  

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

        <img src="/message.svg" alt="Profile" className={styles.image} />
        <img src="/myaccount.svg" alt="Profile" className={styles.image} />
      
        
        
      </div>
      
    </div>
  );
};

export default NavbarGiver;
