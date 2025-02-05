import { useEffect, useState ,useContext} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btn, setBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {userInfo} = useContext(UserContext)
  useEffect(() => {
    console.log("Rendered Header");
  });

  const cartItems = useSelector((store) =>    store.cart.items)
  console.log(cartItems)
  // console.log("Header component rendered");


  return (
    <div className="flex justify-between items-center bg-pink-50 shadow-xl h-24">
      <div className="logo-container h-full">
        <Link to="/">
          <img className="logo h-full object-cover" src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex items-center">
          <li className="px-4">Online-Status - {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link
              to="/"
              className="hover:text-pink-600 hover:bg-pink-100 px-2 py-1 rounded transition duration-200"
            >
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link
              to="/about"
              className="hover:text-pink-600 hover:bg-pink-100 px-2 py-1 rounded transition duration-200"
            >
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link
              to="/grocery"
              className="hover:text-pink-600 hover:bg-pink-100 px-2 py-1 rounded transition duration-200"
            >
              Grocery
            </Link>
          </li>
          <li className="px-4">
            <Link
            to = "/cart" 
             className="hover:text-pink-600 hover:bg-pink-100 px-2 py-1 rounded transition duration-200">
              Cart -{cartItems.length}
              {/* Cart */}
            </Link>
          </li>
          <li
            className="px-4 cursor-pointer hover:text-pink-600 hover:bg-pink-100 px-2 py-1 rounded transition duration-200"
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}
          >
            {btn}
          </li>

          <li className="text-xl font-bold">{userInfo}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
