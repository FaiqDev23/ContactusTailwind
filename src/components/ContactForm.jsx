import React from 'react'

const ContactForm = () => {
  return (
    <div className=" p-6">
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {/* Form başlığı için özel renk ekliyoruz. text-[#7E86F6] ile renk kodunu doğrudan uygulayabiliriz. */}
      <h2 className="text-2xl font-semibold mb-4 text-[#7E86F6]">Get In Touch</h2>
      <p className='font-semibold	text-sm text-black font-poppins'>We are here for you! How can we help?</p>
      <form>
        <div className="mb-4">
        
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  
  )
}

export default ContactForm