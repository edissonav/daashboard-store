import React from 'react'
import { RiDeleteBin6Fill, RiArrowDownCircleLine, RiSearchEyeLine, RiCloseCircleLine, RiPieChartFill, RiMenuLine, RiAccountCircleLine, RiAddLine, RiLightbulbFlashLine } from "react-icons/ri";

const Header = () => {
  return (
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
  )
}

export default Header