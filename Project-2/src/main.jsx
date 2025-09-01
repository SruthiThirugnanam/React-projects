import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { Cart } from './formSamples/Cart'
// import './index.css'
// import './CSS/QRCode.css'
// import { QRCode } from './components/QR Code'
// import { UserCard } from './UserCard'
// import { UserDetail } from './components/UserDetail'
// import App from './App.jsx'
// import { RegFrm } from './components/RegFrm'
// import "./components/RegFrm.css"
import { AdviceApp } from './AdviceApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
   {/* <UserCard /> */}
   {/* <QRCode /> */}
   {/* <Cart /> */}
   {/* <UserDetail /> */}
   {/* <RegFrm /> */}
   <AdviceApp />
  </StrictMode>,
)
