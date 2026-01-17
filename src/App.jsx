import { Route,Routes } from "react-router-dom";
import BlogList from "./pages/BlogList.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";

function App() {


  return (
    <>
   <Routes>
    <Route path="/" element={<BlogList/>}></Route>
    <Route path="/blog/:slug" element={<BlogDetails/>}></Route>
   </Routes>
    </>
  )
}

export default App
