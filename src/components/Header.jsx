import React from 'react';
import logo from "../assets/logo.png"
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='mt-10 flex justify-center items-center flex-col gap-3'>
          <img className='w-[420px]' src={logo} alt="logo image" />
          <p className='text-accent'>Journalism Without Fear or Favour</p>
          <p className='font-semibold text-accent'>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;