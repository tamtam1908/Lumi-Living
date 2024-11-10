import React from 'react'
import {NavLink} from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[100%] min-h-screen border-r-2'>
      <div className='flex flex-col gap-4 pt-6 pl-[10%] text-[15px]'>
        <NavLink className='navlink' to="/add">
            <img src={assets.add_icon} alt="" />
            <p className='hidden md:block'>Thêm sản phẩm</p>
        </NavLink>
        <NavLink className='navlink' to="/list">
            <img src={assets.order_icon} alt="" />
            <p className='hidden md:block'>Danh sách sản phẩm</p>
        </NavLink>
        <NavLink className='navlink' to="/orders">
            <img src={assets.order_icon} alt="" />
            <p className='hidden md:block'>Đơn hàng</p>
        </NavLink>


      </div>
    </div>
  )
}

export default Sidebar

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { assets } from '../assets/assets';

// const Sidebar = () => {
//   return (
//     <div className="w-[18%] min-h-screen border-r-2 p-4">
//       <div className="flex flex-col gap-4 text-[15px]">
//         <NavLink className="navlink" to="/add">
//           <img src={assets.add_icon} alt="" />
//           <p className="hidden md:block">Thêm sản phẩm</p>
//         </NavLink>
//         <NavLink className="navlink" to="/list">
//           <img src={assets.order_icon} alt="" />
//           <p className="hidden md:block">Danh sách sản phẩm</p>
//         </NavLink>
//         <NavLink className="navlink" to="/orders">
//           <img src={assets.order_icon} alt="" />
//           <p className="hidden md:block">Đơn hàng</p>
//         </NavLink>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
