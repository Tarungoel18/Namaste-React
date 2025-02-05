import { useState, useEffect,useContext } from "react";
import RestaurantCards from "./RestaurantCards";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [allResData, setAllResData] = useState([]); // Store the full data
  const [resData, setResData] = useState([]); // Store the filtered data
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const{setUserName} = useContext(UserContext)

  useEffect(() => {
    fetchData();
  }, []);
  // console.log(resData)

  // useEffect(() => {
  //   console.log("Rendered")
  // })

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );

    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const fetchedData =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    // console.log(fetchedData);
    setAllResData(fetchedData); // Store the full data
    setResData(fetchedData); // Initialize the filtered data
  };

  if (resData.length === 0) {
    return <Shimmer />;
  }
  if (onlineStatus === false) return <h1>Internet not connected</h1>;

  return (
    <div className="body min-h-screen ">
      <div className="search flex my-10 justify-evenly">
        <div className="mx-9">
          <input className="border border-solid border-black outline-none text-gray-500 placeholder-gray-500 mx-6"
            type="text"
            placeholder="Search for restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button  className="px-4 cursor-pointer bg-pink-400 hover:text-pink-600 hover:bg-pink-200 px-2 py-1 rounded transition duration-200"
            onClick={() => {
              const filteredData = allResData.filter(
                (res) =>
                  res.info.name &&
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setResData(filteredData);
            }}
          >
            Search
          </button>

          <div>
            <input type="text" className="border border-black"
            onChange={(e) => {
setUserName(e.target.value)
            }}
            ></input>
          
          </div>
        </div>

        <button  className="px-4 cursor-pointer bg-pink-400 hover:text-pink-600 hover:bg-pink-200 px-2 py-1 rounded transition duration-200"
          onClick={() => {
            const topData = allResData.filter(
              (res) => parseFloat(res.info.avgRating) > 4.5
            );
            setResData(topData);
          }}
        >
          Top Rated Restaurants
        </button>



      </div>

      <div className="res-container flex flex-wrap justify-between mx-12">
        {resData.map((res) => (
          <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
            <RestaurantCards resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
