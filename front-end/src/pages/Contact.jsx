import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  const questions = [
    {
      question: "Làm cách nào để tôi thanh toán đơn hàng của mình?",
      answer: "Bạn có thể thanh toán đơn hàng qua thẻ tín dụng, thẻ ATM hoặc chuyển khoản ngân hàng."
    },
    {
      question: "Tôi có thể thanh toán bằng chuyển khoản ngân hàng không?",
      answer: "Có, bạn hoàn toàn có thể thanh toán bằng chuyển khoản ngân hàng. Khi bạn chọn phương thức thanh toán này, hệ thống sẽ cung cấp cho bạn thông tin tài khoản ngân hàng của Lumi Living. Sau khi bạn thực hiện chuyển khoản, vui lòng giữ lại biên lai và gửi cho chúng tôi để xác nhận. Chúng tôi sẽ xử lý đơn hàng của bạn ngay khi nhận được thanh toán."
    },
    {
      question: "Tôi muốn thay đổi thông tin tài khoản của mình",
      answer: "Để thay đổi thông tin tài khoản của bạn, bạn có thể thực hiện theo các bước sau: Đăng nhập vào tài khoản của bạn trên trang web của Lumi Living. Vào phần Thông tin tài khoản hoặc Cài đặt tài khoản. Tại đây, bạn có thể cập nhật thông tin như tên, địa chỉ, số điện thoại, và email. Sau khi thực hiện các thay đổi, hãy chắc chắn nhấn nút Lưu thay đổi để đảm bảo thông tin mới được cập nhật. Nếu bạn gặp bất kỳ khó khăn nào trong quá trình thay đổi thông tin, hãy liên hệ với bộ phận hỗ trợ khách hàng của chúng tôi để được trợ giúp."
    },
    {
      question: "Tôi phải làm gì nếu sản phẩm bị lỗi hoặc hư hỏng?",
      answer: "Nếu sản phẩm bạn nhận được từ Lumi Living bị lỗi hoặc hư hỏng, vui lòng kiểm tra sản phẩm ngay khi nhận hàng và liên hệ với bộ phận chăm sóc khách hàng trong vòng 7 ngày kể từ ngày nhận. Bạn có thể gửi hình ảnh sản phẩm cùng thông tin chi tiết để chúng tôi có thể hỗ trợ nhanh chóng. Chúng tôi sẽ hướng dẫn bạn quy trình gửi trả sản phẩm và hoàn thành mẫu đơn cần thiết. Sau khi sản phẩm bị lỗi hoặc hư hỏng được kiểm tra, chúng tôi sẽ tiến hành đổi sản phẩm mới hoặc hoàn tiền theo yêu cầu của bạn."
    },
    {
      question: "Chính sách hoàn trả và đổi hàng như thế nào?",
      answer: "Chính sách hoàn trả và đổi hàng của Lumi Living được thiết kế để đảm bảo sự hài lòng của khách hàng. Bạn có thể yêu cầu hoàn trả hoặc đổi hàng trong vòng 30 ngày kể từ ngày nhận sản phẩm. Để đủ điều kiện, sản phẩm phải còn nguyên vẹn, chưa qua sử dụng và trong bao bì gốc. Một số sản phẩm giảm giá hoặc thuộc chương trình khuyến mãi đặc biệt có thể không áp dụng cho chính sách hoàn trả. Quy trình hoàn trả bao gồm việc liên hệ với bộ phận chăm sóc khách hàng để được hướng dẫn chi tiết và gửi lại sản phẩm. Khi sản phẩm được nhận và kiểm tra, chúng tôi sẽ tiến hành hoàn tiền vào tài khoản của bạn trong vòng 5-7 ngày làm việc."
    }
  ];


  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false); // State để điều khiển overlay

  const toggleAnswer = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowOverlay(true); // Hiển thị overlay khi gửi form
  };

  const closeOverlay = () => {
    setShowOverlay(false); // Ẩn overlay khi nhấn X
  };

  return (
    <div className="bg-[#2C2623] min-h-screen h-full w-full">
  <div className="flex flex-col md:flex-row justify-center items-start gap-10 mb-28 px-4">
    {/* Image with Overlay */}
    <div className="my-10 relative w-full md:max-w-[480px]">
      <img className="w-full object-cover rounded-md" src={assets.contact} alt="" />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-white bg-opacity-50 w-full h-1/2 flex flex-col justify-center items-center text-[#AB967F] text-center p-4">
          <h2 className="text-2xl md:text-3xl font-bold">LUMILIVING</h2>
          <p className="text-sm md:text-base">HOTLINE: 039 392 2348</p>
          <p className="text-sm md:text-base">Địa chỉ: 669 QL1A, khu phố 6, Thủ Đức, Hồ Chí Minh</p>
        </div>
      </div>
    </div>

    {/* Form Section */}
    <div className="my-10 flex flex-col justify-center items-start gap-4 p-4 md:p-8 max-w-md md:pt-0">
      <h2 className="text-2xl md:text-4xl font-bold text-[#FFFFFF] mb-2 font-['Roboto']">
        ĐỂ LẠI THẮC MẮC...
      </h2>
      <p className="text-sm text-[#FFFFFF] mb-4 font-[Montserrat]">
        CSKH thân thiện của chúng tôi trả lời thắc mắc trong 24 giờ
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full font-[Montserrat]">
        <input
          type="text"
          placeholder="Tên"
          className="w-full p-3 bg-[#2C2623] placeholder-[#AB967F] text-[#AB967F] border-2 border-[#AB967F] focus:outline-none rounded-none"
        />
        <input
          type="email"
          placeholder="Gmail"
          className="w-full p-3 bg-[#2C2623] placeholder-[#AB967F] text-[#AB967F] border-2 border-[#AB967F] focus:outline-none rounded-none"
        />
        <textarea
          placeholder="Thắc mắc"
          className="w-full p-3 bg-[#2C2623] placeholder-[#AB967F] text-[#AB967F] border-2 border-[#AB967F] focus:outline-none h-[150px] resize-none rounded-none"
        ></textarea>
        <button
          type="submit"
          className="w-full p-3 bg-[#A58B75] text-white font-bold hover:bg-[#8B735A] transition-colors rounded-md"
        >
          GỬI
        </button>
      </form>
    </div>
  </div>

  {/* Overlay */}
  {showOverlay && (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 px-4">
      <div className="p-6 bg-[#2C2623] rounded-md text-center text-[#AB967F] relative max-w-md w-full">
        <button
          onClick={closeOverlay}
          className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
        <h2 className="text-lg md:text-2xl font-bold">Cảm ơn bạn đã quan tâm đến LumiLiving!</h2>
        <p>Chúng tôi sẽ nhanh chóng trả lời thắc mắc của bạn. Chúc bạn mua sắm vui vẻ!</p>
      </div>
    </div>
  )}

  {/* Quick Questions Section */}
  <div className="p-4 md:p-8 text-white flex flex-col md:flex-row items-start gap-10 font-[Montserrat]">
    <div className="md:w-1/3">
      <h2 className="text-4xl md:text-5xl text-[#AC9984] font-bold mt-6 md:mt-10 ml-2 md:ml-6">
        CÂU <br /> <br /> HỎI <br />
        <br /> NHANH
      </h2>
    </div>
    <div className="md:w-2/3 space-y-6">
      {questions.map((item, index) => (
        <div key={index} className="border-b border-gray-600 pb-4">
          <div className="flex justify-between items-center">
            <p className="text-sm md:text-lg text-[#AC9984]">{item.question}</p>
            <button
              onClick={() => toggleAnswer(index)}
              className="text-xl md:text-2xl text-gray-300 hover:text-white transition-colors"
            >
              {openQuestionIndex === index ? "−" : "+"}
            </button>
          </div>
          {openQuestionIndex === index && (
            <p className="mt-2 md:mt-4 text-gray-400 text-sm md:text-base">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default Contact;
