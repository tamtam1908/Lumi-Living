import React, { useContext, useEffect, useState } from 'react';
import { MdHome } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { MdOutlineNavigateNext } from "react-icons/md";
import { assets } from '../assets/assets';

const SharingDetail4 = () => {
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
                <h1 className = 'text-3xl font-semibold '>Xu hướng thiết kế năm 2024 </h1>
                <div className = 'border-[#AC9984] border-b-2 h-[15px]	'></div>
                <p className = 'italic pt-3	'>Tác giả: Thanh Hiền, ngày đăng: 13/09/2024</p>
                <p className = 'pt-3'>Nhà ở hiện nay có xu hướng chú trọng vào sự hiện đại và tối ưu hóa công năng. Mỗi năm đều xuất hiện các xu hướng nội thất mới để đáp ứng nhu cầu của người dùng. Vậy xu hướng nội thất 2024 tại Việt Nam là gì? Hãy cùng LumiLiving tìm hiểu và lựa chọn phong cách phù hợp cho ngôi nhà của bạn.
</p> <br/>
                <p><span className = 'font-semibold text-xl'>1. Sử dụng vật liệu bền vững
                </span> <br/>
                Vật liệu bền vững là những vật liệu không gây hại đến môi trường. Trong bối cảnh biến đổi khí hậu ngày càng nghiêm trọng, việc sử dụng vật liệu bền vững trong nội thất là cần thiết. Người dùng có xu hướng chọn nội thất chất lượng cao, tích hợp nhiều tính năng và dễ dàng tháo lắp, di chuyển. <br/><br/>

                Gỗ tự nhiên và gỗ công nghiệp sẽ ưu tiên loại khai thác nhanh, thân thiện với môi trường. Các vật liệu khác như thuỷ tinh, đá, đất nung, kim loại tái chế cũng sẽ được sử dụng rộng rãi hơn.

                </p>
                <div className = 'flex justify-center justify-items-center	'>
                    <img src = {assets.sharingtrend1}/>
                </div>
                <p className = 'font-semibold text-xl mt-2'>2. Nội thất với đường cong, bo tròn                    </p>

                <div className = 'flex flex-col content-center justify-center items-center gap-3 mt-2 '>
                    <p>Đường nét trong thiết kế nội thất góp phần tạo nên chủ đề và cảm xúc khác nhau. Nếu như đường thẳng, sắc cạnh tạo nên sự mạnh mẽ và nghiêm túc, thì các đường cong, bo tròn mang đến vẻ đẹp mềm mại và tinh tế.

                    Xu hướng thiết kế nội thất 2024 sẽ thiên về những đường cong, bo tròn nghệ thuật. Những đồ nội thất này tạo hiệu ứng thị giác mạnh và mang đến cảm giác thoải mái, thư thái, tự nhiên.</p>
                    <img src = {assets.sharingtrend2}/>
                </div>
                <p className = 'font-semibold text-xl mt-2'>3. Thiết kế nội thất không gian mở</p>
                <div className = 'flex flex-col content-center justify-center items-center gap-3 mt-2 '>
                    <p>Với diện tích đất ở ngày càng hạn hẹp, thiết kế nội thất mở trở thành xu hướng tất yếu. Thiết kế nội thất mở mang đến không gian sống tiện nghi, thoải mái hơn, đặc biệt là với những căn hộ có diện tích nhỏ. <br/><br/>

                    Không gian mở trong thiết kế nội thất là không gian liền mạch, kết nối với các không gian khác và hoà nhập với thiên nhiên. Một số kiểu thiết kế không gian mở như: phòng khách – phòng bếp, phòng khách – phòng ngủ, phòng ngủ – phòng làm việc.<br/><br/>

                    Để thiết kế nội thất không gian mở mang đến hiệu quả tối ưu, cần kết hợp hài hòa giữa ánh sáng và màu sắc, bố cục sắp xếp nội thất và đặc biệt là tạo không gian sống “xanh”.</p>
                    <img src = {assets.sharingtrend3}/>
                </div>
                <p className = 'font-semibold text-xl  mt-2'>4. Nội thất hiện đại</p>
                <div className = 'flex flex-col content-center justify-center items-center gap-3 mt-2 '>
                    <p>Xu hướng thiết kế nhà ở năm 2024 chú trọng việc sử dụng nội thất tối giản, trang nhã thay thế nội thất hoa văn rườm rà. Đồ trang trí được bố trí theo hướng tự do, không bị bó buộc vào một khuôn khổ nhất định. Nội thất hiện đại 4.0 sẽ giúp không gian trở nên tự nhiên hơn.

                    Tối giản ở đây là việc sử dụng các sản phẩm nội thất sẽ được giảm thiểu tinh giản. Việc sử dụng sản phẩm nội thất đa công năng cũng sẽ giúp tiết kiệm diện tích, tạo sự gọn gàng và thoáng đãng cho không gian.<br/><br/>

                    Việc sử dụng màu sắc trong thiết kế cũng tương tự như việc lựa chọn gia vị cho món ăn. Nếu phối hợp hài hòa các màu sắc với nhau sẽ giúp nâng tầm không gian sống của bạn.</p>
                    <img src = {assets.sharingtrend4}/>
                </div>
                <p className = 'font-semibold text-xl mt-2'>5. Sử dụng màu ấm trong thiết kế nội thất</p>
                <div className = 'flex flex-col content-center justify-center items-center gap-3 mt-2 '>
                    <p>Nếu như những năm trước gam màu trung tính như be, trắng, xám được sử dụng nhiều thì năm 2024 gam màu ấm lại lên ngôi. Màu nâu đất, nâu socola, nâu trầm, màu vàng, màu cam sẽ giúp không gian trở nên độc đáo và ấn tượng hơn. Ngoài ra, màu hồng, màu xanh lam hoặc xanh lá khi kết hợp sử dụng cũng sẽ tạo nên hiệu ứng đáng kể.<br/><br/>

                    Việc sử dụng màu sắc trong thiết kế cũng tương tự như việc lựa chọn gia vị cho món ăn. Nếu phối hợp hài hòa các màu sắc với nhau sẽ giúp nâng tầm không gian sống của bạn.</p>
                    <div className = 'flex justify-center gap-3'>
                        <img src = {assets.sharingtrend6} className = 'w-5/12'/>
                        <img src = {assets.sharingtrend5} className = 'w-5/12'/>
                    </div>
                </div>
            </div>
            {/* Proposed content */}
            <div className = 'w-[310px] flex flex-col gap-6  '>
                <h1 className="text-3xl font-semibold border-[#AC9984] border-b-2 pb-3">Bài viết khác</h1>

                {/* Frame bài viết */}
                <NavLink to = '/bi-quyet-bo-tri-noi-that-nho-hep '>
                <div className = 'flex gap-2 border-[#AC9984] border-b-2 pb-5'> 
                    <img src = {assets.tip3} className = 'w-[154px] h-[100px] object-cover '/>
                    <p className = 'text-[8px]'><span className = 'text-sm font-semibold'>Bí quyết bố trí nội thất..</span> <br/>
                    Trong cuộc sống hiện đại, không gian sống ngày càng trở nên hạn chế, đặc biệt là ở các thành phố lớn. Việc bố trí nội thất một cách hợp lý
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
                <NavLink to = '/meo-lam-sach-do-noi-that'>
                <div className = 'flex gap-2'> 
                    <img src = {assets.tip4} className = 'w-[154px] h-[100px] object-cover '/>
                    <p className = 'text-[8px]'><span className = 'text-sm font-semibold'>Mẹo làm sạch đồ nội thất</span> <br/>
                    Không riêng gì các món đồ khác, nội thất nếu sử dụng trong thời gian lâu sẽ trở nên xuống màu và không còn vẻ đẹp thu hút như nội thất lúc mới mua..
                    </p>
                </div>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default SharingDetail4