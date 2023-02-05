import React from "react";
import s from "./style.module.css";
import { useState, useEffect, useRef } from "react";

export default function Slider({ product }) {
  const wrap = useRef(null);
  const [wrapStyle, setWrapStyle] = useState({});
  const [wrapCurrentTranslate, setWrapCurrentTranslate] = useState(0);

  useEffect(() => {
    const elem = wrap.current;
  }, []);

  const toNextRightImg = () => {
    const width = window.getComputedStyle(wrap.current).width;
    if (`${-wrapCurrentTranslate + 500}px` === width) {
      return;
    }
    setWrapCurrentTranslate(wrapCurrentTranslate - 500);
    const newStyle = {
      transform: `translate(${wrapCurrentTranslate - 500}px)`,
    };
    setWrapStyle(newStyle);
  };

  const toNextLeftImg = () => {
    if (wrapCurrentTranslate === 0) {
      return;
    }
    setWrapCurrentTranslate(wrapCurrentTranslate + 500);
    const newStyle = {
      transform: `translate(${wrapCurrentTranslate + 500}px)`,
    };
    setWrapStyle(newStyle);
  };

  return (
    <div className={s.slider}>
      <button
        onClick={toNextLeftImg}
        className={[s.slider__btn, s.slider__btn_left].join(" ")}
      >
        {" "}
        &#10094;{" "}
      </button>

      <div ref={wrap} style={wrapStyle} className={s.slider__img_wrap}>
        {product.images.map((img) => (
          <div key={img}>
            <img key={img} alt={product.title} src={img}></img>
          </div>
        ))}
      </div>

      <button
        id="right"
        onClick={toNextRightImg}
        className={[s.slider__btn, s.slider__btn_right].join(" ")}
      >
        {" "}
        &#10095;{" "}
      </button>
    </div>
  );
}
