import './App.css';
import {useEffect,useState} from 'react'
function App() {
  useEffect(()=>{
    console.log("Hello");
    GetJokes();
  },[]);
  async function GetJokes(){
    const fecthdata=await fetch("https://v2.jokeapi.dev/joke/Programming");
    const data=await fecthdata.json();
    console.log(data);
    if(data.joke){
      console.log(data.joke);
      setjoke(data.joke);
      setjoke_(" ");
    }
    else{
      setjoke(data.setup);
      setjoke_(data.delivery);
    }
  }
  const [joke,setjoke]=useState();
  const [joke_,setjoke_]=useState();
  return (
    <div style={{maxWidth:"500px",display:"block"}}>
      <h1 className="head1">Radom Programming Jokes</h1>
      <br/>
      <h3>{joke}</h3>
      <br/>
      <h3>{joke_}</h3>
      <br/>
      <br/>
      <center>
      <button onClick={GetJokes}>Random Jokes</button>
      </center>
    </div>
  );
}

export default App;
