import {useState,useEffect} from "react"

const useRestaurantMenu = (props) => {
  const [resData, setResData]=useState(null)
  const resId=props
 useEffect(() => {
   fetchData();
 },[])
 


 const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER")
    const json= await data.json();
    setResData(json)
 }

 return resData;
}
export default useRestaurantMenu;