import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { MdHome } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { MdOutlineNavigateNext } from "react-icons/md";
import { assets } from '../assets/assets';

const SharingDetail1 = () => {
  return (
    <div>
        <div className = 'h-[45px] w-screen	pre_bar content-center'>
            <NavLink to='/product/'>
                <div className="text_bar flex gap-3 px-5 pre_text ">
                <MdHome className="w-[20px] h-[20px] cursor-pointer" />
                <MdOutlineNavigateNext className = 'w-[20px] h-[20px]'/> 
                <h1 className="text-sm font-light">TIPS & TRICKS </h1>
                </div>
            </NavLink>
        </div>
        {/* Content */}
        <div className = 'flex content_color px-10 gap-10 py-10 '>
            {/* Main content */}
            <div className = 'w-[910px] '>
                <h1 className = 'text-3xl font-semibold '>Bí quyết bố trí nội thất nhỏ hẹp</h1>
                <div className = 'border-[#AC9984] border-b-2 h-[15px]	'></div>
                <p className = 'italic pt-3	'>Tác giả: Tuyền Đỗ, ngày đăng: 25/10/2024</p>
                <p className = 'pt-3'>Dù sở hữu căn hộ nhỏ nhưng bạn hoàn toàn có thể sắp xếp nội thất một cách khoa học để không gian sinh hoạt luôn thông thoáng và thoải mái. Và bạn nhận ra, không gian lớn hay nhỏ không quan trọng bằng việc bạn sắp xếp mọi thứ như thế nào. Sau đây, hãy cùng Nhà Xinh tham khảo một số cách sắp đặt nội thất tối ưu nhất cho tổ ấm của mình nhé.</p> <br/>
                <div className = 'flex pt-2  gap-3'>
                    <p><span className = 'font-semibold'>1.  Khai thác không gian đứng                </span> <br/>
                    Thiết kế thêm các hệ tủ đa tầng ở sát tường trong phòng làm việc, phòng ngủ, phòng khách, phòng bếp,… để tăng không gian lưu trữ cho các thành viên. Bạn có thể thiết kế hệ tủ cao đến trần nhà nếu gia đình có nhiều nhu cầu cất trữ đồ đạc. <br/><br/>

                    Với những món đồ ít sử dụng, ưu tiên cất trữ trên hộc cao nhất, còn những món đồ thường xuyên sử dụng, hãy để chúng ở nơi vừa tầm với và dễ dàng lấy ra khi cần sử dụng.</p>
                    <img src = {assets.sharingnarrow6} className = 'w-6/12'/>
                </div>
                <div className = 'flex flex-col justify-center	 '>
                    <p><span className = 'font-semibold'>2. Ưu tiên đồ nội thất có hộc chứa                </span> <br/>
                    Thay vì phải bày biện đồ dùng vào một góc nào đó, bạn có thể cất chúng vào các ngăn kéo được tích hợp bên trong đồ nội thất mình đang dùng. Ví dụ trong phòng ngủ, ngoài việc thiết kế hệ tủ sát tường, bạn có thể sử dụng giường ngủ có hộc kéo để thoải mái cất chăn mền, gối,… đây là những món đồ chiếm nhiều diện tích và thường xuyên dùng mỗi tháng. Giường ngủ được thiết kế với nhiều hộc kéo đa năng, bạn có thể phân chia nhiệm vụ cho mỗi ngăn và không gian căn phòng sẽ gọn gàng hơn rất nhiều.</p>

                    <br/>
                    <img src = {assets.sharingnarrow3}/>
                </div>
                <div className = 'flex pt-5  gap-3' >
                    <p><span className = 'font-semibold '>3. Tận dụng góc phòng                    </span> <br/>
                    Các góc nhà là khu vực ít ai để ý đến, tuy nhiên, khi biết cách sắp xếp, những góc nhỏ này sẽ là nơi lý tưởng để giúp căn hộ của bạn tràn đầy sức sống và nhiều tiện ích hơn đấy.

                    Với góc phòng, bạn ưu tiên đặt những đồ vật cao để không ảnh hưởng tầm nhìn và các sinh hoạt hàng ngày của gia đình. Bạn có thể thêm những chậu cây cao hoặc một chiếc bàn bên với bình hoa lớn ở góc phòng để không gian thêm tươi mát và không chiếm quá nhiều diện tích sinh hoạt.</p>
                    <img src = {assets.sharingnarrow4} className = 'w-6/12'/>
                </div>
                <div className = 'flex flex-col justify-center'>
                    <p><span className = 'font-semibold'>4. Tận dụng khoảng trống dưới cầu thang</span> <br/>
                    Đối với những căn hộ cao tầng, không gian bên dưới cầu thang nên được tận dụng triệt để. Với khoảng trống này, bạn có thể thiết kế thêm hệ tủ để lưu trữ những đồ dùng cần thiết dành riêng cho mỗi tầng lầu. Khoảng trống còn lại, tùy vào thiết kế nhà ở, bạn có thể tận dụng để lắp đặt máy giặt hoặc tủ lạnh mini, vừa tiện lợi lại vừa giúp không gian gọn gàng hơn.

                    Ngoài ra, đối với những gia chủ không có nhiều nhu cầu cất trữ đồ đạc thì đây sẽ là nơi lý tưởng để đặt một chiếc kệ đa năng, vừa có thể làm kệ sách, lại vừa được sử dụng như kệ trang trí, bạn có thể bày biện bình trang trí, đồng hồ, khung hình, đèn trang trí,… và tạo nên góc thư giãn của riêng mình. </p> <br/>
                    <img src = {assets.sharingnarrow2}/>
                </div>
            </div>
            {/* Proposed content */}
            <div className = 'w-[310px] flex flex-col gap-6  '>
                <h1 className="text-3xl font-semibold border-[#AC9984] border-b-2 pb-3">Bài viết khác</h1>
                <NavLink to = '/lam-the-nao-de-bao-quan-go-dung-cach'>
                {/* Frame bài viết */}
                <div className = 'flex gap-2 border-[#AC9984] border-b-2 pb-5'> 
                    <img src = {assets.tip1} className = 'w-[154px] h-[100px] object-cover   '/>
                    <p className = 'text-[8px]'><span className = 'text-sm font-semibold'>Làm thế nào để bảo quản nội thất gỗ đúng cách</span> <br/>
                    Để bảo quản nội thất gỗ đúng cách và giữ cho chúng luôn bền đẹp, bạn có thể tham khảo những cách sau đây
                    </p>
                </div>
                </NavLink>
                <NavLink to = '/cach-lua-chon-mau-sac-cho-khong-gian-song-hoan-hao'>
                    <div className = 'flex gap-2 border-[#AC9984] border-b-2 pb-5'> 
                        <img src = {assets.tip2} className = 'w-[154px] h-[100px] object-cover '/>
                        <p className = 'text-[8px]'><span className = 'text-sm font-semibold'>Cách lựa chọn màu sắc..</span> <br/>
                        Màu sắc không chỉ đơn thuần là yếu tố trang trí mà còn ảnh hưởng sâu sắc đến tâm trạng và cảm xúc của chúng ta. Việc lựa chọn màu sắc phù hợp...
                        </p>
                    </div>
                </NavLink>

                <NavLink to = '/xu-huong-thiet-ke-2024'>
                    <div className = 'flex gap-2'> 
                        <img src = {assets.banner3} className = 'w-[154px] h-[100px] object-cover '/>
                        <p className = 'text-[8px]'><span className = 'text-sm font-semibold'>Xu hướng thiết kế 2024</span> <br/>
                        Năm 2024 hứa hẹn sẽ mang đến nhiều xu hướng thiết kế mới mẻ và sáng tạo, phản ánh sự phát triển không ngừng của công nghệ và nhu cầu thẩm ...
                        </p>
                    </div>
                </NavLink>

            </div>
        </div>
    </div>
  )
}

export default SharingDetail1