import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import { toast } from 'react-toastify';
import Button from '../../components/button/Button';
import Input from '../../components/find-a-technician/input/Input';
import paymentStars from "../../images/paymentStars.png"
import './Payment.css';

const Payment = () => {
  const navigate = useNavigate();
  const [debit] = useState(true);
  // const [payment, setPayment] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const paymentSuccessFunc = () => {
    setOpen(true);
    // setPayment(true);
  };
  const submittedFeedbackFunc =()=>{
    toast.success('Thank you for your feedback', {
      duration: 3000,
      // position: 'bottom-right',
    });
    setOpen(false);
    navigate('/product-preview-and-ratings');
  }
  // useEffect(() => {
  //   // if () {
  //     toast.success('Thank you for your feedback', {
  //       duration: 3000,
  //       // position: 'bottom-right',
  //     });
  //   // }
  // }, []);
  return (
    <div className=''>
      <div className='grid grid-cols-12 justify-between bg-white'>
        <div className='container col-span-12 lg:col-span-8 mx-auto px-5 lg:px-0 lg:pl-14 py-11'>
          <div className='text-primary text-xl lg:text-2xl font-heading'>
            Your details
          </div>
          <form className=''>
            {/* w-full lg:w-[603px] mx-auto */}
            <div className='mt-[15px]'>
              <div className='flex flex-wrap items-center gap-[20px]'>
                <div className='w-full lg:w-[256px]'>
                  <Input inputPlaceholder={'Phone type'} transparentBg />
                </div>
                <div className='w-full lg:w-[160px]'>
                  <Input inputPlaceholder={'Color'} transparentBg />
                </div>
                <div className='w-full lg:w-[160px]'>
                  <Input inputPlaceholder={'Quality'} transparentBg />
                </div>
              </div>
              <div className='mt-[22px]'>
                <div className='flex items-center gap-[20px]'>
                  <div className='w-[256px]'>
                    <Input inputPlaceholder={'First Name'} transparentBg />
                  </div>
                  <div className='w-[160px]'>
                    {' '}
                    <Input inputPlaceholder={'Last Name'} transparentBg />
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-[680px] mt-[22px]'>
                <Input inputPlaceholder={'Email'} transparentBg />
              </div>
              <div className='w-full lg:w-[680px] mt-[22px]'>
                <Input inputPlaceholder={'Phone Number'} transparentBg />
              </div>
            </div>
          </form>
          {/*  */}
          <div className='mt-[40px] mb-[20px] text-xl lg:text-2xl font-heading'>
            Repair Details
          </div>
          <div className='bg-[#DEE0FA] w-full lg:w-[580px] px-4 lg:px-7 py-5 text-primary'>
            <div className='font-bold text-base font-heading'>Repair Type</div>
            <p className='pt-[17px] pb-[17px] text-primary font-body font-medium'>
              Charging Problems: Issues with charging or power connectivity.
            </p>
            <div className='flex items-start gap-[20px]'>
              <p className='font-bold text-base font-heading'>Repair Price:</p>
              <p className='text-[#000000] text-base font-body font-medium'>
                # 29,000
              </p>
            </div>
          </div>
          {/*  */}
          <div className='text-xl lg:text-2xl mt-[30px] font-heading'>
            Payment
          </div>
          <div className='text-sm lg:text-base mt-[8px] mb-[13px] font-body'>
            Pay With
          </div>
          <div className='flex items-center gap-[10px]'>
            <input type='checkbox' id='card' name='card' value='card' />
            <label for='card' className='text-base lg:text-xl font-body'>
              {' '}
              Debit Card
            </label>
            <br></br>
          </div>
          {/* <div className='mt-[10px]'>
            <input type='checkbox' id='card' name='card' value='Transfer' />
            <label for='card' className='text-sm lg:text-base font-body'>
              {' '}
              Transfer
            </label>
            <br></br>
          </div> */}
          <div className='mt-[30px] mb-[50px]'>
            {debit && (
              <form className='relative'>
                <div className='bg-[#DEE0FA] px-4 py-8 lg:pl-[36px] lg:pt-[36px] lg:pb-[50px] rounded-[20px] w-full lg:w-[580px]'>
                  {' '}
                  <div className='pb-[23px] w-full lg:w-[500px]'>
                    <Input
                      inputPlaceholder={'Card Holder Name'}
                      borderNone
                      WhiteSmokebgColor
                    />
                  </div>
                  <div className='pb-[23px] w-full lg:w-[500px]'>
                    <Input
                      inputPlaceholder={'Card Number'}
                      borderNone
                      WhiteSmokebgColor
                    />
                  </div>
                  <div className='flex gap-[20px]'>
                    <div className='w-[240px]'>
                      <Input
                        inputPlaceholder={'Expire Date'}
                        borderNone
                        WhiteSmokebgColor
                      />
                    </div>
                    <div className='w-[240px]'>
                      <Input
                        inputPlaceholder={'CVV Number'}
                        borderNone
                        WhiteSmokebgColor
                      />
                    </div>
                  </div>
                </div>
                <div className='absolute bottom-[-15px] flex gap-[20px] pl-[36px]'>
                  <div className='w-full lg:w-[240px] shadow-[7px_4px_17.9px_0px_rgba(0,0,0,0.35)] rounded-full'>
                    <Button
                      buttonText={'Cancel'}
                      buttonColor={'#A42020'}
                      width='w-[120px] lg:w-[240px]'
                      height='h-[30px] lg:h-[40px]'
                    />
                  </div>
                  <div className='w-full lg:w-[240px] shadow-[7px_4px_17.9px_0px_rgba(0,0,0,0.35)] rounded-full'>
                    <Button
                      buttonText={'Proceed'}
                      buttonColor={'#446F35'}
                      width='w-[120px] lg:w-[240px]'
                      height='h-[30px] lg:h-[40px]'
                    />
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
        <div className='bg-[#F6F6F6] col-span-12 lg:col-span-4'>
          <div class='container mx-auto px-8 pt-10 lg:pt-24'>
            <div className='text-primary text-xl lg:text-2xl font-heading'>
              Summary
            </div>
            {/* <div> */}
            <div className='flex items-center justify-between text-primary mt-[35px]'>
              <p className='text-sm lg:text-base font-body font-medium'>
                Device
              </p>
              <p className='text-sm lg:text-base font-body font-medium'>
                Iphone 11 pro max
              </p>
            </div>
            <div className='flex items-center justify-between mt-[15px] text-primary w-[330px]'>
              <p className='text-sm lg:text-base font-body font-medium'>
                Repair Price
              </p>
              <p className='text-sm lg:text-base font-body font-medium'>
                #29,000
              </p>
            </div>
            {/* </div> */}
            <div className='flex items-center justify-between mt-[100px] text-primary w-[330px]'>
              <p className='text-sm lg:text-base font-bold font-heading'>
                Total Payable
              </p>
              <p className='text-sm lg:text-base font-bold font-body'>
                #29,000
              </p>
            </div>
            <div className='flex flex-col gap-[10px] mt-[40px]'>
              <p className='font-bold text-sm lg:text-base text-primary font-heading'>
                Delivered to
              </p>
              <p className='w-[200px] leading-9 font-body text-sm lg:text-base'>
                MAO Shopping Complex Meadow Hall way Lekki phase 1 Lagos
              </p>
            </div>
            <div className='flex items-start gap-[48px] mt-[30px]'>
              <p className='text-sm items-start lg:text-base font-bold font-heading'>
                Mobile Number
              </p>
              <p className='text-sm lg:text-base font-bold font-body'>
                0816 525 6611
              </p>
            </div>
            <div className='text-sm lg:text-base font-heading font-bold mt-[50px]'>
              Change Address
            </div>
            <div
              className='w-[120px] mx-auto my-8 mb-[130px] lg:mb-0 lg:my-0 lg:mt-[90px]'
              onClick={paymentSuccessFunc}
            >
              <Button
                buttonText={'Make payment'}
                buttonColor={'#EC8206'}
                width='w-[160px]'
                height='h-[40px] lg:h-[50px]'
              />
            </div>
            <div>
              {open && (
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby='parent-modal-title'
                  aria-describedby='parent-modal-description'
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  className='bg-[#767575] bg-opacity-[70%]'
                >
                  <div
                    //  sx={style}
                    className='flex lg:h-[50vh] w-[250px] lg:w-[500px] flex-col justify-center rounded-md bg-[#FFFBF6] lg:mx-8'
                  >
                    <div className='mx-auto'>
                      <p className='pt-4 lg:pt-0 text-center text-base lg:text-[27px] text-light text-primary'>
                        Payment sucessful
                      </p>
                    </div>
                    <div className='font-bold text-sm lg:text-[23px] text-primary text-center pt-[10px] lg:pt-[25px] pb-[5px]'>
                      Tell us about your experience
                    </div>
                    <p className='text-[#000] text-sm lg:text-base text-center w-[130px] mx-auto'>
                      Tap a star to rate the website
                    </p>
                    <div className='mx-auto my-3'>
                      <img src={paymentStars} alt='img' className='w-[150px]' />
                    </div>
                    <div className='mb-8 flex items-center justify-center gap-[10px] flex-row lg:gap-[15px]'>
                      <div className='w-[100px]' onClick={handleClose}>
                        <Button
                          buttonText={'Cancel'}
                          buttonColor={'#A42020'}
                          width='w-[100px]'
                          height='h-[30px]'
                        />
                      </div>
                      <div
                        className='w-[100px]'
                        onClick={submittedFeedbackFunc}
                      >
                        <Button
                          buttonText={'Submit'}
                          buttonColor={'#446F35'}
                          width='w-[100px]'
                          height='h-[30px]'
                        />
                      </div>
                    </div>
                  </div>
                </Modal>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
