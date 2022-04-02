import React from "react";
import Counter from "../Counter/Counter";
import './CounterBox.css'

const CounterBox = () => {
  return <>
      <section className="CounterBox">
        <Counter limit = {100} step ={5} name={"Total pass"}></Counter>
        <Counter limit = {1000} step ={50} name={"total student"}></Counter>
        <Counter limit = {10000} step ={500} name={"total year"}></Counter>
      </section>
  </>;
};

export default CounterBox;
