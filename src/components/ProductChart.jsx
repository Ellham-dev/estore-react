import React from 'react'
import Iphone_14pro from "/iphone1.png"
import { IoClose } from 'react-icons/io5'

const ProductChart = () => {
    return (
        <>
            <section>
                <div className="flex items-center w-[536px] gap-x-[15px] mb-10">
                    <div className="">
                        <img src={Iphone_14pro} alt="" className='w-[90px]' />
                    </div>
                    <div className="flex items-center">
                        <div className="w-[191px]">
                            <h6 className='text-[16px] font-medium leading-6 mb-2'>Apple iPhone 14 Pro Max 128Gb Deep Purple</h6>
                            <p className='text-sm leading-6'>#25139526913984</p>
                        </div>
                        <div className="flex items-center gap-x-8">
                            <div className="flex items-center gap-x-2">
                                <span className='text-2xl'>-</span>
                                <span className='text-[16px] leading-4 font-medium border px-4 py-2 border-[#D9D9D9] outline-none '>1</span>
                                <span className='text-2xl'>+</span>
                            </div>
                            <div className="flex items-center gap-x-8">
                                <span className='text-[20px] font-medium leading-8 tracking-[3%]'>$1399</span>
                                <IoClose size={24} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductChart