import styles from "./assets/modules/home.module.css";
import Header from "./components/header.component";
import Toolbox from "./components/toolbox.component";

const Home = (props) => {
  return (
    <div class={styles.mlink}>
      <Header style={styles} />
      <Toolbox style={styles} />
    </div>
  );
};

export default Home;
