import React, { useContext, useEffect, useState } from 'react';
import { MdHome } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { MdOutlineNavigateNext } from "react-icons/md";
import { assets } from '../assets/assets';

const SharingDetail5 = () => {
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
                <h1 className = 'text-3xl font-semibold '>Mẹo làm sạch đồ nội thất </h1>
                <div className = 'border-[#AC9984] border-b-2 h-[15px]	'></div>
                <p className = 'italic pt-3	'>Tác giả: Thanh Tâm, ngày đăng: 30/10/2024</p>
                <p className = 'pt-3'>Không riêng gì các món đồ khác, nội thất nếu sử dụng trong thời gian lâu sẽ trở nên xuống màu và không còn vẻ đẹp thu hút như nội thất lúc mới mua. Những mẹo dưới đây sẽ giúp bạn làm sạch những nội thất trong nhà, làm mới nội thất lên tới 80% so với ban đầu. Không những là bí kíp giữ nội thất nhà luôn mới mà nó còn giúp kéo dài tuổi thọ sử dụng.<br/></p> <br/>
                <img src = {assets.sharingclean1} className = 'pb-4'/>
                <p><span className = 'font-semibold text-xl '>Dùng khăn khô để lau bụi bề mặt gỗ phải là việc làm thường xuyên</span> <br/>
                Cách vệ sinh này chắc hẳn ai cũng đã thực hiện qua. Tuy nhiên, nó là một bước làm sạch cơ bản nhưng không thể bỏ qua và phải được thực thường xuyên mỗi ngày khiến nội thất trông luôn như mới. Nội thất cần được lau sạch sẽ để không bám bụi và thời gian oxi hóa cũng lâu hơn. Đó là bí quyết bảo quản nội thất <br/><br/>

                Nhưng nếu bạn đã không làm tốt bước này dẫn đến nội thất bị ố vàng trong kém thẩm mỹ thì LumiLiving sẽ hướng dẫn bạn thêm cách tẩy những vết bẩn cứng đầu này.</p>
                <p className = 'font-semibold text-xl'>Xử lý nội thất gỗ màu trắng bị vàng</p>
                <div className = 'flex flex-col content-center justify-center items-center gap-2 mt-2	 '>
                    <img src = {assets.sharingclean2} className = ' align-center'/>
                    <p className = ''>Có rất nhiều dung dịch có thể làm sạch nội thất. Dưới đây là một số dung dịch mang lại hiểu quả tốt nhưng cũng rất dễ tìm thấy và dễ sử dụng.</p> 
                </div> <br/>
                <p><span className = 'font-semibold text-xl'>Dùng bia để tẩy vết bẩn bề mặt nội thất gỗ
                </span> <br/>
                    Một cách thông dụng khác để làm mới nội thất gỗ là dùng bia. Lấy một tấm vải mềm thấm bia chà lên mặt các sản phẩm bằng gỗ để xóa đi các vết bẩn lâu ngày, như thế sẽ khiến mặt gỗ có độ sáng như mong muốn.<br/><br/></p>
                <p className = 'font-semibold text-xl'>Xử lý nội thất gỗ màu trắng bị vàng</p>
                <div className = 'flex flex-col content-center justify-center items-center mt-2		 '>
                    <img src = {assets.sharingclean3}/>
                    <p className = 'italic  '>Dùng kem đánh răng tẩy vết ố vàng</p><br/>
                </div>
                <p>Đồ gỗ màu trắng khi bị vàng trong rất mất thẩm mỹ. Nếu bạn dùng thuốc đánh răng bột (hoặc kem đánh răng) để lau, tình trạng này sẽ được thay đổi đáng kể. Nhưng cần chú ý, khi thao tác không nên dùng sức quá mạnh, nếu không sẽ là hỏng lớp bóng của sơn bên ngoài đồ dùng, khiến cho kết quả hoàn toàn ngược lại.</p>
                
                <p className = 'mt-4'><span className = 'font-semibold text-xl'>Đánh bóng đồ gỗ bằng giấm ăn hoặc chanh pha loãng
                </span> <br/>
                Với những nguyên liệu gần gũi như chanh hoặc giấm ăn, với tính axit cao bạn sẽ dễ dàng loại bỏ những vết bẩn trên bề mặt đồ nội thất gỗ. Bằng cách pha loãng chanh hoặc giấm với tỉ lệ 1:4 (1 phần chanh hoặc giấm, hòa chung với 4 phần nước). <br/><br/></p>
                <div className = 'flex justify-center'>
                    <img src = {assets.sharingclean4} />
                </div>
                <p className = 'font-semibold text-xl mt-6'>Đối với đồ nội thất khó vệ sinh như sofa nệm?</p>
                <div className = 'flex justify-center mt-3'>
                    <img src = {assets.sharingtrend2} />
                </div>
                <p className = 'mt-2'>Sofa không đơn thuần dễ dàng làm sạch như nội thất gỗ bởi vì nó thường làm bằng chất liệu vải hoặc da mà những chất liệu này cần được làm sạch tuyệt đối bằng cách giặt chúng. Chính vì thế mà nên lựa chọn ghế sofa có thể dễ dàng tháo vỏ bọc nệm để thuận tiện cho việc vệ sinh. Việc giặt sạch sẽ vỏ nệm và thơm tho sẽ giúp cho sofa không những có diện mạo mới và còn giúp nội thất phòng khách chỉn chu tươm tất hơn. Mặc khác, đừng quên hút bụi sofa và vệ sinh các bộ phận còn lại như tay cầm hay gầm sofa. <br/><br/>

                Còn nếu sofa của bạn là vỏ bọc cố định thì hãy thử áp dụng các bước sau:<br/><br/>

                Bước 1: Dùng máy hút bụi; hãy hút bụi kỹ lưỡng trên toàn bộ bề mặt và các ngóc ngách của bộ sofa. Nếu như không có máy hút bụi; dùng cây lăn bụi hoặc khăn khô phủi bụi bẩn, lông của thú cưng.<br/>
                Bước 2:  Cho 1/4 chén nước rửa chén vào thau nước ấm, đánh tạo thành lớp bọt dày. (Bọt này sẽ loại bỏ bụi bẩn và làm sạch hầu hết các vết bẩn thức ăn hoặc đồ uống).<br/>
                Bước 3: Sau đó dùng bàn chải lông mịn, chà nhẹ nhàng đều bọt xà phòng lên bề mặt sofa.<br/>
                Bước 4: Tiếp theo gạt hoàn toàn phần bọt trên bề mặt ghế và dùng khăn ẩm mềm lau sạch. Bạn nên giặt sạch khăn và lau lại cho đến khi ghế sofa sạch hoàn toàn.<br/>
                Bước 5: Để khô sofa hoàn toàn trước khi sử dụng lại.</p> <br/>
                <p><span className = 'font-semibold'>Nội thất LumiLiving</span> mong rằng với những mẹo trên sẽ giúp mang lại một không gian nội thất như mới tại nhà mà không cần dịch vụ vệ sinh nội thất. <br/><br/>
                <span className = 'italic'>LumiLiving chúc bạn thành công.</span></p>
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

export default SharingDetail5
