import React from 'react';
import rightPic from '../assets/images/right.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactForm = () => {
  return (
    <div className=" p-6">
      <div className="max-w-screen-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* Form başlığı için özel renk ekliyoruz. text-[#7E86F6] ile renk kodunu doğrudan uygulayabiliriz. */}
        <h2 className="text-2xl font-semibold mb-4 text-[#7E86F6]">Get In Touch</h2>
        <p className='font-semibold	text-sm text-black font-poppins'>We are here for you! How can we help?</p>
        <div className="grid grid-cols-2">
          <div >
            <form>
              <div className="">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                </label>
                <input className="bg-[#F5F5FF] font-sans text-xs tracking-wider appearance-none  mb-[30px] w-full py-4 mt-10 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="username" type="text" placeholder="Enter your name" />
              </div>
              <div className="">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                </label>
                <input className="bg-[#F5F5FF] font-sans text-xs tracking-wider appearance-none mb-[30px]  border-gray-200  w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="username" type="text" placeholder="Enter your email address" />
              </div>
              <div className="">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                </label>
                <textarea className="resize-none font-sans text-xs tracking-wider bg-[#F5F5FF] appearance-none mb-[30px]  h-[150px]   w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="username" type="text" placeholder="Go ahead, We are listening..." />
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-[#6569F6] font-sans tracking-wider text-xl hover:bg-blue-700 w-full text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline" type="submit">
                  Submit
                </button>
              </div>
            </form></div>
          <div class="m-10">
            <img src={rightPic} alt="" />
            <div className="mt-6 space-y-2">
             
            <div className="flex items-center font-poppins text-sm text-gray-700 mt-[36px]">
                <span className="inline-flex justify-center items-center rounded-full border-2 mx-2 border-custom-purple bg-white px-3 py-2">
                  <FontAwesomeIcon icon={faLocationDot} className="text-[#6F65FA]" />
                </span>
                838 Cantt Sialkot, Pakistan
              </div>
              <div className="flex items-center font-poppins text-sm text-gray-700 mt-[36px]">
                <span className="inline-flex justify-center items-center rounded-full border-2 mx-2 border-custom-purple bg-white p-2">
                  <FontAwesomeIcon icon={faPhone} className="text-[#6F65FA]" />
                </span>
                979-988-89787
              </div>
              <div className="flex items-center font-poppins text-sm text-gray-700 mt-[36px]">
                <span className="inline-flex justify-center items-center rounded-full border-2 mx-2 border-custom-purple bg-white p-2">
                  <FontAwesomeIcon icon={faEnvelope} className="text-[#6F65FA]" />
                </span>
                abcd123@gmail.com
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='flex flex-col bg-[#6F65FA] max-w-[50px] w-48 h-100 absolute z-100 top-[30rem] rounded-br-full rounded-tr-[85rem] right-[291px] h-[10rem]'>
      <FontAwesomeIcon icon={faFacebook} className=" text-white text-2xl my-3" />
          <FontAwesomeIcon icon={faTwitter} className="text-white text-2xl my-3" />
          <FontAwesomeIcon icon={faLinkedin} className="text-white text-2xl my-3" />
      </div>
    </div>

  )
}

export default ContactForm