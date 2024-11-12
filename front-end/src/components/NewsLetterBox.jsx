import React from 'react';

const NewsletterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
    return (
        <div className="text-center bg-[#AC9984] py-10">
            <p className="text-2xl font-bold font-[Montserrat] text-[#36302C]">
                Tham gia danh sách nhận tin của LumiLiving
            </p>
            <p className="mt-3 px-10 text-lg font-[Montserrat] text-[#36302C]">
                Hãy để chúng tôi đồng hành cùng bạn trong hành trình trang trí không gian sống. Đăng ký danh sách nhận tin để nhận thông tin và ưu đãi độc quyền.
            </p>
            <div className="pb-5">
                <form 
                    onSubmit={onSubmitHandler} 
                    className="w-full sm:w-1/2 flex items-center  mx-auto my-6  pl-3">
                    <input 
                    className="h-12 outline-none flex-1 text-gray-700 px-5 "
                    type="email" 
                    placeholder="example@gmail.com" 
                    required/>
                <button 
                  type="submit" 
                  className="bg-black text-white text-lg px-10 py-2 h-12 font-bold font-[Montserrat]">GỬI</button>
                </form>
            </div>
        </div>
    );
}

export default NewsletterBox;