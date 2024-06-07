import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import PageContent from './layout/PageContent';

function App() {
  
  return (
    <>
    <main className='flex flex-col  md:justify-center md:items-center min-h-screen'>
      <Header/>
      <PageContent/>
      <Footer/>
    </main>
    </>
  )
}

export default App
