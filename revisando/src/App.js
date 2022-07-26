import './App.css';
import Header from './header';
import Counter from './Counter';
import { useEffect, useState } from 'react';

function App() {

  const [show, setShow] = useState(true);
  
  let time = 0;

  useEffect(()=>{
    let timer = setInterval(() =>{
      time++;
      console.log(time)
      if(time > 5){
        clearInterval(timer);
        setShow(false)
      }
    }, 1000)
  },[])

  if (show){
    return (
      <div>
        <Header name="Davi Silva" items ={['Buy', 'About', 'Contact', 'Register/Login']}></Header>
        <Counter count={21}></Counter>
      </div>
    )
  }else{
    return (
      <div>
        <Header name="Davi Silva" items ={['Buy', 'About', 'Contact', 'Register/Login']}></Header>
        Sem contador
      </div>
    )
  }
}
export default App;
