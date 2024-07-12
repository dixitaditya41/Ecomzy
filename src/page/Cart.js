import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";


const Cart=()=>{

   const {cart} = useSelector((state)=>state)
   const [totalAmount,settotalAmount]=useState(0);

   useEffect(()=>{
    settotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));

   },[cart])
   

    return(<div >
        {

            cart.length >0 ?(
            <div className="mx-auto max-w-6xl p-2 space-x-5 space-y-10 min-h-[80vh] flex ">
            <div className=""> 
             {
                cart.map((item,index)=>{
                    return( <CartItem key={item.id} item={item} itemIndex ={index}/>)
                })
             }
            </div>
            <div className="w-7/12 flex flex-col justify-between">
              
              <div className="flex flex-col">
              <div className="text-green-600 text-3xl font-semibold ">Your Cart</div> 
              <div className="text-green-600 text-5xl font-semibold ">Summary</div>
              <p className="mt-4 space-x-2">
                <span className="font-semibold">Total Items: {cart.length}</span>
              </p>
              </div> 
                
                <div className="">
                    <div className="flex space-x-2 ">
                  <p className="font-normal text-lg">Total Amount:</p> 
                  <p className="font-semibold text-lg ">{`$${totalAmount}`}</p>
                    </div>
                
                  <button className="w-9/12 bg-green-600 h-10 rounded-md mt-2 text-white font-semibold">CheckOut Now</button>
               </div> 
                     
            </div>
           </div>
            )
            :
            (
                <div className="flex flex-col justify-center items-center h-screen w-screen">
                    <h1 className="text-3xl font-semibold mb-3">Cart is Empty !!</h1>
                    <Link to={'/'}>
                     <button className=" bg-green-600 h-10 w-50 p-2 font-medium text-white text-center 
                     rounded-[8px] border border-green-600 hover:bg-gray-700 hover:border-none hover:scale-125 transition duration-200 ease-in ">Shop Now</button>
                    </Link>
                </div>
            )
        }




    </div>)
}

export default Cart;