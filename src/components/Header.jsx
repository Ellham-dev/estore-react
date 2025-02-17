import Logo from "/logo.png"
import Icon1 from "/wishlist.svg"
import Icon2 from "/chart.svg"
import Icon3 from "/profile.svg"
import Search from "/Search.svg"

const Header = () => {
  return (
  <>
  <section id="header" className="flex max-w-[1120px] items-center mx-auto justify-between h-[88px] ">
    {/* logo */}
    <div className="logo">
      <img src={Logo} alt="logo" />

    </div>
    {/* search */}
    <div className="items-center flex bg-[#F5F5F5] px-4 gap-x-2 rounded-lg h-14 w-[25vw]">
      <img src={Search} alt="search" />
    <input className="w-full h-full outline-none text-[#656565] text-sm" type="text" placeholder="Search" />
    </div>
    {/* menu */}
    <div className="menu">
      <ul className="flex gap-x-12">
        <li className="hover:font-bold duration-200">Home</li>
        <li className="hover:font-bold duration-200">About</li>
        <li className="hover:font-bold duration-200">Contact</li>
        <li className="hover:font-bold duration-200">Blog</li>
      </ul>
    </div>

    {/* {/* icon * ghap/} */}
      <div className="flex gap-x-6">
      <img className="w-5 h-5" src={Icon2} alt="cart" />
      <img className="w-5 h-5" src={Icon1} alt="wishlist" />
      <img className="w-5 h-5" src={Icon3} alt="profile" />

    </div>
  </section>
  </>
  )
}

export default Header