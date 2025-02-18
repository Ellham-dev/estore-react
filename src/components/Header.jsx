import Logo from "/logo.png"
import Icon1 from "/wishlist.svg"
import Icon2 from "/chart.svg"
import Icon3 from "/profile.svg"
import Search from "/Search.svg"
import Burger from "/Burger.svg"
import { Link, NavLink } from "react-router"

const Header = () => {
  return (
    <>
      <section id="header" className="flex max-w-[1120px] items-center mx-auto justify-between h-[88px] gap-x-14 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-32 2xl:px-64">
        {/* logo */}
        <div className="logo">
          <Link to="/"><img src={Logo} alt="logo" /></Link>

        </div>
        {/* search */}
        <div className="hidden md:flex items-center bg-[#F5F5F5] px-4 gap-x-2 rounded-lg h-14 w-[25vw]">
          <img src={Search} alt="search" />
          <input className="w-full h-full outline-none text-[#656565] text-sm" type="text" placeholder="Search" />
        </div>
        {/* menu */}
        <div className="hidden md:block menu">
          <ul className="flex gap-x-12">
            <li className=""> <NavLink style={({ isActive }) => ({
              color: isActive ? "blue" : "black", fontWeight: isActive ? "bold" : "normal"
            })} to="/">Home</NavLink></li>
            <li className=""> <NavLink style={({ isActive }) => ({
              color: isActive ? "blue" : "black", fontWeight: isActive ? "bold" : "normal"
            })} to="about">About</NavLink></li>
            <li className=""> <NavLink style={({ isActive }) => ({
              color: isActive ? "blue" : "black", fontWeight: isActive ? "bold" : "normal"
            })} to="contact">Contact</NavLink></li>
            <li className=""> <NavLink style={({ isActive }) => ({
              color: isActive ? "blue" : "black", fontWeight: isActive ? "bold" : "normal"
            })} to="blog">Blog</NavLink></li>
          </ul>
        </div>

        {/* {/* icon * ghap/} */}
        <div className="hidden md:flex gap-x-6">
          <img className="w-5 h-5 cursor-pointer" src={Icon2} alt="cart" />
          <img className="w-5 h-5 cursor-pointer" src={Icon1} alt="wishlist" />
          <img className="w-5 h-5 cursor-pointer" src={Icon3} alt="profile" />
        </div>
        {/* mobail_mood */}
        <div className="w-10 h-10 md:hidden">
          <img src={Burger} alt="mobile icon" className="w-full cursor-pointer" />
        </div>
        {/* mobail_mood */}
      </section>
    </>
  )
}

export default Header