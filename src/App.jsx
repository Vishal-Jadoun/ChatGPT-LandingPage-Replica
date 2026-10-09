import Sidebar from './components/Sidebar/Sidebar'
import Reicon from './components/Reicon'
import { ArrowDown5 } from 'reicon'
import './App.css'

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <header className="topbar">
          <div className="topbar-left">
            <span className="model-label">ChatGPT</span>
            <Reicon icon={ArrowDown5} size={20} /> 
          </div>
        </header>
      </main>
    </div>
  )
}

export default App
