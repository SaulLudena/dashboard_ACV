import './style/tailwind.css'
import CircularChart from './components/CircularChart'
import HelloClient from './components/HelloClient'
import MonthsCharts from './components/MonthsChart'
import SalesChart from './components/SalesChart'
import Squares from './components/Squares'

function App() {
  return (
    <>
      a
      <div className="container grid grid-cols-1 max-w-md-7 sm:mx-auto sm:gap-y-2 sm:grid-cols-1 sm:col-span-12 lg:gap-3 gap-y-3 lg:grid-cols-12 ">
        <HelloClient />
        <Squares />
        <MonthsCharts />
        <SalesChart />
        <CircularChart />*
      </div>
    </>
  )
}

export default App
