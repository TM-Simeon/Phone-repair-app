import React from 'react';
import CustomerReview from '../../data/CustomerReview';
// import Button from '../../components/button/Button';
import rating5stars from '../../images/rating5stars.png';
import rating4stars from '../../images/rating4stars.png';
import rating3stars from '../../images/rating3stars.png';
import rating2stars from '../../images/rating2stars.png';
import rating1stars from '../../images/rating1star.png';
import reviewLine5 from '../../images/reviewLine.png';
import reviewLine4 from '../../icons/rating4.png';
import reviewLine3 from '../../icons/rating3.png';
import reviewLine2 from '../../icons/rating2.png';
import reviewLine1 from '../../icons/rating1.png';
import reviewImg from '../../images/peopleIcon.png';
import oneStar from '../../images/oneStar.png';
import star47 from '../../images/star47.png';

const ProductPreviewAndRatings = () => {
  return (
    <div className=''>
      {/* bg-[#FFFFEE] */}
      <div className='container max-w-7xl mx-auto px-4 lg:px-8 py-4 lg:pt-11 lg:pb-[150px]'>
        <div className='font-bold text-base lg:text-2xl text-primary font-heading'>
          Product Review & Ratings
        </div>
        <div className='flex flex-noWrap lg:items-start gap-[30px] lg:pl-0 pl-4 py-12 justify-center'>
          <div className='lg:hidden flex flex-col items-center'>
            <img src={star47} alt='img' className='w-[550px] h-[32px]' />
            <div className='text-xl lg:text-5xl text-[#000000] font-bold font-body'>
              4.7
            </div>
          </div>
          <div className='hidden lg:block text-xl lg:text-5xl text-[#000000] font-bold font-body'>
            4.7
          </div>
          <div>
            <div className='flex items-center justify-between gap-[20px] lg:gap-[32px]'>
              <div className='hidden lg:block'>
                <img
                  src={rating5stars}
                  alt='img'
                  className='w-[230px] h-[32px]'
                />
              </div>
              <div className='text-sm lg:hidden flex items-center gap-[3px] font-body text-[#ED8A16] font-semibold'>
                5
                <img src={oneStar} alt='img' className='w-[55px] h-[25px]' />
              </div>
              <div>
                <img
                  src={reviewLine5}
                  alt='img'
                  className='w-[70%] h-[10px] lg:h-[7px] lg:w-[38.8rem]'
                />
              </div>
            </div>
            <div className='flex items-center gap-[20px] lg:gap-[32px] py-[10px]'>
              <div className='hidden lg:block'>
                <img src={rating4stars} alt='' className='w-[230px] h-[30px]' />
              </div>
              <div className='text-sm lg:hidden flex items-center gap-[3px] font-body text-[#ED8A16] font-semibold'>
                4
                <img src={oneStar} alt='img' className='w-[55px] h-[25px]' />
              </div>
              <div>
                <img
                  src={reviewLine4}
                  alt='img'
                  className='w-[70%] h-[10px] lg:h-[7px] lg:w-full'
                />
              </div>
            </div>
            <div className='flex items-center gap-[20px] lg:gap-[32px]'>
              <div className='hidden lg:block'>
                <img src={rating3stars} alt='' className='w-[230px] h-[30px]' />
              </div>
              <div className='text-sm lg:hidden flex items-center gap-[3px] font-body text-[#ED8A16] font-semibold'>
                3
                <img src={oneStar} alt='img' className='w-[55px] h-[25px]' />
              </div>
              <div>
                <img
                  src={reviewLine3}
                  alt='img'
                  className='w-[70%] h-[10px] lg:h-[7px] lg:w-full'
                />
              </div>
            </div>
            <div className='flex items-center gap-[20px] lg:gap-[32px] py-[10px]'>
              <div className='hidden lg:block'>
                <img src={rating2stars} alt='' className='w-[230px] h-[30px]' />
              </div>
              <div className='text-sm lg:hidden flex items-center gap-[3px] font-body text-[#ED8A16] font-semibold'>
                2
                <img src={oneStar} alt='img' className='w-[55px] h-[25px]' />
              </div>
              <div>
                <img
                  src={reviewLine2}
                  alt='img'
                  className='w-[70%] h-[10px] lg:h-[7px] lg:w-full'
                />
              </div>
            </div>
            <div className='flex items-center gap-[20px] lg:gap-[32px]'>
              <div className='hidden lg:block'>
                <img src={rating1stars} alt='' className='w-[230px] h-[30px]' />
              </div>
              <div className='text-sm lg:hidden flex items-center gap-[3px] font-body text-[#ED8A16] font-semibold'>
                1
                <img src={oneStar} alt='img' className='w-[55px] h-[25px]' />
              </div>
              <div>
                <img
                  src={reviewLine1}
                  alt='img'
                  className='w-[70%] h-[10px] lg:h-[7px] lg:w-full'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='font-bold text-base lg:text-2xl text-primary font-heading mt-5 mb-5'>
          Product Review & Ratings
        </div>
        <div className='flex flex-col gap-[20px] w-full'>
          {CustomerReview.map((reviews, index) => (
            <div
              key={index}
              className='flex flex-wrap lg:bg-[#FAFAFF] rounded-[20px]'
            >
              <div className='hidden lg:block'>
                <img src={reviewImg} alt='img' className='h-[137px]' />
              </div>
              <div className='lg:bg-[#F0F0FD] rounded-[20px] lg:px-[25px] lg:py-[30px]'>
                <p className='font-body font-[600] text-sm lg:text-xl'>
                  {reviews.name}
                </p>
                <div className='hidden lg:block'>
                  <p className='font-body font-[400] text-[#8F8F8F] text-base py-[3px]'>
                    {reviews.date}
                  </p>
                  <p className='font-body font-[400] text-[#8F8F8F] text-sm'>
                    {reviews.lastSeen}
                  </p>
                </div>
              </div>
              <div className='lg:px-[20px] lg:pt-[15px]'>
                <div className='flex items-center'>
                  <img
                    src={rating4stars}
                    alt='img'
                    className='w-[120px] lg:w-[180px] lg:h-[25px]'
                  />
                  <div className='flex items-center lg:hidden'>
                    <p className='font-body font-[400] text-[#8F8F8F] text-xs lg:text-base py-[3px]'>
                      {reviews.date}
                    </p>
                    <p className='font-body font-[400] text-[#8F8F8F] text-xs lg:text-sm'>
                      {reviews.lastSeen}
                    </p>
                  </div>
                </div>
                <p className='text-primary text-body text-base lg:text-xl font-[600] pt-[8px]'>
                  {reviews.reviewHeading}
                </p>
                <p className='font-body text-[#ABABAB] text-sm w-full'>
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
