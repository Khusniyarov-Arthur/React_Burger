import classNames from "classnames";
import style from "./Navigation.module.css";
import { Container } from "../container/container";
import { useDispatch, useSelector } from "react-redux";
import { ChandeCategory } from "../../store/category/categorySlice";

export const Navigation = () => {
  const { category, activeCategory } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  return (
    <nav className={style.navigation}>
      <Container className={style.container}>
        <ul className={style.list}>
          {category.map((item, index) => {
            return (
              <li key={index} className={style.item}>
                <button
                  className={classNames(
                    style.button,
                    activeCategory === index ? style.button_active : ""
                  )}
                  style={{ backgroundImage: `url(${item.image})` }}
                  onClick={() => {
                    dispatch(ChandeCategory({ indexCategory: index }));
                  }}
                >
                  {item.rus}
                </button>
              </li>
            );
          })}
        </ul>
      </Container>
    </nav>
  );
};
