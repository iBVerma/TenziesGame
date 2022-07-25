import './App.css';
import React from 'react';
import Dice from './Dice';
import { Button } from 'antd';
import {nanoid} from "nanoid"
import Confetti from 'react-confetti';

function App() {
  const [dice,setdice] = React.useState(allnewDice);
  const[tenzie,settenzie] = React.useState(false)
  const [turn,setturn] = React.useState(0);

  React.useEffect(() =>{
    const allheld = dice.every(die => die.isHeld)
    const first = dice[0].value
    const same = dice.every(die => die.value === first)
    if(allheld && same){
      settenzie(true)
    }
      console.log("changed!")
  },[dice])
  
  function generatedie(){
    return {
      value: Math.floor((Math.random()*6)+1),
      isHeld: false,
      id: nanoid()
    }
  }

  function allnewDice(){
    const newDice = []
    for(let i=0;i<10;i++){
      newDice.push(generatedie())
    }
    return newDice
  }


  function handleclick(){
    if(!tenzie){
      setdice(oldDice => oldDice.map(die => {
        return die.isHeld ? die: generatedie()
      }))
      setturn(prev => prev+1)
    }else{
      setdice(allnewDice)
      settenzie(false)
      setturn(0)
    }
  }

  function click(id){
    console.log(id)
    setdice(prev => prev.map(die => {
      return die.id == id ? {...die,isHeld: !die.isHeld}: die
    }))
    
  }
 
  return (
      <main>
        {tenzie &&  <Confetti />}
        <h1>Tenzies Game</h1>
        <div className="dice-">
          {dice.map(die => <Dice  value = {die.value} isHeld = {die.isHeld} click = {() => click(die.id)}/>)}
        </div>
        <Button className='rolldice' onClick={handleclick}>{tenzie ? "Reset":"Roll"}</Button>
        <h2 className='turns'>No. of Rolls: {turn}</h2>

      </main>
  );
}

export default App;
