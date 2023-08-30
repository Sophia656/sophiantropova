import { PagesContext } from "./components/context/context"
import React, { useState } from "react";
import HomePage from "./pages/home/HomePage";
import LangBtn from "./components/UI/language-btn/LangBtn";


function App() {
  const [height, setHeight] = useState(0)
  // const navigate = useNavigate()
  // const location = useLocation()
  const [baseHeight, setBaseHeight] = useState('fit-content')
  const [modalCrYear, setModalCrYear] = useState('')
  const [testAgeModal, setTestAgeModal] = useState(true)
  const [rus, setRus] = useState(false)

  return (
    <PagesContext.Provider value={{
      height, setHeight, 
      baseHeight, setBaseHeight, 
      // navigate, location,
      modalCrYear, setModalCrYear,
      testAgeModal, setTestAgeModal,
      rus, setRus
    }}>
    {/* <div> */}
      <LangBtn />
      <HomePage></HomePage>
    {/* </div> */}
    </PagesContext.Provider>
  );
}

export default App;
