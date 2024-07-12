import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../logo.png";
const NavBar=()=>{

  const {cart} = useSelector((state)=>state);
  
    return(<div>

       <nav className="flex justify-between max-w-6xl items-center h-20 mx-auto">
        <NavLink to="/">
             <div className="ml-5">
             <img src={logo} className="h-14" /> 
             </div>
       </NavLink>
       
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          
          <NavLink to="/"><p>Home</p></NavLink>
          <NavLink to="/cart"><div className="relative">
            <FaShoppingCart className="text-2xl"/>  
            {
             cart.length>0 && <span className="bg-green-500 h-5 w-5 text-xs absolute -top-1 -right-2
             flex animate-bounce rounded-full justify-center items-center text-white">{cart.length}</span>
            }
            </div></NavLink>

        </div>

        </nav>
    </div>)
}

export default NavBar;