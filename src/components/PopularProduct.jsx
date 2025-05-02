import React from 'react'


const PopularProduct = ({GridSrc,GridHeadText,GridPeraText}) => {
    return (
        <>
            <div className={"w-1/4 flex flex-col items-center px-8"}>
                {/* img_part */}
                <div className="">
                    <img src={GridSrc} alt="" />
                </div>
                {/* title_part */}
                <div className="">
                    <h4 className={"text-[33px] font-light leading-12 mb-4 text-[#000000]"}>{GridHeadText}</h4>
                    <p className='text-sm font-medium leading-6 mb-4 w-[296px] text-[#909090]'>{GridPeraText}</p>
                    <div className="text-left">
                        <button className="Text-[16px] font-medium leading-6 border px-14 py-4 rounded-md cursor-pointer mb-14">Buy Now</button>
                        {/* GridSrc={popularProduct} GridHeadText={"Samsung Galaxy"} GridPeraText={"iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use. */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularProduct