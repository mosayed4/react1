import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartslice } from "../redux/cartslice";
import img2  from '../companats/css/imgs/1_tAZ0DsBYgXTsn2BBLxlIIg-removebg-preview.png'
import { Link } from "react-router-dom";
export const Card = (props) => {
  console.log(useSelector((state) => state));
  console.log(props.dataa);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="single-product">
        <div className="img1"><img src={props.dataa.image} alt={''} /></div>
        <p>{props.dataa.title}</p>
        <p  className="price1">Price: {props.dataa.price} $</p>
        <div>
          <button
            onClick={() => dispatch(cartslice.actions.addtocart(props.dataa))}
          >
            {" "}
            Add to Cart
          </button>
          <Link to={`/products/${props.id}`}>Read More</Link>
        </div>
          <div className="img2"><img src={img2} alt={''} /></div>
      </div>
    </div>
  );
};
