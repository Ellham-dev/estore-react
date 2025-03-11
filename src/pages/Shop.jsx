import { MdArrowForwardIos } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import Product from "../components/Product";
import Sidebar from "../components/Sidebar";

const Shop = () => {
    return (
        <>
            <header>
                <div className="max-w-[1120px] m-auto mb-14">
                    {/* Breadcrumb  */}
                    <div className="">
                        <ul className="flex items-center w-full h-[104px] gap-x-4 text-[16px] font-medium leading-4 text-[#A4A4A4] ">
                            <li>Home</li>
                            <MdArrowForwardIos size={24} />
                            <li>Catalog</li>
                            <MdArrowForwardIos size={24} />
                            <li className="text-black">Smartphones</li>
                        </ul>
                    </div>

                    <div className="flex gap-8">
                        <Sidebar/>

                        {/* Products Part  */}
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-6">
                                <div className="">
                                    <p className="text-[16x] leading-[16px] tracking-[3%] font-medium">Selected Products:
                                        85</p>
                                </div>
                                <div className="flex items-center justify-between w-[256px] border border-[#D4D4D4] rounded-md cursor-pointer">
                                    <h6 className="text-[15x] leading-[16px] tracking-[3%] py-3 pl-3">By rating</h6>
                                    <IoIosArrowDown size={24} className="pr-1" />
                                </div>
                            </div>
                            <div className="flex items-center gap-y-6 flex-wrap justify-between">
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        
                    </div>
                </div>
            </header>
        </>
    )
}

export default Shop