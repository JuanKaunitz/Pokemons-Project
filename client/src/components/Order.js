import React from "react";
import "./Order.css";
import { useDispatch } from "react-redux";
import { orderBy, orderByDesc } from '../redux/actions/Actions'

const Order = () => {
  const dispatch = useDispatch();
  // ordenamiento alfabetico
  const onOrderChange = (e) => {
    if (e.target.value === "az" || e.target.value === "highest") {
      dispatch(orderBy(e.target.value));
    } else {
      dispatch(orderByDesc(e.target.value));
    }
  };
  const refreshPage = () => {
    window.location.reload();
  }

  return (
    <div className="select">
      <select name="slct" id="slct" onChange={onOrderChange}>
        <option onClick={refreshPage} defaultValue>Order by: </option>
        <option value="az">Asc</option>
        <option value="za">Desc</option>
        <option value="lowest">Lowest attack: </option>
        <option value="highest">Highest attack: </option>
      </select>
    </div>
  );
};

export default Order;
