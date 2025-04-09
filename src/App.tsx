
import './App.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import ContactUs from './pages/contactus'
import AboutUs from './pages/aboutus'
import Events from './pages/events'
import Gallery from './pages/galley'
function App() {


  return (
    <Router>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/contactus" element={<ContactUs/>}></Route>
  <Route path="/aboutus" element={<AboutUs/>}></Route>
  <Route path="/event" element={<Events/>}></Route>
  <Route path="/gallery" element={<Gallery/>}></Route>
</Routes>
</Router>
  )
}

export default App
