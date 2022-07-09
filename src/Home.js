import { useState , useEffect } from "react";
import BlogsList from "./BlogsList";
import useFetch from "./useFetch";
const Home = () => {
    
const {data , isPending , eror} =useFetch('http://localhost:8000/blogs');

 return ( 
  <div className="home">
        <h2>Homepage</h2>
       {isPending && <div>loading...</div>}
       {eror && <div>{eror} </div>}
        {data && < BlogsList blogs={data} title="All blogs" />}
        

        
      </div>
 );
}
 
export default Home;