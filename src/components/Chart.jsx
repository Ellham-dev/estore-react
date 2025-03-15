import React from 'react'
import ProductChart from './ProductChart'

const Chart = () => {
    return (
        <>
            <section>
                <div className="max-w-[1120px] m-auto">
                    <div className="py-[112px]">
                        <div className="">
                            <h5 className='text-2xl leading-6 font-semibold mb-10'>Shopping Cart</h5>
                            {/* single_product_chart */}
                            <ProductChart/>
                            <ProductChart/>
                            <ProductChart/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Chart