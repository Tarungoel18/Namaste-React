import { useState } from "react";
import ItemCards from "./ItemCards";
const RestaurantCategory = (props) => {
  const {showItems}=props
  const {setShowIndex}=props
  // console.log(props?.data?.itemCards)
  // const [showItem,setShowItem] =useState(false)
  const [toggle ,setToggle] = useState(false)
  const handleClick =() => {
  //  setShowItem(!showItem)
    
      setShowIndex()
      setToggle(!toggle)

  }
  return(
    <>
       <div className="flex bg-slate-100 w-full justify-between mx-8 mb-4 p-4 shadow-xl cursor-pointer" onClick={handleClick}>
    <h1>{props?.data?.title} ({props?.data?.itemCards.length})</h1>
    <h1>⬇️</h1>
    </div>
       { toggle && showItems && <ItemCards data={props?.data?.itemCards} />}
    </>
   
  )

}
export default RestaurantCategory;