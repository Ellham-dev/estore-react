import PopularProduct from './PopularProduct'
import IpedPro from '/IpedPro.png'


const ProductsGrid = () => {
  return (
    <>
      <section className='max-w-[1440px] mx-auto'>
          <div className="mt-14 mb-8 flex w-full">
            <PopularProduct />
            <PopularProduct  className="bg-[#F9F9F9]"/>
            <PopularProduct className="bg-[#EAEAEA]" />
            <PopularProduct  className="bg-[#2C2C2C] text-white" GridHeadText={"jdkdv"} GridSrc={IpedPro} GridPeraText={"egfyufghfbv"}/>
          </div>
      </section>
    </>
  )
}

export default ProductsGrid