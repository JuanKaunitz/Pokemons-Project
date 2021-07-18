import React from "react";
import "./Order.css";
import { useDispatch } from "react-redux";
import { orderBy, orderByDesc } from '../redux/actions/Actions'

const Order = () => {
  const dispatch = useDispatch();
  // ordenamiento alfabetico
  
  const onOrderChange = (e) => {   
    dispatch(orderBy(e.target.value));
  } 
  
  

  return (
    <div className="select">
      <select name="slct" id="slct" onChange={onOrderChange}>
        <option defaultValue>Order by: </option>
        <option value="az">Asc from a-z</option>
        <option value="za">Desc from z-a</option>
        <option value="ASC">Lowest to Highest Attack: </option>
        <option value="DESC">Highest to Lowest Attack: </option>
      </select>
    </div>
  );
};

export default Order;
