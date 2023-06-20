import './App.css';
import Food from "./Components/Food/Food";
import {useEffect, useState} from "react";
import Pizza from "./Components/Pizza/Pizza";

function App() {
    // const [food,setFood]=useState(5555)
    // console.log(food, 'app')

    // let name = 'star'
    // console.log(name, 'app')
  return (
    <div>
        {/*<Food food={food} setFood={setFood}/>*/}
      <Pizza/>
    </div>
  );
}

export default App;
