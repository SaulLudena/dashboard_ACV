import './style/tailwind.css'
import CircularChart from './components/CircularChart'
import HelloClient from './components/HelloClient'
import MonthsCharts from './components/MonthsChart'
import SalesChart from './components/SalesChart'
import Squares from './components/Squares'
import SideBar from './components/SideBar'
import Navbar from './components/Navbar'
import EmpresaTest from './routes/EmpresaTest'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen grid-flow-row-dense mx-auto overflow-hidden">
        <SideBar />
        <div className="w-full h-full overflow-y-auto">
          <div className="">
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <div className="w-full p-3">
                    <div className="grid grid-cols-1 text-white sm:mx-auto sm:gap-y-2 sm:grid-cols-1 sm:col-span-12 lg:gap-3 gap-y-3 lg:grid-cols-12">
                      <HelloClient />
                      <Squares />
                      <MonthsCharts />
                      <SalesChart />
                      <CircularChart />
                    </div>
                  </div>
                }
              />
              <Route path="/Empresa" element={<EmpresaTest />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
    /*    <>
      <div className="flex h-screen grid-flow-row-dense mx-auto overflow-hidden">
        <SideBar />
        <div className="w-full h-full overflow-y-auto">
          <div className="">
            <Navbar />
            <BrowserRouter>
              <Routes>
                <Route
                  path="/"
                  element={
                    <div className="w-full p-3">
                      <div className="grid grid-cols-1 text-white sm:mx-auto sm:gap-y-2 sm:grid-cols-1 sm:col-span-12 lg:gap-3 gap-y-3 lg:grid-cols-12">
                        <HelloClient />
                        <Squares />
                        <MonthsCharts />
                        <SalesChart />
                        <CircularChart />
                      </div>
                    </div>
                  }
                />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </>*/
  )
}

export default App
