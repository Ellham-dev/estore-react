import { MdFavoriteBorder } from "react-icons/md";
import IphoneImg from '/pro.png'

const Product = ({className}) => {
    return (
        <>
            <div className={`w-[268px] bg-[#EDEDED] rounded-lg flex flex-col items-center p-4 ${className}`}>
                <MdFavoriteBorder size={32} className="mb-4 self-end" />
                <div><img src={IphoneImg} alt="IphoneImg" className="mb-4 w-[160px]" /></div>
                <p className="mb-4 text-[16px] font-medium leading-6 mx-4 text-center">Apple iPhone 14 Pro Max 128GB Deep Purple </p>
                <h3 className="mb-8 text-2xl font-semibold leading-6">$900</h3>
                <button className="Text-[14px] font-medium leading-6 border px-16 py-3 text-white bg-black rounded-md cursor-pointer mb-8">Buy Now</button>
            </div>
        </>
    )
}

export default Product