import React, {useState, useEffect} from 'react'
import "./style.css"

const UseEffect = () => {

  const initialData = 1
  const [myData, setMyData] = useState(initialData)

  useEffect(() => {
    document.title = `chats(${myData})`
  }, [])

  return (

    <div className="center_div">
      <p>{myData}</p>
      <div className="button2" onClick={()=>setMyData(myData+1)}>
        <span></span>
        <span></span>
        <span></span>

        B
      </div>    
    </div>
  )
}

export default UseEffect
