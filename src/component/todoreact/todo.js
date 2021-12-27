import React, { useState, useEffect } from 'react'
import "./style.css"

//get local storage data
const getLocalData = () =>{
  const lists = localStorage.getItem("todolist")
  if(lists){
    return JSON.parse(lists)
  }else{
    return []
  }
}

const Todo = () => {
  const initialData = ""
  const [inputData, setInputData] = useState(initialData)
  const [items, setItems] = useState(getLocalData())
  const [isEditedItem, setIsEditedItem] = useState("")
  const [toggleButton, setToggleButton] = useState(false)

  //addItem function
  const addItem = () => {
    if (!inputData) {
      alert("please fill data")
    }
    else if(inputData && toggleButton){
      setItems(
        items.map((currElem) => {
          if(currElem.id===isEditedItem){
            return {...currElem, name:inputData}
          }
          return currElem
        })
      )
      setInputData("")
      setIsEditedItem(null)
      setToggleButton(false)
    }
    else {
      const newInputData = {
        id: new Date().getTime().toString(),
        name: inputData
      }
      setItems([...items, newInputData])
      setInputData("")
    }
  }

  //edit item
  const editItem = (index) =>{
    const edited_item = items.find((currElem)=>{
      return currElem.id === index
    })
    setInputData(edited_item.name)
    setIsEditedItem(index)
    setToggleButton(true)
  }

  //delete item
  const deleteItem = (index) => {
    const updatedItems = items.filter((currElem) => {
      return currElem.id  !== index
    })
    setItems(updatedItems)
  }

  //remove all items
  const removeAll = () => {
    return setItems([])
  }


  //store items to browser local base and it will be called as localstorage
  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(items))
  }, [items])



  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todologo" />
            <figcaption>List of items</figcaption>
          </figure>
          <div className="addItems">
            <input type="text" placeholder="✍ Add Item"
              className="form-control"
              value={inputData}
              onChange={(event) => setInputData(event.target.value)} />

              {toggleButton ? (<i className="far fa-edit add-btn" onClick={addItem}></i>) : (<i className="fa fa-plus-square add-btn" onClick={addItem}></i>) }
            
          </div>

          {/* show all items */}
          <div className="showItems">
            {items.map((currElem, index) => {
              return (

                <div className="eachItem" key={currElem.id}>
                  <h1>{currElem.name}</h1>
                  <div className="todo-btn">
                    <div className="add-btn">
                      <i class="far fa-trash-alt btn"
                      onClick={()=> deleteItem(currElem.id)}></i>
                    </div>
                    <div className="add-btn">
                      <i class="far fa-edit btn" 
                      onClick={()=>editItem(currElem.id)}></i>
                    </div>
                  </div>
                </div>

              )
            })}

          </div>


          {/* remove all buttons */}
          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove all" onClick={()=>removeAll()}>
              <span>check list</span>
            </button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Todo
