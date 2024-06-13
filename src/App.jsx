import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import PageContent from './layout/PageContent';

function App() {
  return (
    <>
    <Router>
      <main className='flex flex-col md:justify-center md:items-center min-h-screen'>
        <Header />
        <PageContent/>
        <Footer />
      </main>
    </Router>
    </>
  )
}

export default App
