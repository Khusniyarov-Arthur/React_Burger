import { useState } from "react";
import style from "./Count.module.css";
import PropTypes from "prop-types";

export const Count = (props) => {
  const [count, setCount] = useState(props.count);

  const addCount = () => {
    setCount(count + 1);
  };

  const removeCount = () => {
    count > 1 ? setCount(count - 1) : null;
  };

  return (
    <div className={style.count}>
      <button
        className={style.minus}
        onClick={removeCount}
        disabled={count === 1}
      >
        -
      </button>
      <p className={style.amount}>{count}</p>
      <button className={style.plus} onClick={addCount}>
        +
      </button>
    </div>
  );
};

Count.propTypes = {
  count: PropTypes.number,
};
