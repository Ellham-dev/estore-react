import { MdArrowForwardIos } from "react-icons/md"


const SinglePageProduct = () => {
  return (
    <>
      <section>
        <div className="max-w-[1120px] m-auto">
        <div className="">
          <ul className="flex items-center w-full h-[104px] gap-x-4 text-[16px] font-medium leading-4 text-[#A4A4A4] ">
            <li>Home</li>
            <MdArrowForwardIos size={24} />
            <li>Catalog</li>
            <MdArrowForwardIos size={24} />
            <li>Smartphones</li>
            <MdArrowForwardIos size={24} />
            <li>Apple</li>
            <MdArrowForwardIos size={24} />
            <li className="text-black">iPhone 14 Pro Max</li>
          </ul>
        </div>
        
        </div>

      </section>
    </>
  )
}

export default SinglePageProduct