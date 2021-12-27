import React, {useState} from 'react'
import "./styles.css";
import Menu from "./menuapi.js";
import MenuCard from "./MenuCard.js"
import Navbar from "./Navbar.js"


// for All filter
const uniqueList = [...new Set(
    Menu.map((curElem) => {
        return curElem.category
    })), "All"]



const Rest = () => {
 
    // react hook
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList)

    // filter category
    const filterItem = (category) =>{

        if(category === "All"){
            setMenuData(Menu)
            return
        }
        const updateList = Menu.filter((curElem) => {
            return curElem.category === category
        })
        setMenuData(updateList)
    }
    
    
    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList}/>
            <MenuCard propsData={menuData}/>
        </>
    )
}

export default Rest









    // const [menuData, setMenuData] = React.useState(Menu); without using ,{useState} important to declare hook first in func
    // react hooks used to poss props data from parent to child to be used inside child
