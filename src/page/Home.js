import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home=()=>{

     const API ="https://fakestoreapi.com/products";
     const[loading,setloading]= useState(false);  
     const[posts,setposts] = useState([]);

    async function fetchProductData()
    {
         setloading(true);

         try{
 
              const res = await fetch(API);
              const data =await res.json();
              setposts(data);
             console.log("data",posts);
         }
         catch(error)
         {
          console.log("error occured");
          setposts([]);
         }
         setloading(false);
    }
   
    useEffect(()=>{
        fetchProductData()
    },[]);

    return(<div>
  {
       loading? <Spinner/> : 

       posts.length>0 ? (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
        mx-auto max-w-6xl p-2 space-x-5 space-y-10 min-h-[80vh]">
        {
            posts.map((post)=>(
               <Product key={post.id} post={post} />
           ))
        }
       </div> 
        )
          : 
       <div className="flex justify-center items-center">
        <p> No Posts found</p>
        </div>

  }
    </div>)
}

export default Home;