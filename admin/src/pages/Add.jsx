import React, { useState } from 'react'
import {assets} from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'

const Add = ({token}) => {
  
  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("table");
  const [material, setMaterial] = useState("kimloai");
  const [bestseller, setBestseller] = useState(false);
  const [size, setSize] = useState("");

  const onSubmitHandler = async(e)=>{
    e.preventDefault();

    try {
      const formData = new FormData()

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("material", material);
      formData.append("bestseller", bestseller);
      formData.append("size", size);
      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(backendUrl+"/api/product/add", formData, {headers:{token}})
      console.log(response)

    } catch (error){

    }


  }

  return (
    
    <form onSubmit={onSubmitHandler}>
    <div>
      <p className='mb-2'>Tải hình ảnh</p>

      <div className='flex gap-2'>
        <label htmlFor="image1">
          <img className='w-20' src={!image1 ? assets.upload_area  :URL.createObjectURL(image1)} alt="" />
          <input onChange={(e)=>setImage1(e.target.files[0])} type="file" name="" id="image1" hidden/>
        </label>
        <label htmlFor="image2">
          <img className='w-20' src={!image2 ? assets.upload_area :URL.createObjectURL(image2)} alt="" />
          <input onChange={(e)=>setImage2(e.target.files[0])} type="file" name="" id="image2" hidden/>
        </label>
        <label htmlFor="image3">
          <img className='w-20' src={!image3 ? assets.upload_area :URL.createObjectURL(image3)} alt="" />
          <input onChange={(e)=>setImage3(e.target.files[0])} type="file" name="" id="image3" hidden/>
        </label>
        <label htmlFor="image4">
          <img className='w-20' src={!image4 ? assets.upload_area :URL.createObjectURL(image4)} alt="" />
          <input onChange={(e)=>setImage4(e.target.files[0])} type="file" name="" id="image4" hidden/>
        </label>
      </div>
    </div>
    <br />
    {/* tên sản phẩm */}
    <div className='w-full'>
      <p>Tên sản phẩm</p>
      <input onChange={(e)=>setName(e.target.value)} value={name} type="text" name="" id="" placeholder='Nhập ở đây'required className='w-full max-w-[500px] px-3 py-2'/>
    </div>
    <br />
    {/* Mo ta sản phẩm */}
    <div className='w-full'>
      <p>Mô tả sản phẩm</p>
      <textarea onChange={(e)=>setDescription(e.target.value)} value={description} type="text" name="" id="" placeholder='Viết nội dung ở đây'required className='w-full max-w-[500px] px-3 py-2'/>
    </div>
    <br />
    <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
      <div>
        <p>Danh mục</p>
        <select onChange={(e)=>setCategory(e.target.value)} name="" id="" className='w-full px-3 py-2'>
          <option value="table">Bàn</option>
          <option value="chair">Ghế</option>
          <option value="board">Tủ</option>
          <option value="self">Kệ</option>
          <option value="lamp">Đèn</option>
        </select>
      </div>
      <br />
      <div>
        <p>Chất liệu sản phẩm</p>
        <select onChange={(e)=>setMaterial(e.target.value)} name="" id="" className='w-full px-3 py-2' multiple>
          <option value="kimloai">Kim loại</option>
          <option value="gotunhien">Gỗ tự nhiên</option>
          <option value="dalon">Da lộn</option>
          <option value="cotton">Vải cotton</option>
        </select>
      </div> <br />

      <div>
        <p className='mb-2'>Giá sản phẩm</p>
        <input onChange={(e)=>setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="Number" placeholder='Nhập giá ở đây'/>
      </div>
      

    </div> <br />
    

      <div>
        <p>Kích thước sản phẩm</p>
        <div>
          <input onChange={(e)=>setSize(e.target.value)} value={size} type="text" placeholder='Kích thước' className='w-full max-w-[500px] px-3 py-2'/>
        </div>
      </div>
      <div className='flex gap-2 mt-2'>
        <input onChange={()=>setBestseller(prev => !prev) } checked={bestseller} type="checkbox" name="" id="bestseller" />
        <label className='cursor-pointer' htmlFor="bestseller">Sản phẩm bán chạy?</label>
      </div>

      <button type="submit" className='w-48 py-3 mt-4 bg-black text-white '> Thêm sản phẩm</button>



    </form>
  )
}

export default Add
