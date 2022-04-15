import React from 'react';
import clouds from '../assets/clouds.jpeg';
import { loremIpsum } from 'lorem-ipsum';

const Home = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className=' flex w-full card bg-base-100 shadow-xl hover:bg-base-200 m-10'>
        <div className='contents '>
          <img className='object-cover h-80 md: h-64' src={clouds} alt='clouds' />
        </div>
        <div className='card-body'>
          <h2 className='card-title'>Welcome to my personal Website</h2>
          <p>
            {loremIpsum({
              count: 20,
            })}
          </p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
