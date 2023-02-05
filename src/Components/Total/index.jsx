import React from "react";
import s from "./style.module.css";

export default function Total({ products }) {
  return (
    <div className={s.total}>
      <p>
        Total products: <span>{products.length}</span>
      </p>
      <p>
        Total price (without discount):{" "}
        <span>
          {products.reduce((sum, product) => product.price + sum, 0).toFixed(2)}
          $
        </span>
      </p>
      <p>
        Total price (with discount):{" "}
        <span>
          {products
            .reduce(
              (sum, product) =>
                (product.price * (100 - product.discountPercentage)) / 100 +
                sum,
              0
            )
            .toFixed(2)}
          $
        </span>
      </p>
    </div>
  );
}
