import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    console.log("Rendered Header");
  });

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
            <span className="hover:text-pink-600 hover:bg-pink-100 px-2 py-1 rounded transition duration-200">
              Contact
            </span>
          </li>
          <li
            className="px-4 cursor-pointer hover:text-pink-600 hover:bg-pink-100 px-2 py-1 rounded transition duration-200"
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}
          >
            {btn}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
