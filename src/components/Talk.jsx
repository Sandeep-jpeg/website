import React, { useState } from 'react';

const Talk = () => {
  // Email and error state definitions
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  // Email validation function
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Handle email change
  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    if (validateEmail(inputEmail)) {
      setError('');
    } else {
      setError('Please enter a valid email address');
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    // Proceed with form submission (e.g., send to server)
  };

  return (
    <div>
      <section className="w-full[1440px] h-[900px] bg-red-200">
        <div className="relative w-[407px] h-[125px] top-[130px] left-[60px] gap-0">
          <span className="Oswald text-[100px] font-[200] leading-[125px] text-[#DADADA]">TALK </span>
          <span className="Oswald text-[100px] font-[400] leading-[125px] text-left">TO US</span>
        </div>

        <div className="flex justify-center">
          <div className="w-full mx-auto p-8 bg-white flex ml-20">
            <div className="w-2/3 pr-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="top-[327px] left-[155px] h-[30px]">
                    <label className="block text-sm font-medium text-[#7A7A7A]">
                      Name *
                    </label>
                    <input
                      type="text"
                      className="mt-1 w-full focus:border-black focus:outline-none"
                      placeholder="Enter"
                    />
                    <hr className="w-40 top-[381px] left-[154px]" />
                  </div>

                  <div className="top-[327px] left-[490px] h-[30px]">
                    <label className="block text-sm font-medium text-[#7A7A7A]">E-mail *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      className={`mt-1 block w-full ${error ? 'border-red-500' : 'border-[#BFBFBF]'} focus:border-black focus:outline-none`}
                      placeholder="Email"
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <hr className="w-40 top-[381px] left-[154px]" />
                  </div>
                </div>

                <div className="py-2">
                  <label className="mt-4 block text-sm font-medium text-[#7A7A7A]">How can we help you?</label>
                  <textarea
                    rows="2"
                    className="block w-full font-bold border-[#BFBFBF] focus:border-black focus:outline-none"
                    placeholder=""
                  ></textarea>
                  <hr className="w-90 top-[483px] left-[154px]" />
                </div>

                <p className="font-Inter text-sm text-gray-500">
                  We will contact you ASAP or <a href="#" className="text-[#FF4A5F]">Schedule a call</a>
                </p>

                <div>
                  <button type="submit">
                    <img src="src/assets/hq logo/talk to us img last.png" alt="" className="transition-transform transform hover:scale-110" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Talk;
