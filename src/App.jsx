import './App.css';

import AboutUs from './components/aboutUs/AboutUs';
import Header from './components/header/Header';
import Loader from './components/loader/Loader';
import SpinContainer from './components/spin/SpinContainer';
import Tokenomics from './components/tokenomics/Tokenomics';
import TokenSale from './components/tokenSale/TokenSale';
import UserInfo from './components/userInfo/UserInfo';
import Footer from './components/footer/Footer';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); // Додаємо стан для координат мишки

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

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

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const backgroundStyle = {
    backgroundPosition: `calc(50% + ${(mousePosition.x / 50) + 10}px) calc(50% + ${(mousePosition.y / 50) + 10}px)`, 
  };

  return (
    <div className="body">
      <AnimatePresence>
        {isLoading ? (
          <Loader />
        ) : (
          <motion.div
            className="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={backgroundStyle} 
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
