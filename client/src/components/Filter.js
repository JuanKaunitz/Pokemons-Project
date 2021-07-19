import React from "react";
import "./Filter.css";
import { useDispatch, useSelector } from "react-redux";
import { filterBy, filterMine } from "../redux/actions/Actions";

export default function Filter() {
    
    const dispatch = useDispatch()
    const getTypes = useSelector((state) => state.getTypes)    

    const onFilterChange = (e) => {   
        dispatch(filterBy(e.target.value));
      }  
    const onMineFilterChange = (e) => {   
      dispatch(filterMine(e.target.value));
    }    
    return (
        <div className="select">
          <label>DB or API: </label>
          <select name="slct" id="slct" onChange={onMineFilterChange}>
            <option defaultValue value="null">... </option>
            <option value='dB'>dB</option>
            <option value='API'>API</option>                       
          </select>
          
          <label>Filter by: </label>
          <select name="slct" id="slct" onChange={onFilterChange}>
            <option defaultValue value="null">... </option>
            {
                getTypes.length > 0 ? getTypes.map(e => <option value={e.name}>{e.name}</option>) : ''
            }            
          </select>
        </div>
      );

};