import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppName from './components/AppName';
import { Button } from 'bootstrap';
import Display from './components/Display';
import ButtonsContainer from './ButtonsContainer';
function App() {

  let [calVal,setcalVal]=useState("");
  const onButtonClick=(buttonText)=>{
    if(buttonText==='C'){
      setcalVal("");
    }
    else if(buttonText==='='){
      const result=eval(calVal);
      setcalVal(result);
    }
    else {
      const newDisplayValue=calVal+buttonText;
      setcalVal(newDisplayValue);
    }
  }



  return (
    <div className='calculator'>
      <AppName/>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
      {/* <div className='container'>
        <Buttons symbol={'*'} />
      </div> */}
    </div>
  )
}

export default App
