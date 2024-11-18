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
                <h1 className = 'text-3xl font-semibold '>Làm thế nào để bảo quản nội thất gỗ đúng cách </h1>
                <div className = 'border-[#AC9984] border-b-2 h-[15px]	'></div>
                <p className = 'italic pt-3	'>Tác giả: Khả Ái, ngày đăng: 13/09/2024</p>
                <p className = 'pt-3'>Để bảo quản nội thất gỗ đúng cách và giữ cho chúng luôn bền đẹp, bạn có thể tham khảo những cách sau đây:</p> <br/>
                <p><span className = 'font-semibold'>1. Vệ sinh định kỳ:</span> <br/>
                    Lau chùi thường xuyên: Dùng khăn mềm ẩm lau nhẹ bề mặt gỗ để loại bỏ bụi bẩn. Tránh dùng các chất tẩy rửa mạnh hoặc nước nóng vì có thể làm hỏng lớp sơn hoặc bề mặt gỗ.
                    Xử lý vết bẩn ngay lập tức: Nếu có vết bẩn, hãy xử lý ngay bằng các dung dịch chuyên dụng cho gỗ hoặc dung dịch pha loãng nhẹ.
                    Tránh tiếp xúc trực tiếp với nước: Không nên để nước đọng trên bề mặt gỗ quá lâu vì có thể gây ra hiện tượng ẩm mốc.</p>
                <div className = 'flex flex-col content-center justify-center items-center		 '>
                    <img src = {assets.sharingwooden1}/>
                    <p className = 'italic	'>Vệ sinh nội thất định kỳ giúp loại bỏ bụi bẩn và vi khuẩn, ngăn ngừa hư hỏng sớm.</p> 
                </div> <br/>
                <p><span className = 'font-semibold'>2. Tránh tiếp xúc trực tiếp với ánh nắng mặt trời:</span> <br/>
                    Ánh nắng mặt trời sẽ làm cho gỗ bị bay màu, nứt nẻ và giảm tuổi thọ.
                    Khuyến khích đặt nội thất gỗ ở những nơi không tiếp xúc trực tiếp với ánh nắng mặt trời hoặc sử dụng rèm cửa để che chắn. <br/><br/>

                    <span className = 'font-semibold'>3. Bảo vệ bề mặt gỗ:</span> <br/>
                    Sử dụng thảm lót: Đặt thảm lót dưới chân bàn, ghế để tránh trầy xước bề mặt gỗ.
                    Dùng lót ly: Khi đặt cốc, ly trên mặt bàn, hãy sử dụng lót ly để tránh làm ẩm gỗ.
                    Sử dụng các sản phẩm bảo vệ gỗ: Định kỳ nên sử dụng các sản phẩm bảo vệ gỗ như sáp, dầu để dưỡng ẩm và tạo lớp màng bảo vệ cho gỗ.</p>
                <div className = 'flex flex-col content-center justify-center items-center		 '>
                    <img src = {assets.sharingwooden2}/>
                    <p className = 'italic '>Sửa chữa kịp thời giúp tránh chi phí lớn cho việc thay thế.</p><br/>
                </div>
                <p><span className = 'font-semibold'>6. Kiểm tra và sửa chữa định kỳ:</span> <br/>
                    Định kỳ kiểm tra các khớp nối, bản lề để kịp thời phát hiện và sửa chữa những hư hỏng.
                    Nếu có dấu hiệu mối mọt, hãy xử lý ngay bằng các thuốc diệt mối chuyên dụng.
                    Một số lưu ý khác:
                    Chọn loại gỗ phù hợp: Khi chọn mua nội thất gỗ, nên chọn những loại gỗ có độ bền cao, chịu được điều kiện khí hậu.
                    Lựa chọn sản phẩm chất lượng: Nên mua nội thất gỗ từ các thương hiệu uy tín, có nguồn gốc xuất xứ rõ ràng.
                    Thường xuyên vệ sinh nhà cửa: Giữ cho không gian sống luôn sạch sẽ, thoáng mát sẽ giúp bảo quản nội thất gỗ tốt hơn.
                    Các sản phẩm hỗ trợ bảo quản gỗ:
                    Sáp ong: Dưỡng ẩm và tạo lớp màng bảo vệ cho gỗ.
                    Dầu gỗ: Giúp gỗ bóng đẹp và chống thấm nước.
                    Thuốc chống mối: Ngăn ngừa mối mọt tấn công. <br/><br/>

                    <span className = 'font-semibold'>Lưu ý:</span> Trước khi sử dụng bất kỳ sản phẩm nào, bạn nên đọc kỹ hướng dẫn sử dụng để đảm bảo hiệu quả và an toàn.
                    Hy vọng những thông tin trên sẽ giúp bạn bảo quản nội thất gỗ một cách tốt nhất! <br/><br/>

                    Bạn có câu hỏi nào khác về bảo quản nội thất gỗ không?
                    Nếu bạn có hình ảnh về sản phẩm gỗ cần tư vấn, hãy chia sẻ để tôi có thể đưa ra lời khuyên phù hợp nhất.</p>
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
                <div className = 'flex gap-2 border-[#AC9984] border-b-2 pb-5'> 
                    <img src = {assets.tip2} className = 'w-[154px] h-[100px] object-cover '/>
                    <p className = 'text-[8px]'><span className = 'text-sm font-semibold'>Cách lựa chọn màu sắc..</span> <br/>
                    Màu sắc không chỉ đơn thuần là yếu tố trang trí mà còn ảnh hưởng sâu sắc đến tâm trạng và cảm xúc của chúng ta. Việc lựa chọn màu sắc phù hợp...
                    </p>
                </div>
                <div className = 'flex gap-2'> 
                    <img src = {assets.banner3} className = 'w-[154px] h-[100px] object-cover '/>
                    <p className = 'text-[8px]'><span className = 'text-sm font-semibold'>Xu hướng thiết kế 2024</span> <br/>
                    Năm 2024 hứa hẹn sẽ mang đến nhiều xu hướng thiết kế mới mẻ và sáng tạo, phản ánh sự phát triển không ngừng của công nghệ và nhu cầu thẩm ...
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SharingDetail1