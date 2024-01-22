import React, { useEffect, useState } from 'react';
// import { database, ref, set } from '../../../firebase/firebaseConfig';
import { database } from '../../../firebase/firebaseConfig';
import { getDatabase, ref, set } from 'firebase/database';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import Input from '../../../components/find-a-technician/input/Input';
import Textarea from '../../../components/find-a-technician/textarea/Textarea';
import dropdownarrow from '../../../images/dropdownarrow.svg';

const CreateMostUsedTechnicians = () => {
  const [note, setNote] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [dropDownIssue, setDropDownIssue] = useState(false);
  const dropDownFunction = () => {
    setDropDown(!dropDown);
  };
  const dropDownIssueFunction = () => {
    setDropDownIssue(!dropDownIssue);
  };
  const noteFunction = () => {
    setNote(!note);
  };
  const [logIn, setLogIn] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
  });
//   console.log(logIn)
  const onInputChange = (e) => {
    setLogIn({
      ...logIn,
      [e.target.name]: e.target.value,
    });
  };

  // Initialize state, checking localStorage for a stored value
  const [isChecked, setChecked] = useState(() => {
    const storedValue = localStorage.getItem('checkboxState');
    return storedValue ? JSON.parse(storedValue) : false;
  });

  // Update localStorage when the state changes
  useEffect(() => {
    localStorage.setItem('checkboxState', JSON.stringify(isChecked));
  }, [isChecked]);

  // Handle checkbox change
  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    label: '',
  });
  useEffect(() => {
    setUserData({
      firstName: logIn.firstName,
      lastName: logIn.lastName,
      email: logIn.email,
      phoneNumber: logIn.phoneNumber,
    });
  }, [logIn]);
  const { firstName, lastName, email, phoneNumber } = userData;

  const OnSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    let userId = `${userData.firstName}_${userData.lastName}`;

    const writeUserData = () => {
      const db = getDatabase();
      set(ref(db, 'Technicians/' + userId), {
        firstName,
        lastName,
        email,
        phoneNumber,
      });
    };

    try {
      writeUserData(
        userId,
        //   = Math.floor(Math.random() * 10)
        firstName,
        lastName,
        email,
        phoneNumber
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        {/* inputType="email" inputName="email" inputPlaceholder="Email address"
                inputValue={logIn.firstName}
                onChange={onInputChange} */}
        <form
          className='w-full lg:w-[603px] mx-auto'
          onSubmit={(e) => OnSubmit(e)}
        >
          <div>
            <div className='mt-6'>
              <Input
                inputValue={email}
                inputType={'text'}
                inputName={'email'}
                inputPlaceholder={'email'}
                onChange={onInputChange}
              />
            </div>
            <div className='mt-6'>
              <Input
                inputValue={firstName}
                inputType={'text'}
                inputName={'firstName'}
                inputPlaceholder={'firstName'}
                onChange={onInputChange}
              />
            </div>
            <div className='mt-6 flex flex-col gap-y-5'>
              <Input
                inputValue={lastName}
                inputType={'text'}
                inputName={'lastName'}
                inputPlaceholder={'lastName'}
                onChange={onInputChange}
              />
            </div>
            <div className='mt-6 grid grid-cols-12 lg:gap-5 items-center relative'>
              <div className='col-span-12 lg:col-span-6'>
                <div
                  className='flex align-center justify-between text-[#6F6F6F] placeholder-[#6F6F6F] border border-[#6F6F6F] text-[14px] rounded-full lg:pl-[20px] font-body w-full p-[9px_16px_10px_16px]'
                  onClick={dropDownFunction}
                >
                  Speciality
                  <img
                    src={dropdownarrow}
                    alt='img'
                    className={`w-[34px] h-[20px] ${
                      dropDown ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </div>
              </div>
              <div className='col-span-12 lg:col-span-6 mt-6 lg:mt-0'>
                <Input
                  inputValue={phoneNumber}
                  inputType={'text'}
                  inputName={'phoneNumber'}
                  inputPlaceholder={'phoneNumber'}
                  onChange={onInputChange}
                />
              </div>
              {/* dropdown */}
              <div
                // style={{
                //   transition: 'all .5s',
                // }}
                className='absolute top-[35px] w-full lg:w-[48%] z-20'
              >
                {dropDown && (
                  <div className='border border-[#6F6F6F] mt-4 px-8 py-4 rounded-lg bg-white'>
                    <div className='flex items-center gap-[15px]'>
                      <input
                        type='checkbox'
                        id='card'
                        name='card'
                        value='card'
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      <label
                        for='speciality'
                        className='text-sm font-body text-[#6F6F6F]'
                      >
                        {' '}
                        Hardware
                      </label>

                      <br></br>
                    </div>
                    <div className='flex items-center gap-[15px]'>
                      <input
                        type='checkbox'
                        id='card'
                        name='card'
                        value='card'
                      />
                      <label
                        for='card'
                        className='text-sm font-body text-[#6F6F6F]'
                      >
                        {' '}
                        Software
                      </label>
                      <br></br>
                    </div>
                    <div className='flex items-center gap-[15px]'>
                      <input
                        type='checkbox'
                        id='card'
                        name='card'
                        value='card'
                      />
                      <label
                        for='card'
                        className='text-sm font-body text-[#6F6F6F]'
                      >
                        {' '}
                        General
                      </label>
                      <br></br>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <p className='font-body text-lg mt-4'>Describe your phone issue</p>
            <div className='mt-4 relative'>
              <div
                onClick={dropDownIssueFunction}
                className='flex align-center justify-between text-[#6F6F6F] placeholder-[#6F6F6F] border border-[#6F6F6F] text-[14px] rounded-full lg:pl-[20px] font-body w-full p-[9px_16px_10px_16px]'
              >
                Hardware
                <img
                  src={dropdownarrow}
                  alt='img'
                  className={`w-[34px] h-[20px] ${
                    dropDownIssue ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </div>
              <div className='absolute top-[35px] w-full lg:w-[48%]'>
                {dropDownIssue && (
                  <div className='border border-[#6F6F6F] mt-4 px-8 py-4 rounded-lg bg-white'>
                    <div className='flex items-center gap-[15px]'>
                      <input
                        type='checkbox'
                        id='card'
                        name='card'
                        value='card'
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      <label
                        for='speciality'
                        className='text-sm font-body text-[#6F6F6F]'
                      >
                        {' '}
                        Hardware
                      </label>

                      <br></br>
                    </div>
                    <div className='flex items-center gap-[15px]'>
                      <input
                        type='checkbox'
                        id='card'
                        name='card'
                        value='card'
                      />
                      <label
                        for='card'
                        className='text-sm font-body text-[#6F6F6F]'
                      >
                        {' '}
                        Software
                      </label>
                      <br></br>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='mt-6'>
            {note ? (
              <Textarea
                inputPlaceholder={'Leave a note'}
                onChange={onInputChange}
              />
            ) : (
              <div
                className='w-[100%] p-[10px_24px_10px_24px] bg-white text-[#6F6F6F] border border-[#413E3A] text-[14px] lg:text-[16px] rounded-full text-center'
                onClick={noteFunction}
              >
                Leave a note
              </div>
            )}
            {/* <div className='mt-4 mb-8'>{note && <Textarea />}</div> */}
          </div>
          <div className='text-end mt-4'>
            <button
              className='bg-[#EC8206] w-[127px] rounded-full text-white h-[35px] lg:h-[50px]'
              type='submit'
              onSubmit={(e) => OnSubmit(e)}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateMostUsedTechnicians;
