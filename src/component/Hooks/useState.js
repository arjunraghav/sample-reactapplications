import React, {useState} from 'react'
import "./style.css"

const UseState = () => {

  const initialData = 1
  const [myNumber, setMyNum] = useState(initialData)




  return (
    <>

      <div className="center_div">
        <p>{myNumber}</p>
        <div className="button2" onClick={() => setMyNum(myNumber +1)}>

          <span></span>
          <span></span>
          <span></span>

          INCR
        </div>


        <div className="button2" onClick={() => myNumber > 0 ? setMyNum(myNumber - 1) : setMyNum(0)}>

          <span></span>
          <span></span>
          <span></span>

          DECR
        </div>

      </div>

    </>
  )
}

export default UseState
