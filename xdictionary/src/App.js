import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
const[input ,SetInput] = useState("");
const [dictionary,setDictionay] = useState("");

const value= [

  { word: "React", meaning: "A JavaScript library for building user interfaces." },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." }

]
useEffect(()=>{

}, [input])
  const Sumbitform=(e)=>{
  e.preventDefault();
    if(input==""){
      return;
    }
    const res = value.find((item)=>item.word.toLowerCase().includes(input.toLowerCase()))
    setDictionay(res ? res.meaning : "Word not found.");
  }

  return (
    <div className="">
      <h1>Dictionary App</h1>
      <form onSubmit={Sumbitform}>
        <input type='text' value={input}  onChange={(e)=>SetInput(e.target.value)}placeholder='Search for a word' />
        <button type='submit'>Sumbit</button>
      </form>
      <div>Definition: </div>
       <div>{dictionary}</div>
    </div>
  );
}

export default App;
