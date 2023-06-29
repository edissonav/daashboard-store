import { useState } from "react";
import Sidebar from "./components/shared/Sidebar"
import { RiDeleteBin6Fill, RiArrowDownCircleLine, RiSearchEyeLine, RiCloseCircleLine, RiPieChartFill, RiMenuLine, RiAccountCircleLine, RiAddLine, RiLightbulbFlashLine } from "react-icons/ri";
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
        <Sidebar showMenu={showMenu} />
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
            <header >
              {/* title and search */}
              <div className="flex flex-col gap-4 mb-6 md:flex-row md:justify-between">
                <div>
                  <h1 className="text-3xl text-gray-300">
                    EDDY'S RESTO
                  </h1>
                  <p className="text-gray-500">
                    27/06/2023
                  </p>
                </div>
                <form action="">
                  <div className="w-full relative">
                    <RiSearchEyeLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                    <input placeholder="Search" type="text" className="bg-[#1F1D2B] rounded-lg w-full py-2 pl-10 pr-4 text-gray-300 outline-none" />
                  </div>
                </form>
              </div>
              {/* tabs */}
              <nav className=" mb-6 text-gray-300 flex items-center gap-4 border-b justify-between md:justify-start md:gap-9">
                <a href="#" className=" py-2 pr-4 border-[#ec7c6a] text-[#ec7c6a] relative before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[2px] ">Hot dishes</a>
                <a href="#" className=" py-2 pr-4">Cold dishes</a>
                <a href="#" className=" py-2 pr-4">Soup</a>
                <a href="#" className=" py-2">Grill</a>

              </nav>

            </header>
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
              <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col 
                  items-center text-gray-300 text-center gap-2">
                <img src="lasana.png" alt=""
                  className="w-40 h-40 -mt-20 shadow-2xl rounded-full object-fill" />
                <p className="text-xl">spicy seasoned seafood noddles</p>
                <span className="text-gray-400">$3.00</span>
                <p className="text-gray-600">20 bowls avaliable</p>
              </div>
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
          {/* cart */}

          <div className={`lg:col-span-2 fixed lg:right-0 lg:w-80 top-0 bg-[#1F1D2B] w-full h-full transition-all ${showOrder ? "right-0" : "-right-full"} `}>
            <div className="relative pt-16 text-gray-300 p-10 h-full ">
              <RiCloseCircleLine onClick={toggleOrder} className=" lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl" />
              <h1 className="text-3xl mt-4 my-4">Orders # 12344535</h1>
              {/* pills */}
              <div className="flex items-center gap-4 flex-wrap mb-8">
                <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">Dine in</button>
                <button className=" text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">To go</button>
                <button className=" text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">Delivery</button>

              </div>
              <div>
                <div className="grid grid-cols-6 mb-4 p-4">
                  <h3 className="col-span-4">Item</h3>
                  <h3>Qty</h3>
                  <h3>Price</h3>
                </div>
                {/* products */}
                <div className="h-[400px] md:h-[550px] lg:h-[250px] overflow-y-scroll">
                                  {/* product selected */}

                  <div className="bg-[#262837] p-4 rounded-xl mb-4">
                    <div className=" grid grid-cols-6 mb-4">
                      {/* description product */}
                      <div className="flex items-center gap-3 col-span-4">
                        <img src="lasana.png" alt="" className="w-16 h-16 object-cover" />
                        <div>
                          <h5 className="text-sm">Spicy seasoned sea...</h5>
                          <p className="text-xs text-gray-500">$3</p>
                        </div>
                      </div>
                      {/* qty */}
                      <div>
                        <span>2</span>
                      </div>
                      {/* totalprice */}
                      <div>
                        <span>$6</span>
                      </div>
                    </div>
                    {/* note */}
                    <div className="grid grid-cols-6 items-center">
                      <form action="" className="col-span-5">
                        <input type="text" className="bg-[#1F1D2B] py-1 px-4 rounded-xl outline-none" placeholder="Order note ..." />
                      </form>
                      <div >
                        <button className="border border-[#ec7c6a] p-2  rounded-lg text-[#ec7c6a]"><RiDeleteBin6Fill /></button>
                      </div>
                    </div>


                  </div>
                  <div className="bg-[#262837] p-4 rounded-xl mb-4">
                    <div className=" grid grid-cols-6 mb-4">
                      {/* description product */}
                      <div className="flex items-center gap-3 col-span-4">
                        <img src="lasana.png" alt="" className="w-16 h-16 object-cover" />
                        <div>
                          <h5 className="text-sm">Spicy seasoned sea...</h5>
                          <p className="text-xs text-gray-500">$3</p>
                        </div>
                      </div>
                      {/* qty */}
                      <div>
                        <span>2</span>
                      </div>
                      {/* totalprice */}
                      <div>
                        <span>$6</span>
                      </div>
                    </div>
                    {/* note */}
                    <div className="grid grid-cols-6 items-center">
                      <form action="" className="col-span-5">
                        <input type="text" className="bg-[#1F1D2B] py-1 px-4 rounded-xl outline-none" placeholder="Order note ..." />
                      </form>
                      <div >
                        <button className="border border-[#ec7c6a] p-2  rounded-lg text-[#ec7c6a]"><RiDeleteBin6Fill /></button>
                      </div>
                    </div>


                  </div>
                  <div className="bg-[#262837] p-4 rounded-xl mb-4">
                    <div className=" grid grid-cols-6 mb-4">
                      {/* description product */}
                      <div className="flex items-center gap-3 col-span-4">
                        <img src="lasana.png" alt="" className="w-16 h-16 object-cover" />
                        <div>
                          <h5 className="text-sm">Spicy seasoned sea...</h5>
                          <p className="text-xs text-gray-500">$3</p>
                        </div>
                      </div>
                      {/* qty */}
                      <div>
                        <span>2</span>
                      </div>
                      {/* totalprice */}
                      <div>
                        <span>$6</span>
                      </div>
                    </div>
                    {/* note */}
                    <div className="grid grid-cols-6 items-center">
                      <form action="" className="col-span-5">
                        <input type="text" className="bg-[#1F1D2B] py-1 px-4 rounded-xl outline-none" placeholder="Order note ..." />
                      </form>
                      <div >
                        <button className="border border-[#ec7c6a] p-2  rounded-lg text-[#ec7c6a]"><RiDeleteBin6Fill /></button>
                      </div>
                    </div>


                  </div>
                  <div className="bg-[#262837] p-4 rounded-xl mb-4">
                    <div className=" grid grid-cols-6 mb-4">
                      {/* description product */}
                      <div className="flex items-center gap-3 col-span-4">
                        <img src="lasana.png" alt="" className="w-16 h-16 object-cover" />
                        <div>
                          <h5 className="text-sm">Spicy seasoned sea...</h5>
                          <p className="text-xs text-gray-500">$3</p>
                        </div>
                      </div>
                      {/* qty */}
                      <div>
                        <span>2</span>
                      </div>
                      {/* totalprice */}
                      <div>
                        <span>$6</span>
                      </div>
                    </div>
                    {/* note */}
                    <div className="grid grid-cols-6 items-center">
                      <form action="" className="col-span-5">
                        <input type="text" className="bg-[#1F1D2B] py-1 px-4 rounded-xl outline-none" placeholder="Order note ..." />
                      </form>
                      <div >
                        <button className="border border-[#ec7c6a] p-2  rounded-lg text-[#ec7c6a]"><RiDeleteBin6Fill /></button>
                      </div>
                    </div>


                  </div>
                </div>



              </div>
              {/* submit payment */}
              <div className="bg-[#262837] absolute bottom-0 left-0 p-4 w-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400">Discount</span>
                  <span>$0</span>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-gray-400">Subtotal</span>
                  <span>$210.5</span>
                </div>
                <button className="bg-[#ec7c6a] w-full py-2 px-4  rounded-lg">
                  Continue to Payment
                </button>
              </div>



            </div>

          </div>
        </main>
      </div>

    </>
  )
}

export default App
