import { useEffect, useState } from "react";
import styles from "../modules/Container.module.css";
import { getShowsAPI } from "../apis";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getShowsAPI()
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.container}>
      <h2>All SHOWS PRESENT HERE</h2>

      <div className={styles.grid_div}>
        {data?.map((item) => (
          <div key={item.show.id} className={styles.item_card}>
            <img src={item.show.image?.medium} alt="No Poster" />
            <h4>{item.show.name}</h4>

            <Link to={`/${item.show.id}`}>
              <button className={styles.item_btn}>About</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
