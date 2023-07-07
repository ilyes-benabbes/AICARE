import styles from "./WHYSECTION.module.css";
const WHYSECTION = () => {
  return (
    <div className={styles.frame18variant4}>
      <img className={styles.icon} alt="" src="/icon1.svg" />
      <b className={styles.artificialIntelligence}>Artificial intelligence</b>
      <div className={styles.usingAiModelsContainer}>
        <span className={styles.usingAiModelsContainer1}>
          <p className={styles.usingAiModels}>
            using AI models to find the best compatibility between caregivers
            and caretakers
          </p>
        </span>
      </div>
      <div className={styles.frame18variant4Child} />
      <img className={styles.frame18variant4Item} alt="" src="/group-4.svg" />
    </div>
  );
};

export default WHYSECTION;
