import React, { useEffect, useState } from "react";
import { apiUrl , filterData } from "./data";
import Navbar from "./component/Navbar";
import Filter from "./component/Filter";
import Cards from "./component/Cards";
import LoadingCircle from "./component/LoadingCircle";
import { toast } from "react-toastify";

const App = () => {

  const [courses , setCourses] = useState([]);
  const [ loading , setLoading ] = useState(true);
  const [ catagory , setCatagory ] = useState( filterData[0].title );

  async function fetchData(){
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      // output
      setCourses(output.data);
    }
    catch(err){
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchData();
  }, [] );

  return (
    <div className=" min-h-screen flex flex-col bg-bgDark2 " >
      <Navbar/>

      <div  >
        <Filter FilterData = {filterData} setCatagory = {setCatagory}   />

        {
          loading ? (<LoadingCircle/>) : (<Cards coursess = {courses}  catagory = {catagory} />)
        }
      </div>

    </div>
  );
};

export default App;
