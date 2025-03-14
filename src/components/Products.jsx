import Product from "./Product"
import { Link } from "react-router";


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
             <Link to={"product"}><Product/></Link>
             <Product/>
             <Product/>
             <Product/>
             <Product/>
             <Product/>
             <Product/>
             <Product/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products