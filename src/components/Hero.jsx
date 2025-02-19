import iphonelogo from "/iphone.png"
const Hero = () => {
  return (
    <section id="hero" className=" bg-[#211C24] py-[368px]">
      <div className="one max-w-[1120px] mx-auto px-4">
        <div className="two flex flex-col gap-8 items-center">
          <div className="gap-4">
            <h5 className="text-white font-semibold text-2xl leading-8">Pro.Beyond.</h5>
            <h2 className="text-white font-semibold text-7xl leading-18">IPhone 14 Pro</h2>
            <p className="text-[#909090] font-medium text-xl leading-6">Created to change everything for the better. For everyone</p>
          </div>
          <div className="">
            <button className="border-2 border-white text-white rounded-lg px-5 text-4 font-medium leading-6 py-[6px]">Shop Now</button>
          </div>
          <div className="">
            <img src={iphonelogo} alt="image" />
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Hero