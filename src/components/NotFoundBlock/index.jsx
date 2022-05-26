import React from "react";
import s from "./styles.module.scss";

console.log(s);

const NotFoundBlock = () => {
  return (
    <div className={s.root}>
      <h1>Ничего не найдено</h1>
      <p className={s.description}>К сожалению, такая страница отсутствует</p>
    </div>
  );
};

export default NotFoundBlock;
