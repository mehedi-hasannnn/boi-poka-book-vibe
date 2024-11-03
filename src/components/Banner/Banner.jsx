import React from 'react';
import bannerImg from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 p-10 mt-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
    <img className='rounded-2xl'
      src={bannerImg} />
    <div>
      <h1 className="text-5xl font-bold">Books to freashen up your bookshelf!</h1>
      
      <button className=" mt-4 btn btn-primary font-bold">View the List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;