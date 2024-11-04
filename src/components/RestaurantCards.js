import { RES_URL } from "../utils/constants";

const RestaurantCards = (props) => {
  const res = props.resData;

  return (
    <div className="res-card m-4 p-4 w-[200px] border border-solid border-gray-200 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-white bg-gray-50">
      <img
        className="res-logo w-full h-32 object-cover rounded-t-lg" // Ensuring the image covers the card properly
        src={RES_URL}
        alt={`${res.info.name} logo`} // Accessibility improvement
      />
      <h3 className="text-lg font-semibold mt-2">{res.info.name}</h3>
      <h4 className="text-gray-600">{res.info.locality}</h4>
      <h4 className="text-gray-800 font-bold">{res.info.avgRating} ⭐</h4>
    </div>
  );
};

export default RestaurantCards;
