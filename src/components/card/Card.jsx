import React from "react";
import Button from "../button/Button";
import "./button.style.scss";
import { Link } from "react-router-dom";
const Card = ({ image, name, price, onClick ,id}) => {
  return (
    <Link to={`/descrption/${id}`}>
      <div className="Card">
        <img className="Card__image" src={image} alt="" />
        <h2 className="Card__title">{name}</h2>
        <p className="Card_price">{`${price} تومان`}</p>
        <div className="Card__btn">
        <Button onClick={onClick}>{"خرید"}</Button>
        </div>
      </div>
    </Link>

  );
};

export default Card;
