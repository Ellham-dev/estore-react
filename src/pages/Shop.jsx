import { MdArrowForwardIos } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import Search from "/Search.svg"

const Shop = () => {
    return (
        <>
            <header>
                <div className="max-w-[1120px] m-auto">
                    <div className="">
                    <div className="">
                        <div className="h-[104px] mt-6">
                            <ul className="flex items-center gap-x-4 text-[16px] font-medium leading-4 text-[#A4A4A4] ">
                                <li>Home</li>
                                <MdArrowForwardIos size={24} />
                                <li>Catalog</li>
                                <MdArrowForwardIos size={24} />
                                <li className="text-black">Smartphones</li>
                            </ul>
                        </div>
                        <div className="">
                            <div className="w-[256px]">
                                <div className="flex items-center justify-between mb-4 h-[48px] border-b-[0.5px] border-[#B5B5B5] w-full py-3">
                                    <h6 className="font-medium text-[18px] leading-6 tracking-[3%]">Brand</h6>
                                    <IoIosArrowUp />
                                </div>
                                <div className="mb-4">
                                    <div className="flex items-center bg-[#F5F5F5] px-3 gap-x-2 rounded-lg h-10 w-full">
                                        <img src={Search} alt="search" />
                                        <input className="w-full h-full outline-none text-[#656565] text-sm leading-4" type="text" placeholder="Search" />
                                    </div>
                                    <div className="flex items-center gap-x-2 mt-4 mb-2">
                                        <input type="checkbox" />
                                        <h6 className="font-medium text-[15px] leading-6">Apple</h6>
                                        <p className="text-[12px] leading-6">110</p>
                                    </div>
                                    <div className="flex items-center gap-x-1 mt-4 mb-2">
                                        <input type="checkbox" />
                                        <h6 className="font-medium text-[15px] leading-6">Samsung</h6>
                                        <p className="text-[12px] leading-6">122</p>
                                    </div>
                                    <div className="flex items-center gap-x-1 mt-4 mb-2">
                                        <input type="checkbox" />
                                        <h6 className="font-medium text-[15px] leading-6">Xiaomi</h6>
                                        <p className="text-[12px] leading-6">102</p>
                                    </div>
                                    <div className="flex items-center gap-x-1 mt-4 mb-2">
                                        <input type="checkbox" />
                                        <h6 className="font-medium text-[15px] leading-6">Poco</h6>
                                        <p className="text-[12px] leading-6">56</p>
                                    </div>
                                    <div className="flex items-center gap-x-1 mt-4 mb-2">
                                        <input type="checkbox" />
                                        <h6 className="font-medium text-[15px] leading-6">OPPO</h6>
                                        <p className="text-[12px] leading-6">78</p>
                                    </div>
                                    <div className="flex items-center gap-x-1 mt-4 mb-2">
                                        <input type="checkbox" />
                                        <h6 className="font-medium text-[15px] leading-6">Honor</h6>
                                        <p className="text-[12px] leading-6">97</p>
                                    </div>
                                    <div className="flex items-center gap-x-1 mt-4 mb-2">
                                        <input type="checkbox" />
                                        <h6 className="font-medium text-[15px] leading-6">Motorola</h6>
                                        <p className="text-[12px] leading-6">81</p>
                                    </div>
                                    <div className="flex items-center gap-x-1 mt-4 mb-2">
                                        <input type="checkbox" />
                                        <h6 className="font-medium text-[15px] leading-6">Nokia</h6>
                                        <p className="text-[12px] leading-6">46</p>
                                    </div>
                                    <div className="flex items-center gap-x-1 mt-4 mb-2">
                                        <input type="checkbox" />
                                        <h6 className="font-medium text-[15px] leading-6">Realme</h6>
                                        <p className="text-[12px] leading-6">118</p>
                                    </div>
                                    
                                </div>
                                <div className="">
                                <div className="flex items-center justify-between mb-6 mt-6 h-[48px] w-full relative after:content-[''] after:absolute after:h-[0.5px] after:w-full after:bg-[#B5B5B5] after:left-0 after:-bottom-2">
                                    <h6 className="font-medium text-[18px] leading-6 tracking-[3%] ">Battery capacity</h6>
                                    <IoIosArrowDown />
                                </div>
                                <div className="flex items-center justify-between mb-6 mt-6 h-[48px]">
                                    <h6 className="font-medium text-[18px] leading-6 tracking-[3%]">Screen type</h6>
                                    <IoIosArrowDown />
                                </div>
                                <div className="flex items-center justify-between mb-6 mt-6 h-[48px]">
                                    <h6 className="font-medium text-[18px] leading-6 tracking-[3%]">Screen diagonal</h6>
                                    <IoIosArrowDown />
                                </div>
                                <div className="flex items-center justify-between mb-6 mt-6 h-[48px]">
                                    <h6 className="font-medium text-[18px] leading-6 tracking-[3%]">Protection class</h6>
                                    <IoIosArrowDown />
                                </div>
                                <div className="flex items-center justify-between mb-6 mt-6 h-[48px]">
                                    <h6 className="font-medium text-[18px] leading-6 tracking-[3%]">Built-in memory</h6>
                                    <IoIosArrowDown />
                                </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main">


                    </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Shop