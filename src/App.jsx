import "./App.css";

import AboutUs from "./components/aboutUs/AboutUs";
import Header from "./components/header/Header";
import Loader from "./components/loader/Loader";
import SpinContainer from "./components/spin/SpinContainer";
import Tokenomics from "./components/tokenomics/Tokenomics";
import TokenSale from "./components/tokenSale/TokenSale";
import UserInfo from "./components/userInfo/UserInfo";
import Footer from "./components/footer/Footer";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect (() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000)
    return () => clearTimeout(timer)
  })

  const [isTokenSaleBlinking, setIsTokenSaleBlinking] = useState(false);
  const handleTokenSaleBlinking = () => {
    setIsTokenSaleBlinking(true);
    setTimeout(() => {
      setIsTokenSaleBlinking(false);
    }, 2000);
  };

  const [isSpinBlinking, setIsSpinBlinking] = useState(false);
  const handleSpinBlinking = () => {
    setIsSpinBlinking(true);
    setTimeout(() => {
      setIsSpinBlinking(false);
    }, 2000);
  };
  const [isTokenomicsBlinking, setIsTokenomicsBlinking] = useState(false);
  const handleTokenomicsBlinking = () => {
    setIsTokenomicsBlinking(true);
    setTimeout(() => {
      setIsTokenomicsBlinking(false);
    }, 2000);
  };
  const [isSocialsBlinking, setIsSocialsBlinking] = useState(false);
  const handleSocialsBlinking = () => {
    setIsSocialsBlinking(true);
    setTimeout(() => {
      setIsSocialsBlinking(false);
    }, 2000);
  };

  return (
    <div className="body">
      <AnimatePresence>
        
        {isLoading ? (<Loader />):
        (<motion.div className="content">
            <Header
              handleTokenSaleBlinking={handleTokenSaleBlinking}
              handleSpinBlinking={handleSpinBlinking}
              handleTokenomicsBlinking={handleTokenomicsBlinking}
              handleSocialsBlinking={handleSocialsBlinking}
            />
            <TokenSale isTokenSaleBlinking={isTokenSaleBlinking} />
            <UserInfo />
            <SpinContainer isSpinBlinking={isSpinBlinking} />
            <AboutUs />
            <Footer isSocialsBlinking={isSocialsBlinking} />
            <Tokenomics isTokenomicsBlinking={isTokenomicsBlinking} />
          </motion.div>)}
      </AnimatePresence>
    </div>
  );
}

export default App;
