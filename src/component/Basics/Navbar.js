import React from 'react'

const NavBar = ({filterItem, menuList}) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">

          {
            menuList.map((curElem)=>{
              
              return (
                <button className="btn-group__item" onClick={() => { filterItem(curElem) }}>{curElem}</button>
                )
            })
          }





          {/* <button className="btn-group__item" onClick={() => { filterItem("breakfast") }}>Breakfast</button>
          <button className="btn-group__item" onClick={() => { filterItem("lunch") }}>Lunch</button>
          <button className="btn-group__item" onClick={() => { filterItem("snacks") }}>Snacks</button>
          <button className="btn-group__item" onClick={() => { filterItem("dinner") }}>Dinner</button>
          <button className="btn-group__item" onClick={() => { setMenuData(Menu) }} >All</button> */}
        </div>
      </nav>
    </>
  )
}

export default NavBar
