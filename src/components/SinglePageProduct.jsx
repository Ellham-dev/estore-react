import { MdArrowForwardIos } from "react-icons/md"
import Iphone_14pro from "/iphone1.png"
import Iphone_14pro_big from "/bigiphone1.png"
import Color_1 from "/color.png"
import Color_2 from "/color1.png"
import Color_3 from "/color2.png"
import Color_4 from "/color3.png"
import Color_5 from "/color4.png"
import { FaMobileScreenButton, FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6"
import { CiDeliveryTruck } from "react-icons/ci"
import { GiBattery75, GiConfirmed, GiProcessor } from "react-icons/gi"
import { GoCpu } from "react-icons/go"
import { IoCamera } from "react-icons/io5"
import { IoIosArrowDown, IoMdReverseCamera } from "react-icons/io"
import { RiHomeSmileLine } from "react-icons/ri"
import UserPic from "/User.png"
import Review1P from "/Review1.png"
import Review2P from "/Review2.png"
import UserPic3 from "/User3.png"
import UserPic2 from "/User2.png"


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
                  <FaMobileScreenButton size={24} />
                  <div className="text-sm leading-4 text-[#4E4E4E] py-4">
                    <h6 className="">Screen size</h6>
                    <p className="font-medium">6.7"</p>
                  </div>
                </div>
                <div className="bg-[#F4F4F4] w-[168px] flex items-center gap-x-2 px-2 rounded-lg">
                  <GiProcessor size={24} />
                  <div className="text-sm leading-4 text-[#4E4E4E] py-4">
                    <h6 className="">CPU</h6>
                    <p className="font-medium">Apple A16 Bionic</p>
                  </div>
                </div>
                <div className="bg-[#F4F4F4] w-[168px] flex items-center gap-x-2 px-2 rounded-lg">
                  <GoCpu size={24} />
                  <div className="text-sm leading-4 text-[#4E4E4E] py-4">
                    <h6 className="">Number of Cores</h6>
                    <p className="font-medium">6</p>
                  </div>
                </div>
                <div className="bg-[#F4F4F4] w-[168px] flex items-center gap-x-2 px-2 rounded-lg">
                  <IoCamera size={24} />
                  <div className="text-sm leading-4 text-[#4E4E4E] py-4">
                    <h6 className="">Main camera</h6>
                    <p className="font-medium">48-12 -12 MP</p>
                  </div>
                </div>
                <div className="bg-[#F4F4F4] w-[168px] flex items-center gap-x-2 px-2 rounded-lg">
                  <IoMdReverseCamera size={24} />
                  <div className="text-sm leading-4 text-[#4E4E4E] py-4">
                    <h6 className="">Front-camera</h6>
                    <p className="font-medium">12 MP</p>
                  </div>
                </div>
                <div className="bg-[#F4F4F4] w-[168px] flex items-center gap-x-2 px-2 rounded-lg">
                  <GiBattery75 size={24} />
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
                    <CiDeliveryTruck size={24} className="" />
                  </div>
                  <p className="w-[100px] text-sm leading-6 font-medium">Free Delivery
                    1-2 day</p>
                </div>
                <div className="flex items-center gap-x-4 w-[157px]">
                  <div className="bg-[#F6F6F6] flex items-center justify-center h-[56px] w-[56px] rounded-xl">
                    <RiHomeSmileLine size={24} className="" />
                  </div>
                  <p className="w-[100px] text-sm leading-6 font-medium">Stock
                    Today</p>
                </div>
                <div className="flex items-center gap-x-4 w-[157px]">
                  <div className="bg-[#F6F6F6] flex items-center justify-center h-[56px] w-[56px] rounded-xl">
                    <GiConfirmed size={24} className="" />
                  </div>
                  <p className="w-[100px] text-sm leading-6 font-medium"> Guaranteed
                    1 year</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#d5d5d53b] w-full rounded-lg px-10 py-12 ">
            <div className="">
              <div className="">
                <h5 className="text-2xl font-medium leading-8 mb-12">Details</h5>
                <p className="text-sm font-medium leading-6 mb-8">Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything is fine with displays. Both critics and mass consumers always praise the quality of the picture provided by the products of the Californian brand. And last year's 6.7-inch Retina panels, which had ProMotion, caused real admiration for many.</p>
              </div>
              <div className="">
                <h6 className="text-xl font-medium leading-6 mb-4">Screen</h6>
                <div className="flex items-center justify-between mb-6">
                  <h6 className="text-[16px] leading-6">Screen diagonal</h6>
                  <p className="text-[15px] leading-6">6.7"</p>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <h6 className="text-[16px] leading-6">The screen resolution</h6>
                  <p className="text-[15px] leading-6">2796x1290</p>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <h6 className="text-[16px] leading-6">The screen refresh rate</h6>
                  <p className="text-[15px] leading-6">120 Hz</p>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <h6 className="text-[16px] leading-6">The pixel density</h6>
                  <p className="text-[15px] leading-6">460 ppi</p>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <h6 className="text-[16px] leading-6">Screen type</h6>
                  <p className="text-[15px] leading-6">OLED</p>
                </div>
                <div className="flex justify-between mb-6">
                  <h6 className="text-[16px] leading-6">Additionally</h6>
                  <p className="text-[15px] leading-6 text-end">Dynamic Island<br />Always-On display<br />HDR display<br />True Tone<br />Wide color (P3)</p>
                </div>
                <div className="">
                  <h6 className="text-xl font-medium leading-6 mb-4">CPU</h6>
                  <div className="flex items-center justify-between mb-6">
                    <h6 className="text-[16px] leading-6">CPU</h6>
                    <p className="text-[15px] leading-6">A16 Bionic</p>
                  </div>
                  <div className="flex items-center justify-between mb-8">
                    <h6 className="text-[16px] leading-6">Number of cores</h6>
                    <p className="text-[15px] leading-6">6</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-2 justify-center ">
              <h6 className="text-sm font-medium leading-6">View More</h6>
              <IoIosArrowDown size={24} />
            </div>
          </div>
          {/* review_part */}

          <div className="mt-[88px]">
            <div className="mb-12 ">
              <h6 className="text-2xl leading-8 font-medium">Reviews</h6>
            </div>
            <div className="flex items-center justify-between p-2 mb-12">
              <div className=" bg-[#FAFAFA] w-[184px] rounded-3xl">
                <div className="p-8 flex flex-col items-center">
                  <h3 className="text-[56px] leading-14 font-medium mb-4">4.8</h3>
                  <p className="text-[15px] leading-4 font-medium mb-4">of 125 reviews</p>
                  <div className="flex items-center text-[#FFB547] w-[116px]">
                    <FaStar size={24} />
                    <FaStar size={24} />
                    <FaStar size={24} />
                    <FaStar size={24} />
                    <FaRegStarHalfStroke size={24} />
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex items-center gap-x-4 mb-6">
                  <h5 className="text-lg leading-4 font-medium w-[150px]">Excellent</h5>
                  <div className="w-[664px] bg-[#D9D9D9] rounded-full h-[5px] dark:bg-gray-700">
                    <div className="bg-[#FFB547] h-[5px] rounded-full" style={{ width: "100%" }}></div>
                  </div>
                  <p>100</p>
                </div>
                <div className="flex items-center gap-x-4 mb-6">
                  <h5 className="text-lg leading-4 font-medium w-[150px]">Good</h5>
                  <div className="w-[664px] bg-[#D9D9D9] rounded-full h-[5px] dark:bg-gray-700">
                    <div className="bg-[#FFB547] h-[5px] rounded-full" style={{ width: "80%" }}></div>
                  </div>
                  <p>8</p>
                </div>
                <div className="flex items-center gap-x-4 mb-6">
                  <h5 className="text-lg leading-4 font-medium w-[150px]">Average</h5>
                  <div className="w-[664px] bg-[#D9D9D9] rounded-full h-[5px] dark:bg-gray-700">
                    <div className="bg-[#FFB547] h-[5px] rounded-full" style={{ width: "70%" }}></div>
                  </div>
                  <p>7</p>
                </div>
                <div className="flex items-center gap-x-4 mb-6">
                  <h5 className="text-lg leading-4 font-medium w-[150px]">Below Average</h5>
                  <div className="w-[664px] bg-[#D9D9D9] rounded-full h-[5px] dark:bg-gray-700">
                    <div className="bg-[#FFB547] h-[5px] rounded-full" style={{ width: "60%" }}></div>
                  </div>
                  <p className="self-end">6</p>
                </div>
                <div className="flex items-center gap-x-4">
                  <h5 className="text-lg leading-4 font-medium w-[150px]">Poor</h5>
                  <div className="w-[664px] bg-[#D9D9D9] rounded-full h-[5px] dark:bg-gray-700">
                    <div className="bg-[#FFB547] h-[5px] rounded-full" style={{ width: "5%" }}></div>
                  </div>
                  <p>1</p>
                </div>
              </div>
            </div>
            <div className="">
              <input type="text" placeholder="Leave Comment" className="text-sm leading-4 tracking-[-0.5%] w-full border border-[#CECECE] outline-none rounded-xl py-6 px-4 mb-8" />
            </div>
          </div>
          {/* comment_part */}
          <div className="flex gap-x-5 bg-[#FAFAFA] py-6 pr-7 pl-4 rounded-xl mb-6">
            <div className="">
              <img src={UserPic} alt="" />
            </div>
            <div className="w-[1000px]">
              <div className="flex items-center justify-between mb-2">
                <h6 className="text-[17px] leading-6 font-bold">Ronald Richards</h6>
                <p className="text-sm leading-4 font-medium">24 January,2025</p>
              </div>
              <div className="flex items-center text-[#FFB547] w-[116px] mb-2">
                <FaStar size={24} />
                <FaStar size={24} />
                <FaStar size={24} />
                <FaStar size={24} />
                <FaStar size={24} />
              </div>
              <p className="text-[15px] leading-6 font-medium text-[#7E7E7E]">I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn’t be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn’t connect with my data plan, since the new phones don’t have the physical Sim tray anymore, but couldn’t have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly recommend!!!🖤</p>

            </div>
          </div>
          <div className="flex gap-x-5 bg-[#FAFAFA] py-6 pr-7 pl-4 rounded-xl mb-6">
            <div className="">
              <img src={UserPic2} alt="" />
            </div>
            <div className="w-[1000px]">
              <div className="flex items-center justify-between mb-2">
                <h6 className="text-[17px] leading-6 font-bold">Grace Carey</h6>
                <p className="text-sm leading-4 font-medium">02 March,2025</p>
              </div>
              <div className="flex items-center text-[#FFB547] w-[116px] mb-2">
                <FaStar size={24} />
                <FaStar size={24} />
                <FaStar size={24} />
                <FaStar size={24} />
                <FaRegStarHalfStroke size={24} />
              </div>
              <p className="text-[15px] leading-6 font-medium text-[#7E7E7E]">This phone has 1T storage and is durable. Plus all the new iPhones have a C port! Apple is phasing out the current ones! (All about the Benjamin’s) So if you want a phone that’s going to last grab an iPhone 14 pro max and get several cords and plugs.</p>

            </div>
          </div>
          <div className="flex gap-x-5 bg-[#FAFAFA] py-6 pr-7 pl-4 rounded-xl mb-6">
            <div className="">
              <img src={UserPic3} alt="" />
            </div>
            <div className="w-[1000px]">
              <div className="flex items-center justify-between mb-2">
                <h6 className="text-[17px] leading-6 font-bold">Darcy King</h6>
                <p className="text-sm leading-4 font-medium">28 December,2024</p>
              </div>
              <div className="flex items-center text-[#FFB547] w-[116px] mb-2">
                <FaStar size={24} />
                <FaStar size={24} />
                <FaStar size={24} />
                <FaStar size={24} />
                <FaRegStar size={24} />
              </div>
              <p className="text-[15px] leading-6 font-medium text-[#7E7E7E] mb-2">I might be the only one to say this but the camera is a little funky. Hoping it will change with a software update: otherwise, love this phone! Came in great condition</p>
              <div className="flex items-center gap-x-2">
                <img src={Review1P} alt="" />
                <img src={Review2P} alt="" />
              </div>

            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default SinglePageProduct