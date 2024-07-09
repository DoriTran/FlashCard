import { getTwoLastestPack, getUserLearningProgress } from "@/actions";
import styles from "./page.module.scss";
import LatestPack from "./LatestPack/LatestPack";
import HomeAction from "./HomeAction/HomeAction";

const Home = async () => {
  const twoLatestPack = await getTwoLastestPack();
  const userLearningProgress = await getUserLearningProgress();

  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <div className={styles.slogan}>
          <div className={styles.bigSlogan}>
            <div className={styles.firstLine}>
              <span className={styles.flash}>Flash</span> your way
            </div>
            <div className={styles.secondLine}>to learn!</div>
          </div>
          <div className={styles.smallSlogan}>Unlock knowledge with every card</div>
        </div>
        <div className={styles.lastest}>
          {twoLatestPack[0] && <LatestPack pack={twoLatestPack[0]} />}
          {twoLatestPack[1] && <LatestPack reverse pack={twoLatestPack[1]} />}
        </div>
      </div>
      <HomeAction learningProgress={userLearningProgress} />
    </div>
  );
};

export default Home;
