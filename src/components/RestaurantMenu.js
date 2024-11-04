import { useEffect, useState, useParams } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resData = useRestaurantMenu(resId);
  const [showIndex,setShowIndex] = useState(0)

  // console.log(resData); // Debugging log to inspect the structure of resData

  if (resData === null) return <Shimmer />;

  // const { text } = resData?.data?.cards[0]?.card?.card || {};
  // const { cost } = resData?.data?.cards[2]?.card?.card?.info?.costForTwo || {};

  // Safely access itemCards
  const itemCards = 
    resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    // console.log(itemCards)
 
  // Filter categories only if itemCards exists and has elements
  const category = itemCards.length > 0 
    ? itemCards.filter(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    : [];
    // console.log(category)

    // console.log(resData?.data?.cards[2]?.card?.card?.info?.name)
    // console.log(resData?.data?.cards[2]?.card?.card?.info?.cuisines?.join(","))
    // console.log(resData?.data?.cards[2]?.card?.card?.info?.costForTwo)


  return (
    <div className="mt-6 flex flex-col items-center justify-center  w-6/12 mx-auto"  >
    <h1 className="font-bold">{resData?.data?.cards[2]?.card?.card?.info?.name}</h1>
    <p className="font-bold">{resData?.data?.cards[2]?.card?.card?.info?.cuisines?.join(",")}- {resData?.data?.cards[2]?.card?.card?.info?.costForTwo/100}</p>
    {
      category.map((c , index) => (
          <RestaurantCategory data={c?.card?.card} 
            showItems={index === showIndex ? true:false}
            setShowIndex={() => setShowIndex(index)}
          />
      ))
    }
   
      
    </div>
  );
};

export default RestaurantMenu;
