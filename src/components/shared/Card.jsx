import React from 'react'

const Card = (props) => {
    const {img, description, price, inventory} = props;
  return (
    <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col 
                  items-center text-gray-300 text-center gap-2">
                <img src={img} alt=""
                  className="w-40 h-40 -mt-20 shadow-2xl rounded-full object-fill" />
                <p className="text-xl">{description}</p>
                <span className="text-gray-400">${price}</span>
                <p className="text-gray-600">{inventory} bowls avaliable</p>
              </div>
  )
}

export default Card