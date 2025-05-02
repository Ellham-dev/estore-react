import { Link } from "react-router"
import Product from "./Product"
import Watch2 from '/Watch2.png'
import GalaxyZ from '/GalaxyZ.png'
import GalaxyBuds1 from '/GalaxyBuds1.png'
import Iped1 from '/Iped1.png'

const Discount = () => {
  return (
    <>
      <section>
        <div className="max-w-[1120px] m-auto">
          <div className="mb-20">
            <div className="mb-8 mt-20">
              <h5 className="font-medium text-2xl leading-8">Discounts up to -50%</h5>
            </div>
            <div className="flex gap-x-4">
              
              <Link to={"product"}><Product Src={GalaxyZ} text={"Galaxy Z Fold5 Unlocked | 256GB | Phantom Black"} Price={1790}/></Link>
              <Link to={"product"}><Product Src={GalaxyBuds1} text={"Galaxy Buds FE Graphite 47mm Black"} Price={99}/></Link>
              <Link to={"product"}><Product Src={Watch2} text={"Samsung Galaxy Watch6 Classic 47mm Black"} Price={364}/></Link>
              <Link to={"product"}><Product Src={Iped1} text={'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021'} Price={399}/></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Discount