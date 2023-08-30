import { PagesContext } from "./components/context/context"
import React, { useState } from "react";
import LangBtn from "./components/UI/language-btn/LangBtn";
import Burger from "./components/burger/Burger";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import ContactsPage from "./pages/contacts/ContactsPage";

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

  return (
    <PagesContext.Provider value={{
      height, setHeight, 
      baseHeight, setBaseHeight, 
      navigate, location,
      modalCrYear, setModalCrYear,
      testAgeModal, setTestAgeModal,
      rus, setRus,
      showBurger, setShowBurger
    }}>
      {showBurger && <Burger />}
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
        <Route path='/portraits' element={
          <React.Suspense fallback={<div>loading</div>}>
              <PortraitsPage />
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
