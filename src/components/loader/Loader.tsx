import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.ring}>
      Loading
      <span />
    </div>
  );
};

export default Loader;
