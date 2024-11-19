import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { MdHome } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { MdOutlineNavigateNext } from "react-icons/md";
import { assets } from '../assets/assets';

const SharingDetail3 = () => {
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
                <h1 className = 'text-3xl font-semibold '>Cách lựa chọn màu sắc cho không gian sống hoàn hảo </h1>
                <div className = 'border-[#AC9984] border-b-2 h-[15px]	'></div>
                <p className = 'italic pt-3	'>Tác giả: Nhung Đoàn, ngày đăng: 09/09/2024</p>
                <p className = 'pt-3'>Trong quá trình xây dựng nên không gian sống đúng với mong muốn của bản thân, việc lựa chọn màu sắc cho không gian sống phù hợp nhất để thể hiện phong cách và thẩm mỹ của mình là điều cực kỳ quan trọng. Vậy thì hãy cùng LumiLiving tham khảo những cách lựa chọn màu sắc cho không gian sống dưới đây để tạo nên sự sống động và đa dạng cho ngôi nhà của bạn.</p> <br/>
                <p className = 'font-semibold text-2xl'>1. Gợi ý một vài lựa chọn màu sắc cho không gian sống tối giản<br/></p>
                <p className = 'font-medium text-2xl'>Tone màu trắng</p>
                <div className = 'flex flex-col content-center justify-center items-center mt-2		 '>
                    <img src = {assets.sharingcolor1} className = 'w-8/12 '/><br/>
                    <p className = ''>Trong lĩnh vực thiết kế, gam màu trắng được rất nhiều người yêu thích và dùng cho rất nhiều cho không gian sốn. Nó được đánh giá là tone màu vượt thời gian và là sự lựa chọn tối ưu cho mọi công trình. Và nó thường được dùng cho màu chủ đạo vì ý nghĩa thẩm mỹ mà nó đem lại. <br/><br/>

                    Màu trắng sẽ giúp mở rộng không gian, mang lại cảm giác tinh khiết và sạch sẽ hơn, đặc biệt tại các căn hộ nhỏ. Gam màu này cũng sẽ giúp bạn dễ dàng tạo nên điểm nhấn, làm nền để tôn lên các đường nét và màu sắc nội thất.<br/><br/>

                    Tuy đây là gam màu dễ sử dụng, nhưng cần phải có sự tính toán lượng màu và vị trí của từng khu vực đem lại cho người nhìn những cảm xúc riêng tại từng không gian. Đây cũng là lý do mà hầu hết các công trình đều chọn gam màu trắng cho bên ngoài và bên trong.</p> 
                </div> <br/>
                <div className = 'flex flex-col gap-2 '>
                    <p className = 'font-medium text-2xl'>Tone xám đen</p>
                    <div className = 'flex gap-8'>
                        <p>Đối lập với gam trắng đem lại cảm giác sạch sẽ và tinh khiết thì tone xám đen sẽ được dùng nhiều cho những không gian tối.

                        Thường thì gam màu xám đen không được dùng làm màu chủ đạo phổ biến như màu trắng, nhưng nếu bạn thích một không gian cô đọng hơn thì gam xám đen sẽ là một lựa chọn hợp lý. Đối với các thiết kế tối giản, với cách phân chia và kết hợp các màu sắc hợp lý và nghệ thuật sẽ biến gam màu này không còn tẻ nhạt khi sử dụng độc lập, mà trở nên thật cá tính và mang đậm phong cách riêng của gia chủ.</p>
                        <img src = {assets.sharingcolor2} className = 'w-8/12 '/>
                    </div>
                    <div className = 'flex flex-col content-center justify-center items-center'>
                        <img src = {assets.sharingcolor3} className = 'w-8/12 justify-self-center	 '/><br/>
                        <p>Những gia chủ có cá tính mạnh và yêu thích một không gian sống bí ẩn và đầy sang trọng, thích thể hiện cái tôi riêng trong thiết kế nội thất thì gam màu xám đen sẽ là một sư lựa chọn thích hợp.</p>
                    </div>
                </div>
                <div>
                <p className = 'font-medium text-2xl mt-2'>Tone beige</p>
                    <div className = 'flex flex-col content-center justify-center items-center mt-2'>
                        <img src = {assets.sharingcolor4} className = 'w-8/12 justify-self-center	 '/><br/>
                        <p>Trong những năm gần đây, tone màu beige được khá nhiều gia chủ ưa chuộng. Đây là gam màu thể hiện được sự dịu dàng và mang lại cảm giác ấm áp. Chính vì vậy, gam màu beige thích hợp với mọi lứa tuổi và cũng dễ dàng sử dụng cho nhiều những không gian khác nhau.<br/><br/>

                        Khi đã lựa chọn màu sắc cho không gian sống là gam màu beige, các vật dụng nội thất trong nhà sẽ được tôn lên một cách rõ rệt. Bên cạnh đó, gam màu beige còn thích hợp với nhiều phong cách thiết kế khác nhau như: nhiệt đới, hiện đại, hoặc tân cổ điển,…</p>
                    </div>
                </div>
                <div className = 'flex flex-col mt-2'>
                    <p className = 'text-3xl font-semibold '>2. Những lưu ý trong việc chọn lựa màu sơn</p>
                    <div className = 'flex flex-col content-center justify-center items-center mt-2'>
                        <img src = {assets.sharingcolor6} className = ' '/><br/>
                        <p >Với việc kết hợp các mảng màu cùng gam hoặc dùng sơn hiệu ứng để tạo ra cảm giác đặc biệt và gần gũi. <br/>

                        Màu sơn nên nhất quán cùng phong cách của đồ nội thất.<br/><br/>
                        Tận dụng màu sắc ở đồ dùng nội thất như màu đá, màu gỗ, màu vải,… Tuy nhiên, màu sơn nên cân nhắc kỹ lưỡng để thích hợp với những món đồ, tránh sự chênh lệch và lạc tone nhiều với không gian tổng thể.<br/>
                        Những căn hộ có diện tích nhỏ hẹp nên hạn chế dùng nhiều mảng màu và hãy chọn các gam màu sáng, nhẹ nhàng để giúp mở rộng không gian.<br/>
                        Tìm hiểu về yếu tố phong thủy cũng là một cách giúp bạn có thêm nhiều sự lựa chọn màu sắc thích hợp với ngôi nhà của mình.<br/><br/>
                        Trong thiết kế nội thất cho không gian sống, màu sắc là một trong những yếu tố quan trọng quyết định đến thẩm mỹ chung của cả ngôi nhà. Do đó, gợi ý về lựa chọn màu sắc cho không gian sống sẽ giúp bạn có thêm cho mình các ý tưởng để tạo ra không gian sống đúng với mong muốn của mình</p>
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
                <NavLink to = '/lam-the-nao-de-bao-quan-go-dung-cach'>
                    <div className = 'flex gap-2 border-[#AC9984] border-b-2 pb-5'> 
                        <img src = {assets.tip1} className = 'w-[154px] h-[100px] object-cover '/>
                        <p className = 'text-[8px]'><span className = 'text-sm font-semibold'>Làm thế nào để bảo quản nội...</span> <br/>
                        Để bảo quản nội thất gỗ đúng cách và giữ cho chúng luôn bền đẹp, bạn có thể tham khảo những cách sau đây:
                        </p>
                    </div>
                </NavLink>
                <NavLink to = '/xu-huong-thiet-ke-2024'>
                    <div className = 'flex gap-2'> 
                        <img src = {assets.col_2} className = 'w-[154px] h-[100px] object-cover '/>
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

export default SharingDetail3