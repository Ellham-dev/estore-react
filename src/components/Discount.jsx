import Product from "./Product"


const Discount = () => {
  return (
    <>
      <section>
        <div className="max-w-[1120px] m-auto">
          <div className="mb-20">
            <div className="mb-8 mt-20">
              <h5 className="font-medium text-2xl leading-8">Discounts up to -50%</h5>
            </div>
            <div className="flex gap-x-4">
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

export default Discount