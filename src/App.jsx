import { Route, Routes } from "react-router"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import About from "./pages/About"
import Home from "./pages/Home"
import RootLayout from "./layout/RootLayout"


const App = () => {
  return (
    <>
      <Routes>
        <Route element={<RootLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="blog" element={<Blog/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App