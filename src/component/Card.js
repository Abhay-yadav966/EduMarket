import React from 'react'
import {FcLike } from "react-icons/fc";
import { FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";


const Card = ({course , likedCourses , setLikedCourses }) => {


    function clickHandler(){
        if( likedCourses.includes(course.id) ){
            // matlab course pahala se liked h toh click krna pe use remove krna h
            setLikedCourses( (prev) => prev.filter( (cid) => cid !== course.id  ) );
            toast.warning("Liked Removed");
        }
        else{
            // pahala se like nhi h
            if( likedCourses.length === 0 ){
                // inserting first element
                setLikedCourses([course.id]);
            }
            else{
                // pahala se elements h
                setLikedCourses( (prev) =>  [...prev , course.id]  );

            }
            toast.success("Liked Successfully");
        }
    }


  return (
    <div className=' w-[300px] h-[330px] bg-bgDark bg-opacity-90 rounded-md overflow-hidden ' >
        <div className='relative' >
            <img src={course.image.url} alt="" />
            <div className=' w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] flex justify-center items-center ' >
                <button onClick={clickHandler} >
                    {
                        likedCourses.includes(course.id) ? (<FcLike fontSize={"1.75rem"} />) : (<FcLikePlaceholder fontSize={"1.75rem"} />) 
                    }
                </button>
            </div>
        </div>
        <div className='p-4' >
            <p className=' font-semibold text-white text-lg leading-6  ' >{course.title}</p>
            <p className='mt-2 text-white' >
                {
                    course.description.length > 100 ? ( `${course.description.substring(0 , 100)}....` ) : ( course.description ) 

                }
            </p>
        </div>
    </div>
  )
}

export default Card;