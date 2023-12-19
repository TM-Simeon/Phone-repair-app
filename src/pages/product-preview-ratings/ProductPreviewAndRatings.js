import React from 'react'
import rating5stars from '../../images/rating5stars.png';
import rating4stars from '../../images/rating4stars.png';
import rating3stars from '../../images/rating3stars.png';
import rating2stars from '../../images/rating2stars.png';
import rating1stars from '../../images/rating1star.png';


const ProductPreviewAndRatings = () => {
  return (
    <div className='container max-w-7xl mx-auto px-8'>
      <div className='font-bold text-2xl text-primary'>
        Product Review & Ratings
      </div>
      <div className='flex items-start gap-[20px]'>
        <div className='text-[50px] text-[#000000]'>4.7</div>
        <div>
          <div>
            <div>
              <img src={rating5stars} alt='' />
            </div>
            <div></div>
          </div>
          <div>
            <div>
              <img src={rating4stars} alt='' />
            </div>
            <div></div>
          </div>
          <div>
            <div>
              <img src={rating3stars} alt='' />
            </div>
            <div></div>
          </div>
          <div>
            <div>
              <img src={rating2stars} alt='' />
            </div>
            <div></div>
          </div>
          <div>
            <div>
              <img src={rating1stars} alt='' />
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div>Product Review & Ratings</div>
    </div>
  );
}

export default ProductPreviewAndRatings
