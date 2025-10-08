import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-16 text-xs sm:text-sm md:text-base text-gray-700 animate-fade-in-up">
      {/* Card 1 */}
      <div className="transition-transform duration-500 hover:scale-110 hover:-translate-y-2 animate-fade-in-left">
        <img
          src={assets.exchange_icon}
          className="w-12 m-auto mb-5 animate-bounce"
          alt="exchange"
        />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-600">We offer</p>
      </div>

      {/* Card 2 */}
      <div className="transition-transform duration-500 hover:scale-110 hover:-translate-y-2 animate-fade-in-left">
        <img
          src={assets.quality_icon}
          className="w-12 m-auto mb-5 animate-bounce"
          alt="quality"
        />
        <p className="font-semibold">Seven Day Return Policy</p>
        <p className="text-gray-600">We provide 7 day free return</p>
      </div>

      {/* Card 3 */}
      <div className="transition-transform duration-500 hover:scale-110 hover:-translate-y-2 animate-fade-in-right">
        <img
          src={assets.support_img}
          className="w-12 m-auto mb-5 animate-bounce"
          alt="support"
        />
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-gray-600">We provide 24/7 support</p>
      </div>
    </div>
  )
}

export default OurPolicy
