import React, { Suspense, useState } from 'react';
import Book from '../book/Book';


const Books = ({data}) => {
    const [books,setbooks]= useState([])

   
    return (
        <div className='grid grid-cols-1 md:grid-cols-3  justify-items-center gap-y-2'>
         <Suspense fallback={'loading.....'}> 
            {
                data.map((singleBook)=> <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
            }

        
         </Suspense> 
        </div>
    );
};

export default Books;