import { MdFavoriteBorder } from "react-icons/md";


const Product = ({Src,text,Price}) => {
    return (
        <>
            <div className={"max-w-[268px] bg-[#EDEDED] rounded-lg flex flex-col items-center p-4"}>
                <MdFavoriteBorder size={32} className="mb-4 self-end" />
                <div>
                    <img src={Src} alt="IphoneImg" className="mb-4 w-[160px]"/ ></div>
                <p className="mb-4 text-[16px] font-medium leading-6 mx-4 text-center">{text}</p>
                <h3 className="mb-8 text-2xl font-semibold leading-6">${Price}</h3>
                <button className="Text-[14px] font-medium leading-6 border px-16 py-3 text-white bg-black rounded-md cursor-pointer mb-8">Buy Now</button>
            </div>
        </>
    )
}

export default Product