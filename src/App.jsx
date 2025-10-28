import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import { SymbologyProvider } from "./contexts/SymbologyProvider"
import GlobalContext from "./contexts/globalContext"
import MasterLayout from "./layouts/MasterLayout"
import Homepage from "./pages/Homepage"
import CardResult from "./pages/CardResult"
import Sets from "./pages/Sets"

const App = () => {
  const [searchMode, setSearchMode] = useState("name");
  const [isLoading, setIsLoading] = useState(false);

  const values = {
    searchMode,
    setSearchMode,
    isLoading,
    setIsLoading
  }

  return (
    <SymbologyProvider>
      <GlobalContext.Provider value={values}>
        <BrowserRouter>
          <Routes>
            <Route element={<MasterLayout />}>
              <Route index element={<Homepage />} />
              <Route path="/card/:code/:number" element={<CardResult />} />
              <Route path="/sets" element={<Sets />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </SymbologyProvider>
  )
}

export default App
