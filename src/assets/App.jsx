import React  from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CountPractice from "../countpractice"
import About from "./pages/about"
import Index from "./pages"
import Create from "./pages/Create"

const App =()=>{

return(
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<CountPractice/>}/>
        <Route path='/index' element={<Index/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/create' element={<Create/>}/>
    </Routes>
    </BrowserRouter>
    </>
)

}
export default App
