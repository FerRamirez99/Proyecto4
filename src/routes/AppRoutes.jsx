import { Routes, Route } from "react-router-dom";
import AboutDetail from "../components/views/AboutDetail";
import NotFoundPage from "../components/views/NotFoundPage";
import Home from "../components/views/Home";
import Layout from "../components/Layout";
import BookingDetail from "../components/views/BookingDetail";
import MenuList from "../components/views/MenuList";
import MenuProduct from "../components/views/MenuProduct";

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/home" element={<Home />}/>
                <Route path="/about" element={<AboutDetail />}/>
                <Route path="/menu" element={<MenuList />}/>
                <Route path="/menu/:itemID" element={<MenuProduct />}/>
                <Route path="/booking" element={<BookingDetail />}/>
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    </div>
  )
}

export default AppRoutes