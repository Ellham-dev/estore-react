import { MdArrowForwardIos } from "react-icons/md"
import Iphone_14pro from "/iphone1.png"
import Iphone_14pro_big from "/bigiphone1.png"
import Color_1 from "/color.png"
import Color_2 from "/color1.png"
import Color_3 from "/color2.png"
import Color_4 from "/color3.png"
import Color_5 from "/color4.png"
import { FaMobileScreenButton } from "react-icons/fa6"


const SinglePageProduct = () => {
  return (
    <>
      <section>
        <div className="max-w-[1120px] m-auto">
          <div className="">
            <ul className="flex items-center w-full h-[104px] gap-x-4 text-[16px] font-medium leading-4 text-[#A4A4A4] ">
              <li>Home</li>
              <MdArrowForwardIos size={24} />
              <li>Catalog</li>
              <MdArrowForwardIos size={24} />
              <li>Smartphones</li>
              <MdArrowForwardIos size={24} />
              <li>Apple</li>
              <MdArrowForwardIos size={24} />
              <li className="text-black">iPhone 14 Pro Max</li>
            </ul>
          </div>
          <div className="flex items-center gap-x-12">

            <div className="flex items-center">
              <div className="pr-12">
                <img src={Iphone_14pro} alt="" className="mb-6 mt-9" />
                <img src={Iphone_14pro} alt="" className="mb-6" />
                <img src={Iphone_14pro} alt="" className="mb-6" />
                <img src={Iphone_14pro} alt="" className="mb-9" />
              </div>
              <div className="">
                <img src={Iphone_14pro_big} alt="" className="w-[413px] h-[517px]" />
              </div>
            </div>
            {/* secont_part_start */}
            <div className="">
              <div className="mb-4">
                <h3 className="text-[40px] font-bold leading-10 mb-6">Apple iPhone 14 Pro Max</h3>
                <div className="flex items-center gap-x-4">
                  <p className="text-4xl font-medium leading-12">$1399</p>
                  <p className="text-2xl leading-8">$1499</p>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <h6 className="mr-7 text-[18px] leading-7">Select color :</h6>
                <div className="gap-x-2 flex items-center">
                  <img src={Color_2} alt="" className=" cursor-pointer" />
                  <img src={Color_1} alt="" className=" cursor-pointer" />
                  <img src={Color_3} alt="" className=" cursor-pointer" />
                  <img src={Color_4} alt="" className=" cursor-pointer" />
                  <img src={Color_5} alt="" className=" cursor-pointer" />
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <button className="border border-[#D5D5D5] text-sm leading-4 font-medium text-[#6F6F6F] px-6 py-4 rounded-xl w-[122px] cursor-pointer">128GB</button>
                <button className="border border-[#D5D5D5] text-sm leading-4 font-medium text-[#6F6F6F] px-6 py-4 rounded-xl w-[122px] cursor-pointer">256GB</button>
                <button className="border border-[#D5D5D5] text-sm leading-4 font-medium text-[#6F6F6F] px-6 py-4 rounded-xl w-[122px] cursor-pointer">512GB</button>
                <button className="border border-black text-sm leading-4 font-medium px-6 py-4 rounded-xl w-[122px] cursor-pointer">1TB</button>
              </div>
              <div className="">
                <div className="bg-[#A7A7A7] w-[168px]">
                <FaMobileScreenButton size={24}/>
                <div className="text-sm leading-4 text-[#4E4E4E]">
                  <h6 className="">Screen size</h6>
                  <p className="font-medium">6.7"</p>
                </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>
    </>
  )
}

export default SinglePageProduct