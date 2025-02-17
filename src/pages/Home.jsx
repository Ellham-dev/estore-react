import Cetagory from "../components/Cetagory"
import Discount from "../components/Discount"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Products from "../components/Products"
import ProductsGrid from "../components/ProductsGrid"
import Progellary from "../components/Progellary"
import Promotion from "../components/Promotion"


const Home = () => {
    return (
        <>
        <Hero/>
        <Progellary/>
        <Cetagory/>
        <Products/>
        <ProductsGrid/>
        <Discount/>
        <Promotion/>

        </>
    )
}

export default Home