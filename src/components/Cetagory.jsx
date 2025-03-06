

import { MdArrowBackIosNew, MdArrowForwardIos, MdPhoneIphone } from "react-icons/md";



const Cetagory = () => {
  return (
    <>
      <section>
        <div className="max-w-[1120px] mx-auto py-20">
          <div className="flex justify-between items-center mb-8">
            <div className="">
              <h4 className="text-2xl leading-8 font-medium">Browse By Category</h4>
            </div>
            <div className="flex gap-x-4">
              <MdArrowBackIosNew size={32} />
              <MdArrowForwardIos size={32} />

            </div>

          </div>
          <div className="flex gap-x-8">
            <div className="w-[160px] py-6 grid place-items-center rounded-2xl bg-[#EDEDED]">
              <MdPhoneIphone size={48} />
              <h5 className="mt-1">Phone</h5>
            </div>
            <div className="w-[160px] py-6 grid place-items-center rounded-2xl bg-[#EDEDED]">
              <MdPhoneIphone size={48} />
              <h5 className="mt-1">Phone</h5>
            </div>
            <div className="w-[160px] py-6 grid place-items-center rounded-2xl bg-[#EDEDED]">
              <MdPhoneIphone size={48} />
              <h5 className="mt-1">Phone</h5>
            </div>
            <div className="w-[160px] py-6 grid place-items-center rounded-2xl bg-[#EDEDED]">
              <MdPhoneIphone size={48} />
              <h5 className="mt-1">Phone</h5>
            </div>
            <div className="w-[160px] py-6 grid place-items-center rounded-2xl bg-[#EDEDED]">
              <MdPhoneIphone size={48} />
              <h5 className="mt-1">Phone</h5>
            </div>
            <div className="w-[160px] py-6 grid place-items-center rounded-2xl bg-[#EDEDED]">
              <MdPhoneIphone size={48} />
              <h5 className="mt-1">Phone</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cetagory