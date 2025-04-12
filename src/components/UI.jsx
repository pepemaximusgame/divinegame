import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UI = () => {

  const [showButton, setShowButton] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true); // Show the button after 5 seconds
    }, 7000); // 5000ms = 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <main>
        <a href="https://dexscreener.com/">
        <img src="images/DexLogo.png" className="pointer-events-auto absolute 
        top-16 right-40 w-8 h-8 transition
         duration-300 hover:scale-110 hover:rotate-5 
         hover:opacity-80" />
        </a>

        <a href="https://x.com/">
        <img src="images/xLogo.png" className="pointer-events-auto absolute 
        top-16 right-30 w-8 h-8 transition 
        duration-300 hover:scale-110 hover:rotate-5 
        hover:opacity-80" />
        </a>

        <a href="https://dexscreener.com/">
        <img src="images/teleLogo.png" 
        className="pointer-events-auto absolute 
        top-16 right-20 w-8 h-8 transition 
        duration-300 hover:scale-110 hover:rotate-5 
        hover:opacity-80" />
        </a> 

      
      <img src="images/pepeHigh.png" className="absolute top-1 left-6 w-14 h-14 
      md:w-26 md:h-50 sm:w-14 sm:h-14" />
    
    <div className="fixed inset-0 pointer-events-none">
      <section
        className={`flex w-full h-full flex-col items-center justify-center 
      duration-500`}
      >
        <div className="h-[60%]"></div>
        {/* <button type="button"
          onClick={() => {navigate('/home')}}
          className="pointer-events-auto text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition duration-50"
        >
          ENTER
        </button> */}

     {
       showButton ?(  <button type="button"
          className="pointer-events-auto text-gray-900 
          bg-gradient-to-r from-teal-200 to-lime-200 
          hover:bg-gradient-to-l hover:from-teal-200
           hover:to-lime-200 focus:ring-4 focus:outline-none
            focus:ring-lime-200 dark:focus:ring-teal-700
             font-medium rounded-lg text-sm px-5 py-2.5 
             text-center me-2 mb-2 transition duration-50"
        >
          Enter
        </button>) : null
      }  

        
      </section>
    </div>
    </main>
  );
};
