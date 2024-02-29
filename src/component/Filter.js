import React from 'react'

const Filter = ( {FilterData , setCatagory } ) => {

    function filterClickHandler(title){
        setCatagory( title );
    }

  return (
    <div className=' w-11/12 flex flex-wrap mx-auto gap-4 py-4 justify-center ' >
        {
            FilterData.map( (data) => {
                return(
                    <button className=' text-lg px-2 py-1 rounded-md font-medium text-white bg-black border-[2px]  hover:bg-opacity-50 transition-all duration-300 '  
                    key={data.id} 
                    onClick={() => filterClickHandler(data.title)}    >

                        {data.title}
                    
                    </button>
                ); 
            })
        }
    </div>
  );
}

export default Filter;