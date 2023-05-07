import styles from './form.module.scss';

export default function Form() {
  const onSubmit = () => {
    return console.log('submit');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Authorization</h1>
      <form onSubmit={onSubmit} className={styles.form}>
        <label className={styles.label} htmlFor="email">
          <span>Enter your email</span>
          <input className={styles.input} type="text" placeholder="Some email" name="email" />
        </label>
        <label className={styles.label} htmlFor="password">
          <span>Enter your password</span>
          <input className={styles.input} type="text" placeholder="Some password" name="password" />
        </label>
        <div className={styles.submit_container}>
          <button type="button" className={styles.submit}>
            Sign In
          </button>
          /
          <button type="button" className={styles.submit}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
