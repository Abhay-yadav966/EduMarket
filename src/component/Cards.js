import React from 'react';
import Card from './Card';
import { useState } from 'react';

const Cards = ({coursess , catagory}) => {


  const [ likedCourses , setLikedCourses , ] = useState([]);


  function getCourses(){
    if( catagory == "All" ){
      
      let allCourses = [];
  
      Object.values(coursess).forEach( (coursesDetail_Array) => {
        coursesDetail_Array.forEach( (course) => {
          allCourses.push(course);
        } );
      } );
  
      return allCourses;
    }
    else{
      return( coursess[catagory] );
    }

  }

  return (
    <div className=' w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh] gap-4 mb-4 ' >
        {
          getCourses().map( (course) => {
            return(
              <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
            );
          } )
        }
    </div>
  )
}

export default Cards;