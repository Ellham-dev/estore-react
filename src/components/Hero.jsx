import React from 'react'
import iphone from '/Iphonefull.png'

const Hero = () => {
  return (
    <>
    <section className='bg-[#211C24]'>
      <div className=" max-w-[1120px] m-auto">
      <div className="flex items-center">
        {/* title_part */}
        <div className=" text-white w-[714px] mt-[88px]">
          <h3 className=' font-semibold text-2xl leading-8 mb-6 text-[#909090]'>Pro.Beyond.</h3>
          <h1 className=' font-thin text-8xl leading-18 mb-6'>IPhone 14 <span className=' font-semibold'>Pro</span></h1>
          <p className=' font-medium text-lg leading-6 text-[#909090] mb-6 '>Created to change everything for the better. For everyone</p>
          <button className='rounded-md border px-14 py-4 cursor-pointer'>Shop Now</button>

        </div>
        {/* image_part */}
        <div className="">
          <img src={iphone} alt="" />
        </div>
      </div>
      </div>

    </section>
    </>
  )
}

export default Hero