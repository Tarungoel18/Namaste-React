import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ItemCards = (props) => {
  const items = props?.data;
  const dispatch = useDispatch()
  const addItemhandler=(item) =>{
   dispatch(addItems(item))
  }
  return (
    <div className="p-4 space-y-4 w-full">
      {items.map((item) => (
        <div key={item.card.info.id} className=" p-4 rounded shadow-md ">
          <h2 className="text-lg font-semibold">{item.card.info.name}</h2>
          <h3 className="text-gray-600">{item.card.info.price ? `₹${item.card.info.price / 100}` : `₹${item.card.info.defaultPrice / 100}` }</h3>
          <p className="text-gray-500">{item.card.info.description}</p>
          <button onClick={() => addItemhandler(item)}>Add Item</button>
        </div>
      ))}
    </div>
  );
};

export default ItemCards;
