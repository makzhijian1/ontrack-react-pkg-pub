import './App.css';
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DesktopView from './pages/desktop/DesktopView';
import TabletView from './pages/tablet/TabletView';
import MobileLandingPage from './pages/mobile/MobileLandingPage';
import Service from './pages/mobile/Service';


function App() {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 })
  const isMobile = useMediaQuery({ minWidth: 330, maxWidth: 420 })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })


  return (

    <BrowserRouter>
      <Routes>
        
        <Route path="/db/:chatid" element={
          <div>
          
            {/*isMobile && <MobileView />*/}
            {/*isMobile && <MobileView_V1 />*/}
            {isMobile && <Service />} 
            {isDesktop && <DesktopView />}
            {isTablet && <TabletView />}
          </div>
         
        } 
        
        />
        <Route exact path="/" element={
          <div>
            {isDesktop && <DesktopView />}
            {isTablet && <TabletView />}
            {isMobile && <MobileLandingPage />}
          </div>
        }
        />

      </Routes>
    </BrowserRouter>

  );

}
export default App;
