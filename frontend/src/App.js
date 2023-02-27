import FetchAPI from './FetchAPI'
import styles from './App.module.css'

function App() {

  return (
    <ul className={styles.blogList}>
      {FetchAPI()}
  </ul>
  );
}

export default App;
