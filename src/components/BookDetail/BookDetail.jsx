import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../../utility/addToDb';

const BookDetail = () => {

    const {bookId} = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();

    const book = data.find(book => book.bookId === id)

    // console.log(data, book, bookId, id)

    const {bookId: currentBookId, image, bookName,  author, tags, category, review, yearOfPublishing, totalPages, publisher} = book;

    const handleMarkAsRead = (id) =>{
        /* 
        * 1. Understand what to store or save -> bookId
        * 2. Where to store: database
        * 3. array, list, collection: 
        * 4. check: if the book is already in the readList.
        * 5. if not, then add the book to the list
        * 6. if yes, do not add the book
        */
       addToStoredReadList(id);
    }

    return (
        <div className='my-12 max-w- mx-auto'>
          
          <div className='flex gap-9'>
          <div>
          
            <img className='w-auto h-auto' src={image} alt="" />
          </div>

        <div>
            <h2>{bookName}</h2>
            <p className='mb-3'>By: {author}</p>
            <hr />
            <p>{category}</p>
            <hr />
            <p className='mb-3'>{review}</p>
            <p className='mb-3'>{tags}</p>
            <hr />
            <p className='mb-2'>Number of Pages: {totalPages}</p>
            <p className='mb-2'>Publisher: {publisher}</p>
            <p className='mb-2'>Year of Publishing: {yearOfPublishing}</p>


        </div>
          </div>

        <div>
        <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-outline mr-4 btn-accent">Mark as Read</button>
        <button className="btn btn-accent">Add to WishList</button>
        </div>

    </div>
    );
};

export default BookDetail;