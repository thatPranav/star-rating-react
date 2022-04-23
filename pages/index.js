import { FaStar } from "react-icons/fa";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className={styles.container}>
      {[...Array(5)].map((star, i) => {
        const starNumber = i + 1;
        return (
          <label key={i}>
            <input type="radio" className={styles.inputRadio} />
            <FaStar
              size={100}
              onClick={() => setRating(starNumber)}
              onMouseEnter={() => setHover(starNumber)}
              onMouseLeave={() => setHover(null)}
              color={
                starNumber <= hover || starNumber <= rating
                  ? "#FFEA00"
                  : "#B2BEB5"
              }
            />
          </label>
        );
      })}
    </div>
  );
}
