import Product from "./Product"
import { Link } from "react-router";
import IphoneImg from '/pro.png'
import Watch1 from '/Watch1.png'
import Cemera1 from '/Cemera1.png'
import Headphone1 from '/Headphone1.png'
import Watch2 from '/Watch2.png'
import GalaxyZ from '/GalaxyZ.png'
import GalaxyBuds1 from '/GalaxyBuds1.png'
import Iped1 from '/Iped1.png'


const Products = () => {
  return (
    <>
      <section>
        <div className="max-w-[1120px] m-auto">
          <div className="">
            <div className="mt-14 mb-8">
              <ul className="flex text-xl font-medium leading-8 gap-x-8">
                <li className=""><a href="/">New Arrival</a></li>
                <li className="text-[#8B8B8B]"><a href="/">Bestseller</a></li>
                <li className="text-[#8B8B8B]"><a href="/">Featured Products</a></li>
              </ul>
            </div>
            <div className="flex justify-between gap-y-5 flex-wrap">
              <Link to={"product"}><Product Src={IphoneImg} text={"Apple iPhone 14 Pro Max 128GB Deep Purple"} Price={900} /></Link>
              <Link to={"product"}><Product Src={Cemera1} text={"Blackmagic Pocket Cinema Camera 6k"} Price={2335} /></Link>
              <Link to={"product"}><Product Src={Watch1} text={"Apple Watch Series 9 GPS 41mm Starlight Aluminium "} Price={345} /></Link>
              <Link to={"product"}><Product Src={Headphone1} text={"AirPods Max Silver Starlight Aluminium"} Price={564} /></Link>
              <Link to={"product"}><Product Src={Watch2} text={"Samsung Galaxy Watch6 Classic 47mm Black"} Price={364} /></Link>
              <Link to={"product"}><Product Src={GalaxyZ} text={"Galaxy Z Fold5 Unlocked | 256GB | Phantom Black"} Price={1790} /></Link>
              <Link to={"product"}><Product Src={GalaxyBuds1} text={"Galaxy Buds FE Graphite 47mm Black"} Price={99} /></Link>
              <Link to={"product"}><Product Src={Iped1} text={'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021'} Price={399} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products