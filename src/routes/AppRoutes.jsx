import { Routes, Route } from "react-router-dom";
import AboutDetail from "../components/views/AboutDetail";
import NotFoundPage from "../components/views/NotFoundPage";
import Home from "../components/views/Home";
import Layout from "../components/Layout";

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/home" element={<Home />}/>
                <Route path="/about" element={<AboutDetail />}/>
                <Route path="/menu" element=""/>
                <Route path="/menu/:item" element=""/>
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    </div>
  )
}

export default AppRoutes