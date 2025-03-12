import { MdArrowForwardIos } from "react-icons/md"
import Iphone_14pro from "/iphone1.png"
import Iphone_14pro_big from "/bigiphone1.png"
import Color_1 from "/color.png"
import Color_2 from "/color1.png"
import Color_3 from "/color2.png"
import Color_4 from "/color3.png"
import Color_5 from "/color4.png"
import { FaMobileScreenButton } from "react-icons/fa6"
import { CiDeliveryTruck } from "react-icons/ci"
import { GiBattery75, GiConfirmed, GiProcessor } from "react-icons/gi"
import { GoCpu } from "react-icons/go"
import { IoCamera } from "react-icons/io5"
import { IoMdReverseCamera } from "react-icons/io"
import { RiHomeSmileLine } from "react-icons/ri"


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
          <div className="flex items-center gap-x-12 justify-between">

            <div className="flex items-center w-1/2">
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
            <div className="w-1/2 py-28">
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
              <div className="flex items-center gap-x-4 mb-6">
                <button className="border border-[#D5D5D5] text-sm leading-4 font-medium text-[#6F6F6F] px-6 py-4 rounded-xl w-[122px] cursor-pointer outline-none">128GB</button>
                <button className="border border-[#D5D5D5] text-sm leading-4 font-medium text-[#6F6F6F] px-6 py-4 rounded-xl w-[122px] cursor-pointer outline-none">256GB</button>
                <button className="border border-[#D5D5D5] text-sm leading-4 font-medium text-[#6F6F6F] px-6 py-4 rounded-xl w-[122px] cursor-pointer outline-none">512GB</button>
                <button className="border border-black text-sm leading-4 font-medium px-6 py-4 rounded-xl w-[122px] cursor-pointer outline-none">1TB</button>
              </div>
              <div className="flex items-center flex-wrap gap-x-4 gap-y-4 mb-6">
                <div className="bg-[#F4F4F4] w-[168px] flex items-center gap-x-2 px-2 rounded-lg">
                <FaMobileScreenButton size={24}/>
                <div className="text-sm leading-4 text-[#4E4E4E] py-4">
                  <h6 className="">Screen size</h6>
                  <p className="font-medium">6.7"</p>
                </div>
                </div>
                <div className="bg-[#F4F4F4] w-[168px] flex items-center gap-x-2 px-2 rounded-lg">
                <GiProcessor size={24}/>
                <div className="text-sm leading-4 text-[#4E4E4E] py-4">
                  <h6 className="">CPU</h6>
                  <p className="font-medium">Apple A16 Bionic</p>
                </div>
                </div>
                <div className="bg-[#F4F4F4] w-[168px] flex items-center gap-x-2 px-2 rounded-lg">
                <GoCpu size={24}/>
                <div className="text-sm leading-4 text-[#4E4E4E] py-4">
                  <h6 className="">Number of Cores</h6>
                  <p className="font-medium">6</p>
                </div>
                </div>
                <div className="bg-[#F4F4F4] w-[168px] flex items-center gap-x-2 px-2 rounded-lg">
                <IoCamera size={24}/>
                <div className="text-sm leading-4 text-[#4E4E4E] py-4">
                  <h6 className="">Main camera</h6>
                  <p className="font-medium">48-12 -12 MP</p>
                </div>
                </div>
                <div className="bg-[#F4F4F4] w-[168px] flex items-center gap-x-2 px-2 rounded-lg">
                <IoMdReverseCamera size={24}/>
                <div className="text-sm leading-4 text-[#4E4E4E] py-4">
                  <h6 className="">Front-camera</h6>
                  <p className="font-medium">12 MP</p>
                </div>
                </div>
                <div className="bg-[#F4F4F4] w-[168px] flex items-center gap-x-2 px-2 rounded-lg">
                <GiBattery75 size={24}/>
                <div className="text-sm leading-4 text-[#4E4E4E] py-4">
                  <h6 className="">Battery capacity</h6>
                  <p className="font-medium">4323 mAh</p>
                </div>
                </div>
              </div>
              <div className="mb-8">
                <p className="text-sm leading-6 tracking-[3%] w-[536px] text-[#6C6C6C]">Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras <span className="text-[#2C2C2C]">more...</span></p>
              </div>
              <div className="space-x-3 flex items-center mb-8">
                <button className=" border px-18 py-4 font-medium text-[16px] leading-6 rounded-md outline-none cursor-pointer">Add to Wishlist</button>
                <button className=" border px-[84px] py-4 font-medium text-[16px] leading-6 rounded-md bg-black text-white outline-none cursor-pointer">Add to Card</button>
              </div>
              <div className="space-x-8 flex items-center">
              <div className="flex items-center gap-x-4 w-[157px]">
                <div className="bg-[#F6F6F6] flex items-center justify-center h-[56px] w-[56px] rounded-xl">
                <CiDeliveryTruck size={24} className=""/>
                </div>
                <p className="w-[100px] text-sm leading-6 font-medium">Free Delivery
                1-2 day</p>
              </div>
              <div className="flex items-center gap-x-4 w-[157px]">
                <div className="bg-[#F6F6F6] flex items-center justify-center h-[56px] w-[56px] rounded-xl">
                <RiHomeSmileLine size={24} className=""/>
                </div>
                <p className="w-[100px] text-sm leading-6 font-medium">Stock
                Today</p>
              </div>
              <div className="flex items-center gap-x-4 w-[157px]">
                <div className="bg-[#F6F6F6] flex items-center justify-center h-[56px] w-[56px] rounded-xl">
                <GiConfirmed size={24} className=""/>
                </div>
                <p className="w-[100px] text-sm leading-6 font-medium"> Guaranteed
                1 year</p>
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