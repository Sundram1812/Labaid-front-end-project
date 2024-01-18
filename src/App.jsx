import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import QuickNav from "./components/QuickNav";
import CompanyNameAndExp from "./components/CompanyNameAndExp";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AllOptions from "./components/AllOptions";
import SearchBar from "./components/SearchBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import BookATest from "./pages/BookATest";
import HomeCollection from "./pages/HomeCollection";
import LabAidPartner from "./pages/LabAidPartner";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <QuickNav />
      <CompanyNameAndExp />
      <NavBar />
      <HeroSection />
      <AllOptions />
      <SearchBar /> */}
      <QuickNav />
      <CompanyNameAndExp />
      <NavBar />
      <Routes>
        <Route path="/" element={
        <>
          <HeroSection />
          <AllOptions />
          <SearchBar /></>
        }/>


        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="find-a-test" element={<BookATest />} />
        <Route path="home-collection" element={<HomeCollection />} />
        <Route path="labaid-partner" element={<LabAidPartner />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
