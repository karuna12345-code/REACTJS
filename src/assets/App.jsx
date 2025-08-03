import React  from "react"
import { BrowserRouter, Route, Router } from "react-router-dom"
import countpractice from "../countpractice"


const App =()=>{

return(
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<countpractice/>}/>
        <Route path='/index' element={<index/>}/>
    </Routes>
    </BrowserRouter>
    </>
)

}
export default App
