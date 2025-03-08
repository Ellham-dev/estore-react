import React from 'react'
import popularProduct from '/Gelaxxy.png'

const PopularProduct = ({className}) => {
    return (
        <>
            <div className={`w-1/4 flex flex-col items-center px-8 ${className}`}>
                {/* img_part */}
                <div className="">
                    <img src={popularProduct} alt="" />
                </div>
                {/* title_part */}
                <div className="">
                    <h4 className='text-[33px] font-light leading-12 mb-4 text-[#000000]'>Popular Products</h4>
                    <p className='text-sm font-medium leading-6 mb-4 w-[296px] text-[#909090]'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                    <div className="text-left">
                        <button className="Text-[16px] font-medium leading-6 border px-14 py-4 rounded-md cursor-pointer mb-14">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularProduct