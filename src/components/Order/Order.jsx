import { useDispatch, useSelector } from "react-redux";
import { OrderGoods } from "../OrderGoods/OrderGoods";
import style from "./Order.module.css";
import { useEffect, useState } from "react";
import { orderRequestAsync } from "../../store/order/orderSlice";
import { openModal } from "../../store/modalDelivery/modalDeliverySlice";

export const Order = () => {
  const { totalPrice, totalCount, orderList, orderGoods } = useSelector(
    (state) => state.order
  );

  const [order, setOrder] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderRequestAsync());
  }, [orderList.length]);

  return (
    <div className={order ? style.order_open : style.order}>
      <section className={style.wrapper}>
        <div
          className={style.header}
          onClick={() => {
            setOrder(true);
          }}
          tabIndex="0"
          role="button"
        >
          <h2 className={style.title}>Корзина</h2>

          <span className={style.count}>{totalCount}</span>
        </div>

        <div className={style.wrap_list}>
          <ul className={style.list}>
            {orderGoods.map((item) => (
              <OrderGoods key={item.id} {...item} />
            ))}
          </ul>

          <div className={style.total}>
            <p>Итого</p>
            <p>
              <span className={style.amount}>{totalPrice}</span>
              <span className="currency">&nbsp;₽</span>
            </p>
          </div>

          <button
            className={style.submit}
            disabled={OrderGoods.length === 0}
            onClick={() => {
              dispatch(openModal());
            }}
          >
            Оформить заказ
          </button>

          <div className={style.apeal}>
            <p className={style.text}>Бесплатная доставка</p>
            <button
              className={style.close}
              onClick={() => {
                setOrder(false);
              }}
            >
              Свернуть
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
