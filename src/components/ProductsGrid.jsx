import PopularProduct from './PopularProduct'
import IpedPro from '/IpedPro.png'
import Watch3 from '/Watch3.png'
import Gelaxxy from '/Gelaxxy.png'
import Macbook1 from '/Macbook1.png'


const ProductsGrid = () => {
  return (
    <>
      <section className='max-w-[1440px] mx-auto'>
        <div className="mt-14 mb-8 flex w-full">
          <PopularProduct
            GridHeadText={"Popular Products"}
            GridSrc={Watch3}
            GridPeraText={"iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."} />
          <PopularProduct className="bg-[#F9F9F9]"
            GridHeadText={"Ipad Pro"}
            GridSrc={IpedPro}
            GridPeraText={"iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."} />
          <PopularProduct className="bg-[#EAEAEA]"
            GridHeadText={"Samsung Galaxy "}
            GridSrc={Gelaxxy}
            GridPeraText={"iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."} />
          <PopularProduct className={"bg-[#2C2C2C] text-white"} h4className={"text-white"}
            GridHeadText={"Macbook Pro"}
            GridSrc={Macbook1}
            GridPeraText={"iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."} />
        </div>
      </section>
    </>
  )
}

export default ProductsGrid