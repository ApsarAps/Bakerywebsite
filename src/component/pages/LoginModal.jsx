import { useState } from "react";


const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-200">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-[#F8BBD0] text-white px-6 py-2 rounded-md shadow-md hover:bg-pink-600 transition"
      >
        LOGIN/SIGN UP
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-brown-700 text-white p-6 rounded-lg w-96 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-4 text-xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-center text-lg font-bold text-[#F8BBD0] mb-4">
              WELCOME TO SWEET DESSERT HOUSE CAKE
            </h2>

            <div className="space-y-3">
              <div className="flex items-center bg-white p-2 rounded-md text-gray-700">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full outline-none bg-transparent"
                />
              </div>
              <div className="flex items-center bg-white p-2 rounded-md text-gray-700">
                <span className="mr-2"><img src={Email} alt="" /></span>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full outline-none bg-transparent"
                />
              </div>
              <div className="flex items-center bg-white p-2 rounded-md text-gray-700">
                <input
                  type="tel"
                  placeholder="Mobile"
                  className="w-full outline-none bg-transparent"
                />
              </div>
              <div className="flex items-center bg-white p-2 rounded-md text-gray-700">
                <span className="mr-2"><img src="" alt="" /></span>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full outline-none bg-transparent"
                />
              </div>
            </div>

            <button className="w-full mt-4 bg-[#F8BBD0] text-white py-2 rounded-md hover:bg-[#F8BBD0] transition">
              LOGIN/SIGN UP
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
