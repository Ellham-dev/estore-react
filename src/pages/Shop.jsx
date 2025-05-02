import { MdArrowForwardIos } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Product from "../components/Product";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router";
import IphoneImg from '/pro.png'
import Watch1 from '/Watch1.png'
import Cemera1 from '/Cemera1.png'
import Headphone1 from '/Headphone1.png'
import Watch2 from '/Watch2.png'
import GalaxyZ from '/GalaxyZ.png'
import GalaxyBuds1 from '/GalaxyBuds1.png'
import Iped1 from '/Iped1.png'

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
                        <Sidebar />

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
                                <Link to={'product'}>
                                    <Product Src={IphoneImg} text={"Apple iPhone 14 Pro Max 128GB Deep Purple"} Price={900} />
                                </Link>
                                <Link to={'product'}>
                                    <Product Src={Cemera1} text={"Blackmagic Pocket Cinema Camera 6k"} Price={2335} />
                                </Link>
                                <Link to={'product'}>
                                    <Product Src={Watch1} text={"Apple Watch Series 9 GPS 41mm Starlight Aluminium "} Price={345} />
                                </Link>
                                <Link to={'product'}>
                                    <Product Src={Headphone1} text={"AirPods Max Silver Starlight Aluminium"} Price={564} />
                                </Link>
                                <Link to={'product'}>
                                    <Product Src={Watch2} text={"Samsung Galaxy Watch6 Classic 47mm Black"} Price={364} />
                                </Link>
                                <Link to={'product'}>
                                    <Product Src={GalaxyBuds1} text={"Galaxy Buds FE Graphite 47mm Black"} Price={99} />
                                </Link>
                                <Link to={'product'}>
                                    <Product Src={Iped1} text={'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021'} Price={399} />
                                </Link>
                                <Link to={'product'}>
                                    <Product Src={GalaxyZ} text={"Galaxy Z Fold5 Unlocked | 256GB | Phantom Black"} Price={1790} />
                                </Link>
                                <Link to={'product'}>
                                    <Product Src={Cemera1} text={"Blackmagic Pocket Cinema Camera 6k"} Price={2335} />
                                </Link>
                                <Link to={'product'}>
                                    <Product Src={Headphone1} text={"AirPods Max Silver Starlight Aluminium"} Price={564} />
                                </Link>
                                <Link to={'product'}>
                                    <Product Src={Watch1} text={"Apple Watch Series 9 GPS 41mm Starlight Aluminium "} Price={345} />
                                </Link>
                                <Link to={'product'}>
                                    <Product Src={GalaxyZ} text={"Galaxy Z Fold5 Unlocked | 256GB | Phantom Black"} Price={1790} />
                                </Link>
                                
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