import styles from './index.css';

function BasicLayout(props) {
  // console.log(props.location, 'x')
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>点餐小工具</h1>
      { props.children }
    </div>
  );
}

export default BasicLayout;
