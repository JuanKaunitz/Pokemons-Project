import React, { useState } from "react";
import style from "./NewPokemon.css";
import { useDispatch } from 'react-redux';
import { postPoke } from "../redux/actions/Actions";


export default function NewPokemon() {

  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    image:    
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    types: [],
    life: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    weight: 0,
    height: 0
  });
  
  function handleChange(e) {
    let arr = [];
    let qwe = document.getElementsByClassName("in");
    //console.log(e.target.name);
    for (let i = 0; i < qwe.length; i++) {
      if (qwe[i].checked === true) {
        arr.push(parseInt(qwe[i].value));
      }
    }
    
    setInput({
      ...input,
      types: arr,
      [e.target.name]: e.target.value,
    });
    
    setErrors(
      validate({
        ...input,
        //[e.target.name]: e.target.value,
      })
      );
  }
    
    async function handleSubmit(e) {
      e.preventDefault();
    //console.log(input);
    let qqq = Object.values(errors);
    //console.log(qqq, "asdasdas");
    if (qqq.length === 0) {
      await dispatch(postPoke(input));
      return alert("Pokemon Created!");   
      
    } else {
      return alert("You must need Complete the form!");    }
    
  }

  function validate(input) {
    let errors = {};    

    if (!input.name) {
      errors.name = "Name is required";
    }    
    if (input.types.length === 0) {
      errors.types = "Types are required";
    }
    if (isNaN(input.life)) {
      errors.life = "Must be a Number!";
    }
    if (isNaN(input.attack)) {
      errors.attack = "Must be a Number!";
    }
    if (isNaN(input.defense)) {
        errors.defense = "Must be a Number!";
      }
    if (isNaN(input.speed)) {
        errors.speed = "Must be a Number!";
      }
      if (isNaN(input.weight)) {
        errors.weight = "Must be a Number!";
      }
      if (isNaN(input.height)) {
        errors.height = "Must be a Number!";
      }

    return errors;
  }

  return (      
      <div className={style.todo}>
      <div className={style.h}>
        <div className={style.conta}>
          <div className={style.info}>
            <form onSubmit={handleSubmit}>
              <h1> Create a new Pokemon! </h1>
              <div className={style.inp}>
                <label>
                  <b>• Name </b>
                </label>
                <hr />
                <input
                  className={`${errors.name && style.danger}`}
                  placeholder="Name..."
                  type="text"
                  name="name"
                  onChange={(e) => {handleChange(e)}}
                  value={input.name}
                />
                <label>
                  {errors.name && (
                    <p className={style.danger}>{errors.name}!</p>
                  )}
                </label>
              </div>
              <div className={style.inp}>
                <label>
                  <b>• Life </b>
                </label>
                <hr />
                <input
                  placeholder="Life..."
                  type="text"
                  name="life"
                  onChange={(e) => {handleChange(e)}}
                  value={input.life}
                />
                {errors.life && (
                  <p className={style.danger}>{errors.life}</p>
                )}
              </div>   
              <div className={style.inp}>
                <label>
                  <b>• Attack </b>
                </label>
                <hr />
                <input
                  placeholder="Attack..."
                  type="text"
                  name="attack"
                  onChange={(e) => {handleChange(e)}}
                  value={input.attack}
                />
              </div>
              {errors.attack && (
                <p className={style.danger}>{errors.attack}</p>
              )}
              <div className={style.inst}>
                <p>
                  <b>• Defense </b>
                </p>
                <hr />
                <input
                  className={`${errors.defense && style.danger}`}
                  placeholder="Defense..."
                  type="text"
                  name="defense"
                  onChange={(e) => {handleChange(e)}}
                  value={input.defense}
                />
                {errors.defense && (
                  <p className={style.danger}>{errors.defense}!</p>
                )}
              </div>
              <div className={style.inp}>
                <label>
                  <b>• Speed </b>
                </label>
                <hr />
                <input
                  placeholder="Speed..."
                  type="text"
                  name="speed"
                  onChange={(e) => {handleChange(e)}}
                  value={input.speed}
                />
                {errors.speed && (
                  <p className={style.danger}>{errors.speed}</p>
                )}
              </div>
              <div className={style.inp}>
                <label>
                  <b>• Weight </b>
                </label>
                <hr />
                <input
                  placeholder="Weight..."
                  type="text"
                  name="weight"
                  onChange={(e) => {handleChange(e)}}
                  value={input.weight}
                />
                {errors.weight && (
                  <p className={style.danger}>{errors.weight}</p>
                )}
              </div>
              <div className={style.inp}>
                <label>
                  <b>• Height </b>
                </label>
                <hr />
                <input
                  placeholder="Height..."
                  type="text"
                  name="height"
                  onChange={(e) => {handleChange(e)}}
                  value={input.height}
                />
                {errors.height && (
                  <p className={style.danger}>{errors.height}</p>
                )}
              </div>


              <div className={style.inst}>
                <p>
                  <b>• Types</b>
                  {errors.types && (
                    <p className={style.danger}>{errors.types}!</p>
                  )}
                </p>
                <hr />
              </div>
              <div className={style.check}>
              <p>flying</p>
                <input
                  type="checkbox"
                  className="in"
                  value="1"
                  onChange={(e) => {handleChange(e)}}
                />
                <p>ground</p>
                <input
                  type="checkbox"
                  className="in"
                  value="2"
                  onChange={(e) => {handleChange(e)}}
                />
                <p>ghost</p>
                <input
                  type="checkbox"
                  className="in"
                  value="3"
                  onChange={(e) => {handleChange(e)}}                />
                <p>steel</p>
                <input
                  type="checkbox"
                  className="in"
                  value="4"
                  onChange={(e) => {handleChange(e)}}
                />
                <p>electric</p>
                <input
                  type="checkbox"
                  className="in"
                  value="5"
                  onChange={(e) => {handleChange(e)}}
                />
                <p>psychic</p>
                <input
                  type="checkbox"
                  className="in"
                  value="6"
                  onChange={(e) => {handleChange(e)}}
                />
                <p>dragon</p>
              </div>
              <div className={style.check}>
                <input
                  type="checkbox"
                  className="in"
                  value="7"
                  onChange={(e) => {handleChange(e)}}
                />
                <p>fighting</p>
                <input
                  type="checkbox"
                  className="in"
                  value="8"
                  onChange={(e) => {handleChange(e)}}
                />
                <p>rock</p>
                <input
                  type="checkbox"
                  className="in"
                  value="9"
                  onChange={(e) => {handleChange(e)}}
                />
                <p>water</p>
                <input
                  type="checkbox"
                  className="in"
                  value="10"
                  onChange={(e) => {handleChange(e)}}
                />
                <p>dark</p>
                <input
                  type="checkbox"
                  className="in"
                  value="11"
                  onChange={(e) => {handleChange(e)}}
                />
                <p>normal</p>
                <input
                  type="checkbox"
                  className="in"
                  value="12"
                  onChange={(e) => {handleChange(e)}}
                />
                <p>bug</p>
                <input
                  type="checkbox"
                  className="in"
                  value="13"
                  onChange={(e) => {handleChange(e)}}
                />
                <p>grass</p>
                <input
                  type="checkbox"
                  className="in"
                  value="14"
                  onChange={(e) => {handleChange(e)}}                />
                <p>fairy</p>
                <input
                  type="checkbox"
                  className="in"
                  value="15"
                  onChange={(e) => {handleChange(e)}}                />
                <p>poison</p>
                <input
                  type="checkbox"
                  className="in"
                  value="16"
                  onChange={(e) => {handleChange(e)}}                />
                <p>fire</p>
                <input
                  type="checkbox"
                  className="in"
                  value="17"
                  onChange={(e) => {handleChange(e)}}                />
                <p>ice</p>
                <input
                  type="checkbox"
                  className="in"
                  value="18"
                  onChange={(e) => {handleChange(e)}}                />
                <p>shadow</p>
                <input
                  type="checkbox"
                  className="in"
                  value="19"
                  onChange={(e) => {handleChange(e)}}                />
                <p>unknown</p>
                <input
                  type="checkbox"
                  className="in"
                  value="20"
                  onChange={(e) => {handleChange(e)}}                />{" "}
                <p>Free</p>
              </div>
              <div className={style.button}>
                <button type="submit"> Create Pokemon</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>     
  );
}


//export default connect(null, null)(Create);