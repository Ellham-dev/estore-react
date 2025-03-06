import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa"
import Logotwo from "/footer logo (2).png"

const Footer = () => {
  return (
    <section id="footer" className="bg-black py-12">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-32 2xl:px-64">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="">
            <img src={Logotwo} alt="footer logo" className="w-16 mb-4 mx-auto md:mx-0" />
            <p className="text-[13px] text-[#CFCFCF] leading-6 max-w-[312px] mx-auto text-center md:text-left">We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-2">Services</h3>
            <ul className="text-[#CFCFCF] text-sm leading-8 flex flex-col gap-y-2">
              <li>Bonus program</li>
              <li>Gift cards</li>
              <li>Credit and payment</li>
              <li>Service contracts</li>
              <li>Non-cash account</li>
              <li>Payment</li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-2">Assistance to the buyer</h3>
            <ul className="text-[#CFCFCF] text-sm leading-8 flex flex-col gap-y-2">
              <li>Find an order </li>
              <li>Terms of delivery</li>
              <li>Exchange and return of goods</li>
              <li>Guarantee</li>
              <li>Frequently asked questions</li>
              <li>Terms of use of the site</li>
            </ul>
          </div>
        </div>
        <div className="social text-white flex justify-center gap-x-6 mt-8 text-3xl md:justify-start md:mt-6 md:text-xl cursor-pointer">
          <FaTwitter/>
          <FaFacebookF/>
          <FaTiktok/>
          <FaInstagram/>
        </div>
      </div>
    </section>
  )
}

export default Footer





