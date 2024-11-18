import React from 'react'
import { assets } from '../assets/assets'
import {NavLink} from 'react-router-dom'
import DiscountProduct from '../components/DiscountProduct'
import Footer from '../components/Footer'
import { GiCelebrationFire } from "react-icons/gi";

const Promotion = () => {
// Khai báo hàm cho nút ở đây 
  return (
    <div className = "main_bg pb-10 ">
      <div className="flex justify-center px-5 py-5 flex-col md:flex-row">
        <img
          src={assets.banner7}
          alt="banner"
          className="rounded-2xl p-2 w-full md:w-1/2"
        />
        <div className="justify-self-center self-center px-10 mt-5 md:mt-0 md:px-10">
          <h1 className="content_font content_color text-4xl font-bold text-center md:text-left">
            🔥 BLACK FRIDAY 🔥 <br /> SALE UP TO 70% - LUMILIVING OUTLET
          </h1>
          <p className="content_font content_color mt-5 text-center md:text-left">
            Chỉ diễn ra duy nhất 1 lần mỗi năm! <br />
            Đây là cơ hội vàng để bạn sở hữu ngay những sản phẩm nội thất sang trọng, chất lượng từ Lumiliving với mức giá không thể nào tốt hơn! <br />
            Từ sofa, bàn làm việc đến giường ngủ và ghế ngồi - tất cả đều được thiết kế tối giản, hiện đại và phù hợp với không gian sống của bạn.
          </p>
          <NavLink to="/promotiondetails">
            <button className="rounded-full btn_color mt-8 w-40 h-12 content_color font-medium block mx-auto md:mx-0">
              XEM THÊM
            </button>
          </NavLink>
        </div>
      </div>
      <div className = "flex py-10 justify-around content_font">
        <div className = "content_color justify-self-center self-center pl-5 content_font">
          <h1 className = "content_font  content_color text-4x1 font-bold">GIẢM GIÁ </h1>
          <h1 className = "content_font  attention_content text-8xl font-bold pt-5">LÊN <br/> ĐẾN <br/>70%</h1>
          <p className = "pt-5">Đa dạng sản phẩm, kiểu dáng, giá cả...</p>
          <button className = "btn_color content_color rounded-full mt-8 w-40 h-12 content_color font-medium ">KHÁM PHÁ NGAY</button>
        </div>
        <div className="flex gap-4 mt-20">
          <div className="flex flex-col gap-3 items-end">
            <div className="relative">
            <div className='absolute top-[-70px] left-[-40px] h-[426.14px] w-[301px] border-[2px] border-[#AB967F] bg-transparent'></div>
            <img src={assets.cabinet3} className="h-[426.14px] w-[301px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" />
            <div className="absolute bottom-2 right-2 bg-white text_label bg-opacity-70 text-white text-sm font-bold p-2">Kệ, tủ giày dép</div>
            </div>
            <div className = "relative">
              <div className="absolute top-[20px] left-[-50px] h-[512px] w-[438px] border-[2px] border-[#AB967F] bg-transparent"></div>
              <img src={assets.table5} className="h-[456.33px] w-[436.56px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" />
              <div className="absolute top-2 left-2 bg-white text_label bg-opacity-70 text-white text-sm font-bold p-2">Bàn đá</div>
            </div>
            <div className="relative">
              <img src={assets.chair2} className="h-[263.4px] w-[301.74px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" />
              <div className="absolute top-2 right-2 bg-white text_label bg-opacity-70 text-white text-sm font-bold p-2">Ghế cafe</div>
            </div>
          </div>
          <div className="flex flex-col justify-end gap-3 relative">
            <div className='absolute top-[-70px] left-[-40px] h-max w-max border-[2px] border-[#AB967F] bg-transparent'></div>
            <div className="relative z-[10]">
              <img src={assets.sofa3} className="h-[313px] w-[327.88px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" />
              <div className="absolute bottom-2 left-2 bg-white text_label bg-opacity-70 text-white text-sm font-bold p-2">Sofa</div>
            </div>
            <div className="absolute  top-[190px] left-[20px] h-[1000px] w-[345px]  border-[#AB967F] bg-transparent  border-t-2 border-l-2 border-b-2 "></div>
            <div className="relative z-[10]">
              <img src={assets.table4} className="h-[283.55px] w-[327.88px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" />
              <div className="absolute top-2 right-2 bg-white text_label bg-opacity-70 text-white text-sm font-bold p-2">Bàn ăn</div>
            </div>
            <div className="relative z-[10]">
              <img src={assets.table3} className="h-[342.25px] w-[327.88px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" />
              <div className="absolute top-2 left-2 bg-white text_label bg-opacity-70 text-white text-sm font-bold p-2">Bàn làm việc</div>
            </div>
          </div>
        </div>
    </div>

  </div>
  
  )
  
}

export default Promotion
