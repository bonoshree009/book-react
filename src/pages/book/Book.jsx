import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";

const Book = ({singleBook}) => {
    console.log(singleBook)
   
    return (
      <div className="card bg-base-100 w-94 shadow-sm border-1 border-gray-100 p-6">
  <figure className=' bg-[#313d49] rounded' >
    <img className='h-[200px] p-4'
      src= {singleBook.image}
      alt="Shoes" />
  </figure>

  <div className="card-body">
      

      <div className='flex justify-center gap-10'>
        {
          singleBook.tags.map(tag => <button className='btn'>{tag}</button>)
            
           }
</div>
    <h2 className='text-xl font-bold'>{singleBook.bookName}
       <div className="badge badge-secondary ml-3">{singleBook.yearOfPublishing} </div>
 </h2>
    
   
     <p>By :{singleBook.author}</p>
    <div className="card-actions justify-end border-t-1 border-dashed py-4">
      <div className="badge badge-outline">{singleBook.category}</div>
      <div className="badge badge-outline">{singleBook.rating} <FaStarHalfAlt /></div>
    </div>
  </div>
</div>
    );
};

export default Book;