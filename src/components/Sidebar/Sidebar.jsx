import { useState } from 'react'
import { Satellite, Screencast2, MessageQuestion, Setting2, Star2, AddCircle, Electricity } from 'reicon'
import './Sidebar.css'
import Reicon from '../Reicon'

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      {!isOpen && (
        <button className="sidebar-open-btn" onClick={() => setIsOpen(true)}>
          ☰
        </button>
      )}

      <aside className={`sidebar ${isOpen ? 'sidebar--open' : 'sidebar--closed'}`}>
        <div className="sidebar-header">
          <span className="sidebar-title">ChatGPT</span>
          <button className="sidebar-toggle" onClick={() => setIsOpen(false)}>
            ✖
          </button>
        </div>

        <nav className="sidebar-nav">
          <button className="nav-item">
            <Reicon icon={AddCircle} size={20} />
            <span>New chat</span>
          </button>

          <button className="nav-item">
            <Reicon icon={Screencast2} size={20} />
            <span>Images</span>
          </button>

          <button className="nav-item">
            <Reicon icon={Electricity} size={20} />
            <span>Plugins</span>
          </button>

          <button className="nav-item">
            <Reicon icon={Satellite} size={20} />
            <span>Deep research</span>
          </button>

          <a className="nav-item" href="#">
            <span><Reicon icon={Star2} size={20} /></span>
            <span>See plans and pricing</span>
          </a>

          <a className="nav-item" href="#">
            <Reicon icon={MessageQuestion} size={20} />
            <span>Help</span>
          </a>

          <button className="nav-item">
            <span><Reicon icon={Setting2} size={20} /></span>
            <span>Settings</span>
          </button>
        </nav>

        <div className="sidebar-bottom">
          <div className="login-prompt">
            <p className="login-title">Get responses tailored to you</p>
            <p className="login-desc">Log in to get answers based on saved chats, plus create images and upload files.</p>
          </div>
          <button className="login-btn">Log in</button>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
