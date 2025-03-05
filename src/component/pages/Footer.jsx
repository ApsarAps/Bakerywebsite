import logo from "/src/assets/images/Bakereies_Logo-removebg-preview.png";
import fbIcon from "/src/assets/images/images (3).png";
import twitterIcon from "/src/assets/images/2496110.png";
import instagramIcon from "/src/assets/images/instagram_icon.png.webp";
import whatsapp from "/src/assets/images/2496112.png";
import youtubeIcon from "/src/assets/images/youtube.webp";
export const Footer = () => {
  return (
    <div>
      <footer className="bg-[#5D4037] font-[Roboto] text-white p-6 mt-6">
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="flex justify-center md:justify-start">
          <img src={logo} alt="Sweet Dessert House Cake" className="w-full max-w-[250px]" />
        </div>

        <div className="text-center md:text-left">
          <h3 className="font-bold mb-4 underline">QUICK LINKS</h3>
          <ul className="text-lg space-y-1">
            <li>Home</li>
            <li>Order Now</li>
            <li>Testimonials</li>
            <li>Feedback</li>
            <li>Our Tale</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Shipping Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="text-center text-lg md:text-left">
          <h3 className="font-bold mb-4 underline">OUR VENUE</h3>
          <p>New No: 22, Old No: 40, 3rd <br /> Street, East ABC, XYZ,<br />Chennai</p>
          <p>9123456789</p>
          <p>sweetcakebakers@gmail.com</p>
          </div>

          <div className="text-center md:text-left">
          <h3 className="font-bold underline">WE ARE SOCIAL</h3>

          <div className="flex justify-center md:justify-start space-x-4 mt-2">

            
            <img src={whatsapp} alt="LinkedIn" className="rounded-md w-8 h-8" /> 
            <img src={instagramIcon} alt="Instagram" className="rounded-md w-8 h-8" />

            <img src={fbIcon} alt="Facebook" className="rounded-md w-8 h-8" /> 

            <img src={youtubeIcon} alt="YouTube" className=" rounded-md w-8 h-8" />
            <img src={twitterIcon} alt="Twitter" className="rounded-md w-8 h-8" />
          </div>
        </div>
      
      </div>

      <p className="text-center text-lg mt-6">
        Copyright 2024 MN Organic India Pvt. Ltd.
      </p>
    </footer>
    </div>
  )
}
