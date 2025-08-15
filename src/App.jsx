import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import ScrollToHashElement from "./components/ScrollToHashElement";

export default function App() {
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <ScrollToHashElement />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </BrowserRouter>
    </div>
  )
}