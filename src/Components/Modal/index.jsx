import React from "react";
import Slider from "../Slider";
import s from "./style.module.css";

export default function Modal({ modalToggle, product }) {
  return (
    <>
      <div onClick={modalToggle} className={s.product__modal_backdrop}></div>
      <div className={s.product__modal}>
        <h3>{product.title}</h3>

        <Slider product={product} />

        <p>{product.description}</p>
      </div>
    </>
  );
}
