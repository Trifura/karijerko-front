import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo_short.svg';
import Close from '../../assets/icons/Close_round.svg';

function EmailConfirmation({ onClose, isCompany }) {
  const emailConfirmationRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (emailConfirmationRef.current && !emailConfirmationRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 fade-in flex flex-col justify-center items-center bg-black bg-opacity-50 z-50">
      <div ref={emailConfirmationRef} className="relative bg-white scale-in p-10 rounded-lg shadow-lg text-center max-w-md w-full">
        <button onClick={onClose} className="absolute top-2 right-2">
          <img src={Close} alt="Close" className="w-6 h-6" />
        </button>
        <img src={Logo} className="mx-auto w-10 h-10" alt="Logo" />
        <div className="mb-5 text-[25px] font-semibold">
          {isCompany ? 'Potvrdite Vaš email za firmu' : 'Potvrdite Vaš email'}
        </div>
        <p className="mb-5">
          {isCompany ? 'Hvala Vam što ste prijavili Vašu firmu na Karijerka!' : 'Hvala Vam što ste se prijavili na Karijerka!'} <br />
          <div className='text-[15px]'>
            Molimo Vas da potvrdite Vaš email, koji smo Vam poslali
          </div>
        </p>
        <Link to="/login" className="p-2 bg-Primary text-white font-semibold rounded-lg">
          Go to Login
        </Link>
      </div>
    </div>
  );
}

export default EmailConfirmation;
