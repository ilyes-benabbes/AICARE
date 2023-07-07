import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.toutDroitsReserv}>@2022 Tout droits reservé</div>
      <div className={styles.footerChild} />
    </div>
  );
};

export default Footer;
