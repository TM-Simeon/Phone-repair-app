import React from 'react';
import Button from '../../components/button/Button';
import rating5stars from '../../images/rating5stars.png';
import rating4stars from '../../images/rating4stars.png';
import rating3stars from '../../images/rating3stars.png';
import rating2stars from '../../images/rating2stars.png';
import rating1stars from '../../images/rating1star.png';
import reviewLine from '../../images/reviewLine.png';
import reviewImg from '../../images/reviewImg.png';
import CustomerReview from '../../data/CustomerReview';

const ProductPreviewAndRatings = () => {
  return (
    <div className='bg-[#FFFFEE]'>
      <div className='container max-w-7xl mx-auto px-8 py-11'>
        <div className='font-bold text-2xl text-primary font-heading'>
          Product Review & Ratings
        </div>
        <div className='flex items-start gap-[30px] py-12'>
          <div className='text-5xl text-[#000000] font-bold font-body'>4.7</div>
          <div>
            <div className='flex items-center gap-[32px]'>
              <div>
                <img
                  src={rating5stars}
                  alt='img'
                  className='w-[230px] h-[32px]'
                />
              </div>
              <div>
                <img src={reviewLine} alt='img' className='h-[7px] w-full' />
              </div>
            </div>
            <div className='flex items-center gap-[32px] py-[10px]'>
              <div>
                <img src={rating4stars} alt='' className='w-[230px] h-[30px]' />
              </div>
              <div>
                <img src={reviewLine} alt='img' className='h-[7px] w-full' />
              </div>
            </div>
            <div className='flex items-center gap-[32px]'>
              <div>
                <img src={rating3stars} alt='' className='w-[230px] h-[30px]' />
              </div>
              <div>
                <img src={reviewLine} alt='img' className='h-[7px] w-full' />
              </div>
            </div>
            <div className='flex items-center gap-[32px] py-[10px]'>
              <div>
                <img src={rating2stars} alt='' className='w-[230px] h-[30px]' />
              </div>
              <div>
                <img src={reviewLine} alt='img' className='h-[7px] w-full' />
              </div>
            </div>
            <div className='flex items-center gap-[32px]'>
              <div>
                <img src={rating1stars} alt='' className='w-[230px] h-[30px]' />
              </div>
              <div>
                <img src={reviewLine} alt='img' className='h-[7px] w-full' />
              </div>
            </div>
          </div>
        </div>
        <div className='font-bold text-2xl text-primary font-heading mt-5 mb-5'>
          Product Review & Ratings
        </div>
        <div className='flex flex-col gap-[20px]'>
          {CustomerReview.map((reviews, index) => (
            <div key={index} className='flex bg-[#FAFAFF] rounded-[20px]'>
              <div>
                <img src={reviewImg} alt='img' className='h-[137px]' />
              </div>
              <div className='bg-[#F0F0FD] rounded-[20px] px-[25px] py-[30px]'>
                <p className='font-body font-[600] text-xl'>{reviews.name}</p>
                <p className='font-body font-[400] text-[#8F8F8F] text-base py-[3px]'>
                  {reviews.date}
                </p>
                <p className='font-body font-[400] text-[#8F8F8F] text-sm'>
                  {reviews.lastSeen}
                </p>
              </div>
              <div className='px-[20px] pt-[15px]'>
                <div>
                  <img
                    src={rating4stars}
                    alt='img'
                    className='w-[180px] h-[25px]'
                  />
                </div>
                <p className='text-primary text-body text-base font-[600] pt-[8px]'>
                  {reviews.reviewHeading}
                </p>
                <p className='font-body text-[#ABABAB] text-sm'>
                  {reviews.reviewParagraph}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className='text-end'>
          <Button
            buttonText='Show more'
            buttonColor={'#EC8206'}
            width='w-[160px]'
            height='h-[50px]'
          />
        </div> */}
      </div>
    </div>
  );
};

export default ProductPreviewAndRatings;
