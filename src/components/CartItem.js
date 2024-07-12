
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { remove } from "../redux/slice/CartSlice";


const CartItem=({item,itemIndex})=>{

   const dispatch= useDispatch();
   const cart = useSelector((state) => state.cart);
   function removefromCart()
   {
      dispatch(remove(item.id));
      toast.error("Item Removed From Cart");
   }

   return (
      <div
        className={`flex justify-between items-center md:gap-14 md:px-9 md:py-6  border-b-gray-700 text-slate-600
                       ${item.id !== cart[cart.length - 1].id && " border-b-2"} gap-6 px-3 py-2 `}
      >
        <img
          src={item.image}
          alt="product"
          className="md:w-[165px] sm:w-[100px] w-[60px] transition-all duration-500"
        />
  
        <div className="flex flex-col md:gap-5 w-full">
          <p className="font-semibold sm:text-xl">{item.title}</p>
  
          <p className=" md:text-base sm:text-[13px] text-[10px] ">
            {item.description.split(" ").slice(0, 15).join(" ") + "..."}
          </p>
  
          <div className="flex justify-between items-center">
            <p className="text-green-600 font-bold sm:text-lg  text-base">
              ${item.price}
            </p>
  
            <button
              onClick={ removefromCart}
              className=" bg-neutral-300 flex items-center justify-center sm:p-3 rounded-full mr-2
                                  p-1"
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    );
  };
export default CartItem;