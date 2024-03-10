import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo_container}>
      <p className={styles.logo_text}>
        THE <span className={styles.logo_black_text}>PRODUCT</span> PLATFORM
      </p>
    </div>
  );
};

export default Logo;
