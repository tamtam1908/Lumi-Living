import React from 'react'

const DiscountProduct = ({image, label}) => {
  return (
    <div className="product-card relative overflow-hidden text-center transition-transform duration-300 ease cursor-pointer	">
      <div className="label absolute top-2.5 left-2 px-2.5 py-1 font-medium text-sm bg-black bg-opacity-10">{label}</div>
      <img src={image} alt={label} className="product-image transition-transform duration-300 ease group-hover:scale-110" />
    </div>
  )
}

export default DiscountProduct
