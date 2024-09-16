import { useState } from 'react';
import imagen from './assets/imagen.svg';

function App() {
  // Estado para controlar si el menú está abierto o cerrado
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="w-full px-5 sm:px-10 lg:px-20 h-16 flex justify-between items-center">
        <h1 className="text-secondary font-bold text-lg sm:text-xl">COOWORK</h1>

        {/* Menú en pantallas grandes */}
        <div className="hidden md:flex gap-5 sm:gap-10 text-secondary">
          <button className="border-b-2 border-white hover:border-primary">Features</button>
          <button className="border-b-2 border-white hover:border-primary">About</button>
          <button className="border-b-2 border-white hover:border-primary">Download</button>
          <button className="border-b-2 border-white hover:border-primary">Contact</button>
        </div>

        {/* Botón Sign Up */}
        <button className='bg-secondary text-white font-medium text-xs sm:text-sm flex items-center justify-center rounded-3xl h-10 px-5 sm:px-7 outline hover:outline-secondary hover:text-secondary hover:bg-white transition-all duration-300'>
          SIGN UP
        </button>

        {/* Icono de hamburguesa en pantallas pequeñas */}
        <button
          className="md:hidden text-secondary text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Menú desplegable en pantallas pequeñas */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-2 bg-white px-5 sm:px-10 py-4 text-secondary">
          <button className="border-b-2 border-white hover:border-primary">Features</button>
          <button className="border-b-2 border-white hover:border-primary">About</button>
          <button className="border-b-2 border-white hover:border-primary">Download</button>
          <button className="border-b-2 border-white hover:border-primary">Contact</button>
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-col-reverse lg:flex-row items-center pl-5 sm:pl-10 lg:pl-20 mt-10 justify-between">
        <div className='flex flex-col gap-5 sm:gap-10 w-full lg:w-fit'>
          <div className=''>
            <span className='text-primary font-bold text-sm sm:text-base'>ONLINE CO-WORKING</span>
            <h1 className='font-bold text-secondary text-4xl sm:text-5xl md:text-6xl lg:text-8xl'>
              YOUR NEXT <br /> CO-WORK <br /> SPACE
            </h1>
          </div>
          <span className='text-secondary text-sm sm:text-base'>
            Be in the same room digitally, <br /> all the essentials you need.
          </span>

          <button className='bg-primary text-white font-medium text-xs sm:text-sm flex items-center justify-center rounded-3xl h-10 w-fit px-5 sm:px-7 outline hover:outline-primary hover:text-primary hover:bg-white transition-all duration-300'>
            GET STARTED
          </button>
        </div>

        {/* Image */}
        <img src={imagen} alt="Coworking Illustration" className='h-60 sm:h-80 md:h-[400px] lg:h-[600px] w-auto' />
      </div>
    </>
  );
}

export default App;
