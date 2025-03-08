import {MdArrowForwardIos} from "react-icons/md";

const Shop = () => {
  return (
    <>
    <header>
        <div className="">
            <div className="">
                <div className="">
                    <ul className="flex items-center gap-x-4 text-[16px] font-medium leading-4 text-[#A4A4A4]">
                        <li>Home</li>
                        <MdArrowForwardIos size={24}/>
                        <li>Catalog</li>
                        <MdArrowForwardIos size={24}/>
                        <li className="text-black">Smartphones</li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Shop