import React from 'react'

export const EnquiryForm = () => {
  return (
    <div className="bg-[#F3C6C6] p-8 rounded-2xl text-[#5D4037] shadow-inner max-w-6xl mx-auto mt-8 border border-[#5D4037]">
    <h2 className="text-center text-3xl font-bold">ENQUIRY FORM</h2>
    <p className="text-center text-2xl font-semibold mt-4">
      Let Us Know About Your Taste!! <br /> We Will Customize It Without Any Compromise!!
    </p>
  
    <div className="flex flex-wrap justify-between gap-6 mt-6">
      
      <div className="w-full md:w-[48%]">
        <input type="text" placeholder="Name" className="p-4 bg-white text-xl font-semibold border rounded-2xl w-full" />
      </div>
      <div className="w-full md:w-[48%]">
        <input type="text" placeholder="Egg/Eggless" className="p-4 bg-white text-xl border font-semibold rounded-2xl w-full" />
      </div>
  
      <div className="w-full md:w-[48%]">
        <input type="text" placeholder="Contact" className="p-3 bg-white border text-xl font-semibold rounded-2xl w-full" />
      </div>
      <div className="w-full md:w-[48%]">
        <input type="text" placeholder="Which Flour To Be Used?" className="p-3 text-xl font-semibold bg-white border rounded-2xl w-full" />
      </div>
  
      <div className="w-full md:w-[48%]">
        <input type="email" placeholder="Mail ID" className="p-3 bg-white text-xl border font-semibold rounded-2xl w-full" />
      </div>
      <div className="w-full md:w-[48%]">
        <textarea placeholder="Type Your Customization" className="p-3 bg-white text-xl font-semibold border rounded-2xl w-full h-[120px] resize-none"></textarea>
      </div>
  

      <div className="w-full md:w-[48%]">
        <input type="text" placeholder="Occasion" className="p-3 bg-white border text-xl font-semibold rounded-2xl w-full" />
      </div>
    </div>
  
    <button className="block bg-[#5D4037] transition-all duration-400 ease-in-out hover:bg-[#F8BBD0] hover:text-[#5D4037]  text-white px-6 py-2 text-2xl rounded-2xl mt-6 mx-auto font-bold">
      CONVEY US
    </button>
  </div>
  
  )
}
