import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/Authprovider";

const Navber = () => {
  const {user, logOutsec} = useContext(AuthContext);
  const handleLogout = ()=>{
    logOutsec()
    .then()
    .catch()
  }
  const NavItem = (
    <>
      <li>
        <a
          href="/"
          className="text-black hover:text-red-500 text-2xl font-semibold"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="/about"
          className="text- hoveblackr:text-red-500 text-2xl font-semibold"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="/contact"
          className="text-black hover:text-red-500 text-2xl font-semibold"
        >
          Contact
        </a>
      </li>
      <li>
        <a
          href="/addcoffee"
          className="text-black hover:text-red-500 text-2xl font-semibold"
        >
          Addcoffee
        </a>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-gray-400">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            ></ul>
          </div>
          <div className="flex">
            <img
              className="h-12 w-12"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS2nPmTCZXdkGeutYrA_R4gXC2v7UGAvi7GPJpwTMdb5yNRsPFRablpUh4AhEypVVCmMY&usqp=CAU"
              alt=""
            />
            <a className="btn btn-ghost text-xl">CoFFee Shop</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavItem}</ul>
        </div>
        <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src='' />
          </div>
        </label>
        {
          user ?
        <button onClick={handleLogout} className="btn bg-yellow-300">Log out</button> 
         :
         <Link to='/singin'>
           <button className="btn">Log in</button> 
         </Link>
        }
      </div>
      </div>
    </div>
  );
};

export default Navber;
