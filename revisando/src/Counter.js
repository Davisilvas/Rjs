import React, {useState, useEffect} from "react";

    function Counter(props){

        const [count, setCount] = useState(props.count);

        //equivalente ao DidMount e DidUpdate
        useEffect(()=>{
            setCount(parseInt(localStorage.getItem("count")));

            return () =>{
                console.log('Acabou a Farra')
            }
        },[])
        
        useEffect(()=>{
            document.title=count
            localStorage.setItem("count", count);
        },[count]);

        function add(){
            setCount(count + 1);
        }
        
        return(
        // como não é uma clase mais e sim uma função, não precisa mais do this
            <div>
                <h1>Counter: {count}</h1>
                <button onClick={add}>Add</button>
            </div>
        )
    }

export default Counter;