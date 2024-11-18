import React from 'react';
import { assets } from '../assets/assets';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="relative w-full h-[500px]">
      <img
        src={assets.banner6}
        alt="Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="content_color font-bold text-4xl sm:text-5xl md:text-6xl">VỀ CHÚNG TÔI</h1>
          <p className="content_color text-lg sm:text-xl md:text-3xl font-thin mt-2">
            Hành trình đi lên từ đam mê nội thất và hiện thực hoá giấc mơ kiến tạo
          </p>
        </div>
      </div>
      <div className="main_bg py-8 px-4 md:px-10 lg:px-20">
        <div className="about_title mb-8">
          <h1 className="font-bold text-center content_color text-3xl sm:text-4xl md:text-5xl">
            CHUYỆN LUMILIVING
          </h1>
          <p className="text-center content_color text-lg sm:text-2xl md:text-3xl font-thin mt-2">
            Lịch sử & quá trình hình thành
          </p>
        </div>
        <div className="about_content">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold content_color text-center">2024</h1>
          <br />
          <p className="content_color text-sm sm:text-base md:text-lg leading-relaxed">
            <i>
              LumiLiving ra đời từ niềm đam mê về không gian sống thoải mái và ấm cúng. Trong một thế giới đầy áp lực,
              chúng tôi nhận ra rằng một không gian sống đẹp và hài hòa có thể ảnh hưởng tích cực đến tâm trạng và
              chất lượng cuộc sống. Chúng tôi muốn mang đến những sản phẩm nội thất hiện đại, tối giản và ấm áp, giúp
              mỗi gia đình tạo ra một nơi mà họ có thể thư giãn, tái tạo năng lượng và tận hưởng những khoảnh khắc quý
              giá bên người thân. Mỗi sản phẩm của chúng tôi được thiết kế với sự chú ý đến chi tiết, thể hiện sự tinh
              tế và phong cách sống hiện đại.
            </i>
            <br /><br />
            <b>Khai trương LUMILIVING:</b> Showroom đầu tiên được khai trương và bắt đầu đi vào hoạt động với tên gọi
            LUMILIVING, địa chỉ tại số 866 đường Phạm Văn Đồng, Thành phố Hồ Chí Minh. Khởi điểm mô hình kinh doanh
            với việc chuyên cung cấp các dòng ghế thư giãn nhập khẩu cao cấp. LUMILIVING tự hào là đơn vị tiên phong
            sở hữu đa dạng các dòng ghế thư giãn có sẵn.
            <br /><br />
            <b>Phát triển sản phẩm:</b> Ngay sau khi thành lập, LUMILIVING đã mở rộng lĩnh vực kinh doanh với các hạng
            mục đồ nội thất rời thiết yếu, tiêu biểu là nội thất phong cách Ý “Made in Italy”. Chúng tôi kết hợp tay
            nghề thủ công lâu đời với công nghệ hiện đại để mang đến những sản phẩm mang giá trị cao, thể hiện linh hồn
            của nước Ý.
            <br /><br />
            <b>Đối tác bền vững:</b> LUMILIVING đã trở thành đối tác tin cậy với các công ty kiến trúc xây dựng, doanh
            nghiệp cùng ngành và các tập đoàn lớn. Chúng tôi đã thực hiện thành công nhiều đơn đặt hàng lớn và nhiều
            đơn hàng bán lẻ đồ rời trên toàn quốc.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between main_bg meaning py-8 px-4 lg:px-20">
        <div className="flex-1 mb-8 lg:mb-0 lg:mr-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold content_color border_bot">
            Ý NGHĨA TÊN GỌI "LUMI"
          </h1>
        </div>
        <div className="flex-1">
          <p className="content_color text-sm sm:text-base md:text-lg leading-relaxed">
            <b>"Lumi": </b> Xuất phát từ từ "luminous" (tỏa sáng), mang ý nghĩa về ánh sáng, sự ấm áp và sự tươi mới.
            <br />
            <b>"Living":</b> Không gian sống, nơi con người sinh hoạt và tận hưởng cuộc sống. Nội thất không chỉ là đồ
            vật mà còn là phần quan trọng tạo nên cuộc sống hàng ngày của con người.
            <br />
            <b>Nội thất LumiLiving</b> hướng đến sự đơn giản, tinh tế, tạo nên không gian sống thông thoáng, tiện nghi
            và hiện đại. Dù mang phong cách tối giản, LumiLiving vẫn tạo ra không gian sống ấm cúng, thoải mái, nơi con
            người cảm thấy thư thái và thư giãn sau những giờ làm việc căng thẳng.
          </p>
        </div>
      </div>
      
      <div className="mission main_bg flex flex-col md:flex-row p-5">
        <div className="mission_detail content_color flex-1 flex flex-col items-center justify-center mb-8 md:mb-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">TUYÊN NGÔN - SỨ MỆNH</h1>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-4">
            Tại <b>LUMILIVING</b>, chúng tôi bắt đầu hành trình của mình từ một niềm đam mê mãnh liệt với nội thất và
            mong muốn hiện thực hóa giấc mơ kiến tạo không gian sống hoàn hảo cho mỗi gia đình. Sứ mệnh của chúng tôi
            không chỉ là cung cấp những sản phẩm nội thất chất lượng cao, mà còn là mang đến trải nghiệm tuyệt vời cho
            khách hàng.
            <br /><br />
            Chúng tôi tin rằng mỗi không gian đều có câu chuyện riêng, và nhiệm vụ của chúng tôi là giúp bạn kể câu
            chuyện đó một cách sinh động và đầy ý nghĩa. Với sự kết hợp giữa thiết kế tinh tế, công nghệ hiện đại và
            tay nghề thủ công tinh xảo, LUMILIVING cam kết mang đến những sản phẩm không chỉ đẹp mắt mà còn tiện nghi,
            góp phần nâng tầm giá trị cuộc sống.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img src={assets.banner7} alt="Mission" className="max-w-full h-auto" />
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row warranty p-8 gap-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold content_color text-center mb-4 md:mb-0">
          CHÍNH SÁCH BẢO HÀNH
        </h1>
        <p className="flex-1 content_color text-sm sm:text-base md:text-lg leading-relaxed">
          Thấu hiểu mối quan tâm thường gặp của khách hàng nên chính sách bảo hành là một chủ đề luôn được lưu tâm với
          Lumi trong quá trình sử dụng và trải nghiệm sản phẩm.
          <br /><br />
          <b>Chính sách bảo hành</b>
          <br />
          Về sofa: Bảo hành <b>48 tháng</b> đối với phần khung, 12 tháng với phần da, đệm mút.
          <br />
          Các dòng sản phẩm khác: Bảo hành <b>24 tháng.</b>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
