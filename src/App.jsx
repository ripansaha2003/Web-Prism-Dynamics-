import { Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homepage'
import CommonLayout from './pages/common-layout/common-layout'
import AboutUs from './pages/about-us/about-us'
import DedicatedHiring from './pages/dedicated-hiring/dedicated-hiring'
import WebDevelopment from './pages/web-development/web-development'
import AppDevelopment from './pages/app-development/app-development'
import Iot from './pages/iot/iot'
import QaTesting from './pages/qa-testing/qa-testing'
import ContactUs from './pages/contact-us/contact-us'
import Aiml from './pages/ai-ml/ai-ml'
import ArVr from './pages/ar-vr/ar-vr'
import Maintain from './pages/maintenance/maintenance'
import DigitalMarketing from './pages/digital-marketing/digital-marketing'
import BlockChain from './pages/blockchain/blockchain'
import CreativeServices from './pages/creative-service/creative-service'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="case-study" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="hire-developer" element={<DedicatedHiring />} />
          <Route path='services' element={<><Outlet /></>}>
            <Route index element={<><h1>services</h1></>}/>
              <Route path='blockchain' element={<BlockChain />} />
            <Route path='web-development' element={<WebDevelopment />} />
            <Route path='iot' element={<Iot />} />
            <Route path='qa-testing' element={<QaTesting />} />
            <Route path='maintenance' element={<Maintain />} />
             <Route path="ai-ml" element={<Aiml/>} />
          <Route path="ar-vr" element={<ArVr/>} />
          
            <Route path='digital-marketing' element={<DigitalMarketing />} />
            <Route path='app-development' element={<AppDevelopment />} />
            <Route path='creative-service' element={<CreativeServices />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}
export default App
