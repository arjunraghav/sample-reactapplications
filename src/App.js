import React from 'react'
import Rest from "./component/Basics/Rest";
import UseState from "./component/Hooks/useState"
import UseEffect from "./component/Hooks/useEffect"
import UseReducer from "./component/Hooks/useReducer"
import Todo from "./component/todoreact/todo"
import Temp from "./component/weather/temp"

const App = () => {
  return (
    <div>
      <Temp/>
      {/* <Todo/> */}
      {/* <UseReducer/> */}
      {/* <UseEffect/> */}
      {/* <UseState/> */}
      {/* <Rest/> */}
    </div>
  )
}

export default App





// const App = () => {
//   return React.createElement(
//     "div", 
//     {}, 
//     React.createElement("h2", {}, "Hello world")
//     )
// };