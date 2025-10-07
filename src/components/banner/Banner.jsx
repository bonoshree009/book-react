import React from 'react';
import bookimg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex  flex-col gap-4 justify-between items-center p-16 w-full bg-[#313d49] rounded md:0 md:flex-row my-10'>
          <div className='flex-1'>
            <h1 className=' text-2xl md:text-5xl'>Books to freshen up your bookshelf.</h1>
             <button className='btn bg-[#1D232A] mt-5'>View The List</button>
          </div>
          <div className='flex-1 '><img src={bookimg} alt="" /></div>
        </div>
    );
};

export default Banner;