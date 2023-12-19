import React, { useState } from 'react';
// import Modal from '@mui/material/Modal';
import Button from '../../components/button/Button';
import Input from '../../components/find-a-technician/input/Input';
import './Payment.css';

const Payment = () => {
  const [debit, setDebit] = useState(true);
  return (
    <div className=''>
      <div className='grid grid-cols-12 justify-between payment-gradient-css'>
        <div className='container col-span-12 lg:col-span-8 mx-auto pl-14 py-11'>
          <div className='text-primary text-xl'>Your details</div>
          <form>
            <div className='mt-[15px]'>
              <div className='flex items-center gap-[20px]'>
                <div className='w-[256px]'>
                  <Input inputPlaceholder={'Phone type'} transparentBg />
                </div>
                <div className='w-[160px]'>
                  <Input inputPlaceholder={'Color'} transparentBg />
                </div>
                <div className='w-[160px]'>
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
              <div className='w-[680px] mt-[22px]'>
                <Input inputPlaceholder={'Email'} transparentBg />
              </div>
              <div className='w-[680px] mt-[22px]'>
                <Input inputPlaceholder={'Phone Number'} transparentBg />
              </div>
            </div>
          </form>
          {/*  */}
          <div className='mt-[40px] mb-[20px] text-xl'>Repair Details</div>
          <div className='bg-[#DEE0FA] w-[580px] px-7 py-5 text-primary'>
            <div className='font-bold text-base'>Repair Type</div>
            <p className='pt-[17px] pb-[17px] text-primary'>
              Lorem ipsum dolor sit amet consectetur. Rhoncus eu aliquam.
            </p>
            <div className='flex items-start gap-[20px]'>
              <p className='font-bold text-base'>Repair Price:</p>
              <p className='text-[#000000]'># 29,000</p>
            </div>
          </div>
          {/*  */}
          <div className='text-xl mt-[30px]'>Payment</div>
          <div className='text-sm mt-[8px] mb-[13px]'>Pay With</div>
          <div>
            <input type='checkbox' id='card' name='card' value='card' />
            <label for='card' className='text-base'>
              {' '}
              Debit Card
            </label>
            <br></br>
          </div>
          <div className='mt-[10px]'>
            <input type='checkbox' id='card' name='card' value='Transfer' />
            <label for='card' className='text-base'>
              {' '}
              Transfer
            </label>
            <br></br>
          </div>
          <div className='mt-[30px]'>
            {debit && (
              <form>
                <div className='bg-[#DEE0FA] pl-[36px] pt-[36px] pb-[50px] rounded-[20px] w-[580px]'>
                  {' '}
                  <div className='pb-[23px] w-[500px]'>
                    <Input
                      inputPlaceholder={'Card Holder Name'}
                      borderNone
                      WhiteSmokebgColor
                    />
                  </div>
                  <div className='pb-[23px] w-[500px]'>
                    <Input
                      inputPlaceholder={'Card Number'}
                      borderNone
                      WhiteSmokebgColor
                    />
                  </div>
                  <div className='flex gap-[20px]'>
                    <div className='w-[200px]'>
                      <Input
                        inputPlaceholder={'Expire Date'}
                        borderNone
                        WhiteSmokebgColor
                      />
                    </div>
                    <div className='w-[200px]'>
                      <Input
                        inputPlaceholder={'CVV Number'}
                        borderNone
                        WhiteSmokebgColor
                      />
                    </div>
                  </div>
                </div>
                <div className='flex gap-[20px] pb-[50px]bg-[#EC8206]'>
                  <div className='w-[150px]'>
                    <Button
                      buttonText={'Cancel'}
                      buttonColor={'#262A4F'}
                      width='w-[150px]'
                      height='h-[40px]'
                    />
                  </div>
                  <div className='w-[150px]'>
                    <Button
                      buttonText={'Proceed'}
                      buttonColor='#262A4F'
                      width='w-[150px]'
                      height='h-[40px]'
                    />
                  </div>
                  <Button buttonText={'Make payment'} buttonColor={'#EC8206'} />
                </div>
              </form>
            )}
          </div>
        </div>
        <div className='bg-[#F6F6F6] col-span-12 lg:col-span-4'>
          <div class='container mx-auto px-8 pt-24'>
            <div className='text-primary text-2xl'>Summary</div>
            {/* <div> */}
            <div className='flex items-center justify-between text-primary mt-[35px]'>
              <p className='text-base'>Device</p>
              <p className='text-base'>Iphone 11 pro max</p>
            </div>
            <div className='flex items-center justify-between mt-[15px] text-primary w-[330px]'>
              <p className='text-base'>Repair Price</p>
              <p className='text-base'>#29,000</p>
            </div>
            {/* </div> */}
            <div className='flex items-center justify-between mt-[100px] text-primary w-[330px]'>
              <p className='text-base font-bold'>Total Payable</p>
              <p className='text-base font-bold'>#29,000</p>
            </div>
            <div className='flex flex-col gap-[10px] mt-[40px]'>
              <p className='font-bold font-base text-primary'>Delivered to</p>
              <p className='w-[200px] leading-9'>
                MAO Shopping Complex Meadow Hall way Lekki phase 1 Lagos
              </p>
            </div>
            <div className='flex items-center gap-[48px] mt-[30px]'>
              <p className='text-base font-bold'>Mobile Number</p>
              <p className='text-base font-bold'>0816 525 6611</p>
            </div>
            <div className='text-base font-bold mt-[50px]'>Change Address</div>
            <div className='w-[120px] mx-auto mt-[90px]'>
              <Button
                buttonText={'Make payment'}
                buttonColor={'#EC8206'}
                width='w-[160px]'
                height='h-[50px]'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
