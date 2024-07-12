import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { add,remove } from "../redux/slice/CartSlice";

const Product=({post})=>{

     const {cart} = useSelector((state)=>state);
     const dispatch = useDispatch();

     function addtoCart()
     {
           dispatch(add(post));
           toast.success("Item added to Cart");
     }
     function removeFromCart()
     {
           dispatch(remove(post.id));
           toast.error("Removed item from Cart");
     }
    

    return(<div className="flex flex-col justify-between cursor-pointer items-center hover:scale-110
            transition duration-300 ease-in hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] p-4 mt-10
            gap-3 ml-5 rounded-xl">

            <div>
            <p className="text-slate-700 font-semibold text-lg text-left truncate mt-1 w-40">{post.title}</p>
            </div>

            <div>
            <p className="w-40 text-gray-400 font-normal text-left text-[10px]">
              {post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
            </div>
            
            <div className="h-[180px]">
             <img src={post.image} className="h-full w-full"></img>
            </div>
            
            <div className="flex justify-between gap-12 items-center w-full mt-5">
            <div>
            <p className="text-green-600 font-semibold">{"$"+post.price}</p>
            </div>

            <div>
                
               {
                
                  cart.some((p)=>p.id ===post.id)?(
                    <button className="text-gray-700 border-2 border-gray-700 rounded-full text-[12px] 
                     p-1 px-3 uppercase font-semibold hover:bg-gray-700 hover:text-white 
                     transition duration-300 ease-in"
                    onClick={removeFromCart}>
                        Remove Item
                    </button>
                  ):(
                    <button className="text-gray-700 border-2 border-gray-700 rounded-full text-[12px] 
                     p-1 px-3 uppercase font-semibold hover:bg-gray-700 hover:text-white 
                     transition duration-300 ease-in"
                    onClick={addtoCart}>
                         Add to Cart
                    </button>
                  )

               }
                
            </div>

            </div>
           
    </div>)
}

export default Product;