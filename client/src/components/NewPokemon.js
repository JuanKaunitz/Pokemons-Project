import React, { useState } from "react";
import style from "./NewPokemon.css";
//import { connect } from "react-redux";
import {  } from "react-router-dom";
import axios from "axios";

export default function NewPokemon() {
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    image:    
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    types: [],
    id:"",
    life: "",
    attack: "",
    defense: "",
    speed: "",
    weight: "",
    height: ""
});

  function handleChange(e) {
    let arr = [];
    let qwe = document.getElementsByClassName("in");
    //console.log(qwe, "hh");
    for (let i = 0; i < qwe.length; i++) {
      if (qwe[i].checked === true) {
        arr.push(qwe[i].value);
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
        [e.target.name]: e.target.value,
      })
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(errors, "erros");
    let qqq = Object.values(errors);
    console.log(qqq, "asdasdas");
    if (qqq.length === 0) {
      console.log("axioss");
      axios
        .post("http://localhost:3001/newPokemon", input)
        .then((res) => alert("Pokemon Created"));
    } else {
      return alert("You must need Complete the form!");
    }
    //   if (errors.name) {
    //     return alert("You must need Complete the form!");
    //   } else if (errors.summary) {
        //     return alert("You must need Complete the form!");
    //   } else if (errors.diets) {
    //     return alert("You must need Complete the form!");
    //   } else if (errors.spoonacularScore) {
    //     return alert("You must need Complete the form!");
    //   } else if (errors.healthScore) {
    //     return alert("You must need Complete the form!");
    //   } else {
    //     axios
    //       .post("http://localhost:3001/recipe", input)
    //       .then((res) => alert("Receta Creada"));
    //   }
  }

  function validate(input) {
    let errors = {};    

    if (!input.name) {
      errors.name = "Name is required";
    }
    if (!input.id) {
      errors.id = "Id is required";
    }
    if (input.types.length === 0) {
      errors.types = "Types are required";
    }
    if (isNaN(input.life) || !input.life) {
      errors.life = "Must be a Number!";
    }
    if (isNaN(input.attack) || !input.attack) {
      errors.attack = "Must be a Number!";
    }
    if (isNaN(input.defense) || !input.defense) {
        errors.defense = "Must be a Number!";
      }
    if (isNaN(input.speed) || !input.speed) {
        errors.speed = "Must be a Number!";
      }
      if (isNaN(input.weight) || !input.weight) {
        errors.weight = "Must be a Number!";
      }
      if (isNaN(input.height) || !input.height) {
        errors.height = "Must be a Number!";
      }

    return errors;
  }

  return (
      <form >
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
                  name="Name"
                  onChange={handleChange}
                  value={input.name}
                />
                <label>
                  {errors.name && (
                    <p className={style.danger}>{errors.name}!</p>
                  )}
                </label>
              </div>
              <div className={style.inst}>
                <p>
                  <b>• Id </b>
                </p>
                <hr />
                <input
                  className={`${errors.id && style.danger}`}
                  placeholder="Id..."
                  type="text"
                  name="Id"
                  onChange={handleChange}
                  value={input.id}
                />

                {errors.id && (
                  <p className={style.danger}>{errors.id}!</p>
                )}
              </div>

              <div className={style.inp}>
                <label>
                  <b>• Life </b>
                </label>
                <hr />
                <input
                  placeholder="Life..."
                  type="text"
                  name="Life"
                  onChange={handleChange}
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
                  name="Attack"
                  onChange={handleChange}
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
                  name="Defense"
                  onChange={handleChange}
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
                  name="Speed"
                  onChange={handleChange}
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
                  name="Weight"
                  onChange={handleChange}
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
                  name="Height"
                  onChange={handleChange}
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
                  class="in"
                  value="1"
                  onChange={handleChange}
                />
                <p>ground</p>
                <input
                  type="checkbox"
                  class="in"
                  value="2"
                  onChange={handleChange}
                />
                <p>ghost</p>
                <input
                  type="checkbox"
                  class="in"
                  value="3"
                  onChange={handleChange}
                />
                <p>steel</p>
                <input
                  type="checkbox"
                  class="in"
                  value="4"
                  onChange={handleChange}
                />
                <p>electric</p>
                <input
                  type="checkbox"
                  class="in"
                  value="5"
                  onChange={handleChange}
                />
                <p>psychic</p>
                <input
                  type="checkbox"
                  class="in"
                  value="6"
                  onChange={handleChange}
                />
                <p>dragon</p>
              </div>
              <div className={style.check}>
                <input
                  type="checkbox"
                  class="in"
                  value="7"
                  onChange={handleChange}
                />
                <p>fighting</p>
                <input
                  type="checkbox"
                  class="in"
                  value="8"
                  onChange={handleChange}
                />
                <p>rock</p>
                <input
                  type="checkbox"
                  class="in"
                  value="9"
                  onChange={handleChange}
                />
                <p>water</p>
                <input
                  type="checkbox"
                  class="in"
                  value="10"
                  onChange={handleChange}
                />
                <p>dark</p>
                <input
                  type="checkbox"
                  class="in"
                  value="11"
                  onChange={handleChange}
                />
                <p>normal</p>
                <input
                  type="checkbox"
                  class="in"
                  value="12"
                  onChange={handleChange}
                />
                <p>bug</p>
                <input
                  type="checkbox"
                  class="in"
                  value="13"
                  onChange={handleChange}
                />
                <p>grass</p>
                <input
                  type="checkbox"
                  class="in"
                  value="14"
                  onChange={handleChange}
                />
                <p>fairy</p>
                <input
                  type="checkbox"
                  class="in"
                  value="15"
                  onChange={handleChange}
                />
                <p>poison</p>
                <input
                  type="checkbox"
                  class="in"
                  value="16"
                  onChange={handleChange}
                />
                <p>fire</p>
                <input
                  type="checkbox"
                  class="in"
                  value="17"
                  onChange={handleChange}
                />
                <p>ice</p>
                <input
                  type="checkbox"
                  class="in"
                  value="18"
                  onChange={handleChange}
                />
                <p>shadow</p>
                <input
                  type="checkbox"
                  class="in"
                  value="19"
                  onChange={handleChange}
                />
                <p>unknown</p>
                <input
                  type="checkbox"
                  class="in"
                  value="20"
                  onChange={handleChange}
                />{" "}
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
    </form> 
  );
}


//export default connect(null, null)(Create);