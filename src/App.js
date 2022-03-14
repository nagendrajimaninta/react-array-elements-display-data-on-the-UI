import React from "react";
import "./style.css";
function MyList(props){
  const elemente = props.data;
  var ary = elemente.map((el)=><li>{el}</li>)
  return <ol type="A">{ary}</ol>
}
export default function App() {
  const arr = ["Nagendra", "Maruthi", "Sreeramulu","Adivamma","Madhu", "Sunitha", "Megha","Taj"];
  return (
    <div>
      <MyList data={arr}/>
      <h1>Array as passed as props(argument) and return U list items</h1>
      <p> :)</p>
    </div>
  );
}
