
import macpro from '/MacBook pro.png'
import play from '/Play.png'
import Headphone from '/Headphone.png'
import choshma from '/choshma.png'
const Progellary = () => {
  return (
    <>
      <section>
        <div className="max-w-[1440px] m-auto flex">
          {/* part_1 */}
          <div className="w-1/2">
            <div className="flex items-center">
              <div className="w-[360px]">
                <img src={play} alt="" className='w-full'/>
              </div>
              <div className="max-w-[338px] mr-12">
                <h3 className='text-5xl font-medium leading-10 mb-4'>Playstation 5</h3>
                <p className='text-sm font-medium leading-6 text-[#909090]'>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
              </div>

            </div>
            <div className="flex">
              <div className="bg-[#EDEDED] flex items-center h-[272px]">
              <div className="">
                <img src={Headphone} alt="" />
              </div>
              <div className="w-[160px] mx-12">
                <h3 className='text-[27px] font-light leading-10'>Apple AirPods <span className='font-medium'>Max</span></h3>
                <p className='text-sm font-medium leading-6 text-[#909090]'>Computational audio. Listen, it's powerful</p>
              </div>

              </div>
              <div className="bg-[#353535] flex items-center text-white h-[272px]">
                <div className="">
                <img src={choshma} alt="" />
              </div>
              <div className="w-[160px] mr-12 ml-4">
                <h3 className='text-[27px] font-light leading-10'>Apple Vision <span className='font-medium'>Pro</span></h3>
                <p className='text-sm font-medium leading-6 text-[#909090]'>An immersive way to experience entertainment</p>
              </div>
              </div>
            </div>

          </div>
          {/* part_2 */}
          <div className="bg-[#EDEDED] flex items-center w-1/2">
            <div className="w-[360px] mr-4 ml-12">
              <h2 className='text-[64px] font-thin leading-14 mb-4'>Macbook <span className='font-medium'>Air</span></h2>
              <p className='text-sm font-medium leading-6 text-[#909090] mb-4'>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
              </p>
              <button className='rounded-md border px-14 py-4 cursor-pointer'>Shop Now</button>
            </div>
            <div className="">
              <img src={macpro} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}



export default Progellary