import styles from "./loginBox.module.scss";

function LoginBox() {
  return (
    <div className={styles.container}>
      <div className={styles.emoji}>👋🏼</div>
      <div className={styles.title}>Welcome back!</div>
      <div className={styles.subtitle}>Just another authentication page</div>
      <div className={styles.formFields}>
        <div className={styles.fieldTitle}>Username / Email</div>
        <div className={styles.fieldInput}>insertyouremail@email.com</div>
        <div className={styles.fieldTitle}>Password</div>
        <div className={styles.fieldInput}>**********</div>
      </div>
      <div className={`${styles.authButton} ${styles.otp}`}>
        <img src={"/time.png"}></img>Auth via OTP
      </div>
      <div className={`${styles.authButton} ${styles.secureCode}`}>
        <img src={"/padlock.png"}></img>Auth via Secure Code
      </div>
      <div className={`${styles.authButton} ${styles.speaker}`}>
        <img src={"/microphone.png"}></img>Auth via speaker verification
      </div>
    </div>
  );
}

export default LoginBox;
