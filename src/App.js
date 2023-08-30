import { PagesContext } from "./components/context/context"
import React, { useState } from "react";
import LangBtn from "./components/UI/language-btn/LangBtn";
import Burger from "./components/burger/Burger";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import ContactsPage from "./pages/contacts/ContactsPage";
import Hasard from "./pages/personal/series/hasard/Hasard";
import Cities from "./pages/personal/series/cities/Cities";
import Ballet from "./pages/private/series/ballet/Ballet";
import Anton from "./pages/portraits/series/anton/Anton";
import RinaAnna from "./pages/portraits/series/rina_anna/RinaAnna";
import Nadya from "./pages/portraits/series/nadya/Nadya";
import Nastya from "./pages/portraits/series/nastya/Nastya";
import WeddDay from "./pages/private/series/wedd-day/WeddDay";
import PrivatePage from "./pages/private/PrivatePage";
import Destrudo from "./pages/personal/series/destrudo/Destrudo";
import Kaya from "./pages/portraits/series/kaya/Kaya";
import Nastasya from "./pages/portraits/series/nastasya/Nastasya";
import CentrifugalForce from "./pages/private/series/centrifugal_force/CentrifugalForce";
import Rina from "./pages/portraits/series/rina/Rina";

const HomePage = React.lazy(() => import('./pages/home/HomePage'));
const PersonalPage = React.lazy(() => import('./pages/personal/PersonalPage'));
const PortraitsPage = React.lazy(() => import('./pages/portraits/PortraitsPage'));





function App() {
  const [height, setHeight] = useState(0)
  const navigate = useNavigate()
  const location = useLocation()
  const [baseHeight, setBaseHeight] = useState('fit-content')
  const [modalCrYear, setModalCrYear] = useState('')
  const [testAgeModal, setTestAgeModal] = useState(true)
  const [rus, setRus] = useState(false)
  const [showBurger, setShowBurger] = useState(false)

  const handleClick = () => {
    document.scrollIntoView(0, {behavior: 'smooth'});
  }

  return (
    <PagesContext.Provider value={{
      height, setHeight, 
      baseHeight, setBaseHeight, 
      navigate, location,
      modalCrYear, setModalCrYear,
      testAgeModal, setTestAgeModal,
      rus, setRus,
      showBurger, setShowBurger,
      handleClick
    }}>
      <Burger />
      <LangBtn />
      <Routes>
        <Route path='/' element={
          <React.Suspense fallback={<div>loading</div>}>
              <HomePage />
          </React.Suspense>
        }/>
        <Route path='/personal' element={
          <React.Suspense fallback={<div>loading</div>}>
              <PersonalPage />
          </React.Suspense>
        }/>
        <Route path='/personal/hasard' element={
          <React.Suspense fallback={<div>loading</div>}>
              <Hasard />
          </React.Suspense>
        }/>
        <Route path='/personal/between_the_city_yes_and_the_city_no' element={
          <React.Suspense fallback={<div>loading</div>}>
              <Cities />
          </React.Suspense>
        }/>
        <Route path='/personal/destrudo' element={
          <React.Suspense fallback={<div>loading</div>}>
              <Destrudo />
          </React.Suspense>
        }/>
        <Route path='/portraits' element={
          <React.Suspense fallback={<div>loading</div>}>
              <PortraitsPage />
          </React.Suspense>
        }/>
        <Route path='/portraits/anton' element={
          <React.Suspense fallback={<div>loading</div>}>
              <Anton />
          </React.Suspense>
        }/>
        <Route path='/portraits/rina' element={
          <React.Suspense fallback={<div>loading</div>}>
              <Rina />
          </React.Suspense>
        }/>
        <Route path='/portraits/rina_anna' element={
          <React.Suspense fallback={<div>loading</div>}>
              <RinaAnna />
          </React.Suspense>
        }/>
        <Route path='/portraits/kaya' element={
          <React.Suspense fallback={<div>loading</div>}>
              <Kaya />
          </React.Suspense>
        }/>
        <Route path='/portraits/nadya' element={
          <React.Suspense fallback={<div>loading</div>}>
              <Nadya />
          </React.Suspense>
        }/>
        <Route path='/portraits/nastya' element={
          <React.Suspense fallback={<div>loading</div>}>
              <Nastya />
          </React.Suspense>
        }/>
        <Route path='/portraits/nastasya' element={
          <React.Suspense fallback={<div>loading</div>}>
              <Nastasya />
          </React.Suspense>
        }/>
        <Route path='/private' element={
          <React.Suspense fallback={<div>loading</div>}>
              <PrivatePage />
          </React.Suspense>
        }/>
        <Route path='/private/wedd_day' element={
          <React.Suspense fallback={<div>loading</div>}>
              <WeddDay />
          </React.Suspense>
        }/>
        <Route path='/private/ballet_class' element={
          <React.Suspense fallback={<div>loading</div>}>
              <Ballet />
          </React.Suspense>
        }/>
        <Route path='/private/centrifugal_force' element={
          <React.Suspense fallback={<div>loading</div>}>
              <CentrifugalForce />
          </React.Suspense>
        }/>
        <Route path='/contacts' element={
          <React.Suspense fallback={<div>loading</div>}>
              <ContactsPage />
          </React.Suspense>
        }/>
        <Route path='*' element={
          <React.Suspense fallback={<div>loading</div>}>
              <HomePage/>
          </React.Suspense>
        }/>
      </Routes>
    </PagesContext.Provider>
  );
}

export default App;
