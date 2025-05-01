import Product from "./Product"
import { Link } from "react-router";
import IphoneImg from '/pro.png'
import Watch1 from '/Watch1.png'
import Cemera1 from '/Cemera1.png'
import Headphone1 from '/Headphone1.png'


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
              <Link to={"product"}><Product Src={Headphone1} text={"AirPods Max Silver Starlight Aluminium"} Price={564}/></Link>
              <Link to={"product"}><Product Src={IphoneImg} text={"Apple iPhone 14 Pro Max 128GB Deep Purple"} Price={900} /></Link>
              <Link to={"product"}><Product Src={IphoneImg} text={"Apple iPhone 14 Pro Max 128GB Deep Purple"} Price={900} /></Link>
              <Link to={"product"}><Product Src={IphoneImg} text={"Apple iPhone 14 Pro Max 128GB Deep Purple"} Price={900} /></Link>
              <Link to={"product"}><Product Src={IphoneImg} text={"Apple iPhone 14 Pro Max 128GB Deep Purple"} Price={900} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products