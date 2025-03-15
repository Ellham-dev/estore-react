import React from 'react'
import ProductChart from './ProductChart'

const Chart = () => {
    return (
        <>
            <section>
                <div className="max-w-[1120px] m-auto">
                    <div className="py-[112px] flex gap-x-12">
                        <div className="w-[536px]">
                            <h5 className='text-2xl leading-6 font-semibold mb-10'>Shopping Cart</h5>
                            {/* single_product_chart */}
                            <ProductChart />
                            <ProductChart />
                            <ProductChart />
                        </div>
                        <div className="w-[536px] border border-[#EBEBEB] py-14 px-16">
                            <div className="">
                                <h6 className='text-[20px] leading-4 font-bold mb-10'>Order Summary</h6>
                                <div className="">
                                    <p className='text-sm leading-4 font-medium text-[#545454] mb-2'>Discount code / Promo code</p>
                                    <input type="text" placeholder='Code' className='w-[408px] text-sm leading-6 p-4 border outline-none border-[#B5B5B5] rounded-lg mb-6' />
                                </div>
                                <div className="">
                                    <p className='text-sm leading-4 font-medium text-[#545454] mb-2'>Your bonus card number</p>
                                    <input type="text" placeholder='Enter Card Number' className='w-[408px] p-4 text-sm leading-6 border outline-none border-[#B5B5B5] rounded-lg mb-6' />
                                </div>
                            </div>
                            <div className="flex items-center justify-between mb-5">
                                <h6 className='text-[16px] leading-6 font-medium'>Subtotal</h6>
                                <p className='text-[16px] leading-8 font-medium '>$2347</p>
                            </div>
                            <div className="flex items-center justify-between mb-2">
                                <h6 className='text-[16px] leading-8 text-[#545454] '>Estimated Tax</h6>
                                <p className='text-[16px] leading-8 font-medium '>$50</p>
                            </div>
                            <div className="flex items-center justify-between mb-5">
                                <h6 className='text-[16px] leading-8 text-[#545454] '>Estimated shipping & Handling</h6>
                                <p className='text-[16px] leading-8 font-medium '>$29</p>
                            </div>
                            <div className="flex items-center justify-between ">
                                <h6 className='text-[16px] leading-6 font-medium '>Total</h6>
                                <p className='text-[16px] leading-8 font-medium '>$2426</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Chart