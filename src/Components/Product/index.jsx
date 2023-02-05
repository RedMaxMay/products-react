import React from "react";
import s from "./style.module.css";

export default function Product({ product, deleteProduct, modalToggle }) {
  return (
    <div className={s.product}>
      <img
        className={s.product__img}
        src={product.thumbnail}
        alt={product.title}
        onClick={() => modalToggle(product.id)}
      />

      <h4 className={s.product__title}>{product.title}</h4>

      <div className={s.product__price_wrap}>
        <p className={s.product__standard_price}>
          {product.price.toFixed(2)} $
        </p>
        <p className={s.product__discount_price}>
          {((product.price * (100 - product.discountPercentage)) / 100).toFixed(
            2
          )}
          $
        </p>
      </div>

      <p className={s.product__descr}>{product.description}</p>

      <button
        onClick={() => modalToggle(product.id)}
        className={[s.product__btn, s.product__btn_show].join(" ")}
      >
        Show more photos
      </button>

      <button
        className={[s.product__btn, s.product__btn_delete].join(" ")}
        onClick={() => deleteProduct(product.id)}
      >
        Delete
      </button>
    </div>
  );
}
