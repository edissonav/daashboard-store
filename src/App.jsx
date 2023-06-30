import { useState } from "react";
import Sidebar from "./components/shared/Sidebar"
import { RiDeleteBin6Fill, RiArrowDownCircleLine, RiSearchEyeLine, RiCloseCircleLine, RiPieChartFill, RiMenuLine, RiAccountCircleLine, RiAddLine, RiLightbulbFlashLine } from "react-icons/ri";
import Cart from "./components/shared/Cart";
import Header from "./components/shared/Header";
import Card from "./components/shared/Card";
function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu)
    setShowOrder(false)
  }
  const toggleOrder=()=>{
    setShowOrder(!showOrder);
    setShowMenu(false)
  }
  return (
    <>
      <div className="bg-[#262837] w-full min-h-screen">
                  {/* cart */}

        <Sidebar showMenu={showMenu} />

        <Cart showOrder={showOrder} setShowOrder={setShowOrder}/>
        {/* MENU MOVIL  */}
        <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-500 py-4 px-8 flex items-center justify-between rounded-tl-xl rounden-tr-xl">

          <button onClick={toggleMenu} className="text-white p-2">
            {showMenu ? <RiCloseCircleLine /> : <RiMenuLine />}

          </button>
          <button className="p-2">
            <RiAccountCircleLine />
          </button>
          <button className="p-2">
            <RiAddLine />
          </button>
          <button className="p-2" onClick={toggleOrder}>
            <RiPieChartFill />
          </button>

        </nav>
        <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 ">
          <div className="lg:col-span-6 md:p-6 p-2">
            <Header/>
            {/* title content */}
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-xl text-gray-300">
                Choose dishes
              </h2>
              <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
                <RiArrowDownCircleLine /> Dine In
              </button>
            </div>
            {/* content */}
            <div className="p-8 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
              {/* card */}
              <Card img="lasana.png" description="spicy seasoned seafood noddles" price="3.00" inventory="20"/>
              {/* card */}
              <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col 
                  items-center text-gray-300 text-center gap-2">
                <img src="hamburgesa.png" alt=""
                  className="w-40 h-40 -mt-20 shadow-2xl rounded-full object-contain" />
                <p className="text-xl">spicy seasoned seafood noddles</p>
                <span className="text-gray-400">$3.00</span>
                <p className="text-gray-600">20 bowls avaliable</p>
              </div>{/* card */}
              <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col 
                  items-center text-gray-300 text-center gap-2">
                <img src="brasil.png" alt=""
                  className="w-40 h-40 -mt-20 shadow-2xl rounded-full object-contain" />
                <p className="text-xl">spicy seasoned seafood noddles</p>
                <span className="text-gray-400">$3.00</span>
                <p className="text-gray-600">20 bowls avaliable</p>
              </div>{/* card */}
              <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col 
                  items-center text-gray-300 text-center gap-2">
                <img src="hamburgesa.png" alt=""
                  className="w-40 h-40 -mt-20 shadow-2xl rounded-full object-contain" />
                <p className="text-xl">spicy seasoned seafood noddles</p>
                <span className="text-gray-400">$3.00</span>
                <p className="text-gray-600">20 bowls avaliable</p>
              </div>{/* card */}
              <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col 
                  items-center text-gray-300 text-center gap-2">
                <img src="pizza.png" alt=""
                  className="w-40 h-40 -mt-20 shadow-2xl rounded-full object-contain" />
                <p className="text-xl">spicy seasoned seafood noddles</p>
                <span className="text-gray-400">$3.00</span>
                <p className="text-gray-600">20 bowls avaliable</p>
              </div>{/* card */}
              <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col 
                  items-center text-gray-300 text-center gap-2">
                <img src="spageti.png" alt=""
                  className="w-40 h-40 -mt-20 shadow-2xl rounded-full object-contain" />
                <p className="text-xl">spicy seasoned seafood noddles</p>
                <span className="text-gray-400">$3.00</span>
                <p className="text-gray-600">20 bowls avaliable</p>
              </div>
            </div>
          </div>

          
        </main>
      </div>

    </>
  )
}

export default App
