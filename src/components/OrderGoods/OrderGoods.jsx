import { API_URI } from "../../const";
import { Count } from "../Count/Count";
import style from "./OrderGoods.module.css";
import PropTypes from "prop-types";

export const OrderGoods = ({ title, price, image, count, id, weight }) => {
  return (
    <li className={style.item}>
      <img className={style.image} src={`${API_URI}/${image}`} alt={title} />

      <div className={style.goods}>
        <h3 className={style.title}>{title}</h3>

        <p className={style.weight}>{weight}г</p>

        <p className={style.price}>
          {price}
          <span className="currency">&nbsp;₽</span>
        </p>
      </div>
      <Count count={count} id={id} />
    </li>
  );
};

OrderGoods.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  count: PropTypes.number,
  id: PropTypes.string,
  weight: PropTypes.number,
  image: PropTypes.string,
};
