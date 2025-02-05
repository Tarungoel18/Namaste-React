import { useDispatch, useSelector } from "react-redux";
import ItemCards from "./ItemCards";
import { clearCart } from "../utils/cartSlice";
   
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items)
  const dispatch = useDispatch();
  const handleClearCart = () => {
     dispatch(clearCart())
  }
  return (
    <div className="w-6/12 m-auto">
    <button className="bg-black text-white"  
    onClick={handleClearCart}
    > Clear Cart</button>
    <ItemCards data = {cartItems}/>
    </div>
  );

};
export default Cart;



// const Cart = () => {
//   const cartItems = useSelector((store) => store.cart.items);
//   return (
//     <div>
//       <ItemCards data={cartItems} />
//     </div>
//   );
// };

// export default Cart;
