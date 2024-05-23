import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => toast("Wow so easy!");

  return (
    <>
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <i class="fa-solid fa-user"></i>
    </>
  )
}

export default App
