import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { BrowserRouter as Router} from "react-router-dom"
import PageContent from './layout/PageContent';

function App() {
  return (
    <>
    <Router>
      <main className='flex flex-col md:justify-center md:items-center min-h-screen'>
        <Header />
        <PageContent/>
        <Footer />
        <ToastContainer />
      </main>
    </Router>
    </>
  )
}

export default App
