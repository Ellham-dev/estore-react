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
                                    <div className="w-[408px] h-16 flex items-center justify-between border outline-none border-[#B5B5B5] rounded-lg px-4   mb-6">
                                        <input type="text" placeholder='Enter Card Number' className=' text-sm leading-6 outline-none w-[299px]' />
                                        <button className='text-[12px] leading-4 font-medium p-2 border border-black rounded-lg w-[76px] cursor-pointer'>Apply</button>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-12">
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
                            <div className="">
                                <button className='bg-black text-white py-4 w-full rounded-xl text-[16px] leading-6 font-medium cursor-pointer'>Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Chart