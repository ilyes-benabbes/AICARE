import { useEffect } from "react";
import styles from "./Tabs.module.css";
const Tabs = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.tabs} data-animate-on-scroll>
      <div className={styles.tabItemAboutMe}>
        <div className={styles.title}>
          <img
            className={styles.iconAboutMe}
            alt=""
            src="/icon--about-me.svg"
          />
          <div className={styles.editMyProfile}>Edit my profile</div>
        </div>
      </div>
      <div className={styles.tabItemProjects}>
        <div className={styles.title}>
          <img className={styles.icon} alt="" src="/icon.svg" />
          <div className={styles.editMyProfile}>{`Payments & Earnings`}</div>
        </div>
        <div className={styles.selector} />
      </div>
      <div className={styles.tabItemSkills}>
        <img className={styles.icon1} alt="" src="/icon1.svg" />
        <div className={styles.title2}>
          <div className={styles.settings}>Settings</div>
        </div>
        <div className={styles.selector} />
      </div>
      <div className={styles.tabItemSkills}>
        <img className={styles.icon1} alt="" src="/icon2.svg" />
        <div className={styles.title3}>
          <div className={styles.editMyProfile}>Log out</div>
        </div>
        <div className={styles.selector} />
      </div>
    </div>
  );
};

export default Tabs;
