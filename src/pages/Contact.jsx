import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail, MdHomeRepairService } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <section className="bg-[#211C24]">
        <div className="max-w-[1120px] m-auto text-white">
          <div className="flex items-center justify-center">
            <h4 className="font-semibold text-4xl leading-8 py-10">Contact Us</h4>
          </div>
          <div className="flex items-center gap-x-6 mb-10">
            <div className="w-[358px] border-4 outline-white flex flex-col items-center rounded-4xl px-8 py-5">
              <MdHomeRepairService size={32} className="mb-4" />
              <span className="font-bold text-[16px] leading-4 mb-2">Address </span>
              <p className="font-semibold text-[16px] leading-[26px] mb-4 text-center w-[293px]">234 Hai Trieu, Ho Chi Minh City,
                Viet Nam</p>
            </div>
            <div className="w-[358px] border-4 outline-white flex flex-col items-center rounded-4xl px-8 py-5">
              <FaPhoneFlip size={32} className="mb-4" />
              <span className="font-bold text-[16px] leading-4 mb-2 ">Contact Us</span>
              <p className="font-semibold text-[16px] leading-[26px] mb-10 text-center w-[293px]">+84 234 567 890</p>
            </div>
            <div className="w-[358px] border-4 outline-white flex flex-col items-center rounded-4xl px-8 py-5">
              <MdEmail size={32} className="mb-4" />
              <span className="font-bold text-[16px] leading-4 mb-2">Email</span>
              <p className="font-semibold text-[16px] leading-[26px] mb-10 text-center w-[293px]">hello@3legant.com</p>
            </div>

          </div>
          <div className="">
            <div className="flex flex-col items-center mb-6">
              <h5 className="text-xl font-bold leading-3 mb-4 text-center">FULL NAME</h5>
              <input type="text" placeholder="Your Name" className="px-[200px] py-2 border-4 border-white rounded-4xl text-center outline-none" />
            </div>
            <div className="flex flex-col items-center mb-6">
              <h5 className="text-xl font-bold leading-3 mb-4 text-center">EMAIL ADDRESS</h5>
              <input type="email" placeholder="Your Email" className="px-[200px] py-2 border-4 border-white rounded-4xl text-center outline-none" />
            </div>
            <div className="flex flex-col items-center mb-6">
              <h5 className="text-xl font-bold leading-3 mb-4 text-center">MESSAGE</h5>
              <input type="text" placeholder="Your Message" className="px-[200px] py-8 border-4 border-white rounded-4xl text-center outline-none" />
            </div>
            <div className="flex items-center justify-center"><button className="border bg-blue-400 px-7 py-2 rounded-4xl text-lg font-semibold leading-4 outline-none cursor-pointer text-white mb-6">SUBMIT</button></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact