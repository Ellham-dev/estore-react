import PromotionBG from '/promotionBG.png'

const Promotion = () => {
  return (
    <>
      <section className='relative'>
        <div className="">
          <img src={PromotionBG} alt="" />
        </div>
        <div className="absolute top-[140px] left-1/2 -translate-x-1/2 text-white text-center">
          <h2 className='text-7xl font-thin leading-18'>Big Summer <span className='font-medium'>Sale</span></h2>
          <p className='text-[16px] leading-8 mb-10 text-[#787878]'>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
          <button className="Text-[16px] font-medium leading-6 border px-14 py-4 rounded-md cursor-pointer mb-14">Buy Now</button>
        </div>
      </section>
    </>
  )
}

export default Promotion