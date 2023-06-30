import React from 'react';
import { RiDeleteBin6Fill, RiArrowDownCircleLine, RiSearchEyeLine, RiCloseCircleLine, RiPieChartFill, RiMenuLine, RiAccountCircleLine, RiAddLine, RiLightbulbFlashLine } from "react-icons/ri";


const Cart = (props) => {

    const {showOrder, setShowOrder}= props;
  return (
    <div className={`lg:col-span-2 fixed lg:right-0 lg:w-80 top-0 bg-[#1F1D2B] w-full h-full transition-all ${showOrder ? "right-0" : "-right-full"} z-50`}>
            <div className="relative pt-16 text-gray-300 p-10 h-full ">
              <RiCloseCircleLine onClick={()=>{setShowOrder(false)}} className=" lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl" />
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
  )
}

export default Cart