import { CatalogProduct } from "../CatalogProduct/CatalogProduct";
import { Order } from "../Order/Order";
import { Container } from "../container/container";
import style from "./Catalog.module.css";

const goodsList = [
  { title: "Мясная бомба" },
  { title: "Супер сырный" },
  { title: "Сытный" },
  { title: "Итальянский" },
  { title: "Вечная классика" },
  { title: "Тяжелый удар" },
];

export const Catalog = () => {
  return (
    <section className={style.catalog}>
      <Container className={style.container}>
        <Order />

        <div className={style.wrapper}>
          <h2 className={style.title}>Бургеры</h2>

          <div className={style.wrap_list}>
            <ul className={style.list}>
              {goodsList.map((item, index) => {
                return (
                  <li key={index} className={style.item}>
                    <CatalogProduct title={item.title} />
                  </li>
                );
              })}

              {/* <li className={style.item}>
                <article className={style.product}>
                  <img
                    src="img/photo-1.jpg"
                    alt="Супер сырный"
                    className={style.product__image}
                  />

                  <p className={style.product__price}>
                    550<span className={style.currency}>₽</span>
                  </p>

                  <h3 className={style.product__title}>
                    <button className={style.product__detail}>
                      Супер сырный
                    </button>
                  </h3>

                  <p className={style.product__weight}>512г</p>

                  <button className={style.product__add} type="button">
                    Добавить
                  </button>
                </article>
              </li>

              <li className={style.item}>
                <article className={style.product}>
                  <img
                    src="img/photo-3.jpg"
                    alt="Сытный"
                    className={style.product__image}
                  />

                  <p className={style.product__price}>
                    639<span className={style.currency}>₽</span>
                  </p>

                  <h3 className={style.product__title}>
                    <button className={style.product__detail}>Сытный</button>
                  </h3>

                  <p className={style.product__weight}>580г</p>

                  <button className={style.product__add} type="button">
                    Добавить
                  </button>
                </article>
              </li>

              <li className={style.item}>
                <article className={style.product}>
                  <img
                    src="img/photo.jpg"
                    alt="Тяжелый удар"
                    className={style.product__image}
                  />

                  <p className={style.product__price}>
                    480<span className={style.currency}>₽</span>
                  </p>

                  <h3 className={style.product__title}>
                    <button className={style.product__detail}>
                      Тяжелый удар
                    </button>
                  </h3>

                  <p className={style.product__weight}>470г</p>

                  <button className={style.product__add} type="button">
                    Добавить
                  </button>
                </article>
              </li>

              <li className={style.item}>
                <article className={style.product}>
                  <img
                    src="img/photo-2.jpg"
                    alt="Вечная классика"
                    className={style.product__image}
                  />

                  <p className={style.product__price}>
                    450<span className={style.currency}>₽</span>
                  </p>

                  <h3 className={style.product__title}>
                    <button className={style.product__detail}>
                      Вечная классика
                    </button>
                  </h3>

                  <p className={style.product__weight}>450г</p>

                  <button className={style.product__add} type="button">
                    Добавить
                  </button>
                </article>
              </li>

              <li className={style.item}>
                <article className={style.product}>
                  <img
                    src="img/photo-4.jpg"
                    alt="Итальянский"
                    className={style.product__image}
                  />

                  <p className={style.product__price}>
                    560<span className={style.currency}>₽</span>
                  </p>

                  <h3 className={style.product__title}>
                    <button className={style.product__detail}>
                      Итальянский
                    </button>
                  </h3>

                  <p className={style.product__weight}>510г</p>

                  <button className={style.product__add} type="button">
                    Добавить
                  </button>
                </article>
              </li> */}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
