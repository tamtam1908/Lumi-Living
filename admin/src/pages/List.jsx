import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashCan} from '@fortawesome/free-solid-svg-icons'


const List = (token) => {

  const [list,setList] = useState([])

  const fetchList = async () => {
    try{
      const response = await axios.get(backendUrl + '/api/product/list')
      if (response.data.success){
        setList(response.data.products);
      }
      else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl + '/api/product/remove', {id}, {headers:{token}})

      if (response.data.success){
        toast.success(response.data.message)
        await fetchList();
      } 
      else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList()
  },[])

  return (
    <>
      <p className='mb-2'>Tất cả sản phẩm</p>
      <div>
        {/* List table title */}
        <div className='hidden md:grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
          <b>Ảnh</b>
          <b>Tên</b>
          <b>Danh mục</b>
          <b>Giá</b>
          <b>Chất liệu</b>
          <b>Kích thước</b>
          <b className='text-center'>Thao tác</b>
        </div>

        {/* Product List */}
        {
          list.map((item,index) => (
            <div className='grid grid-cols-[1fr_2fr_1fr] md:grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm min-h-[4rem]' key={index}>
              <img className='w-12 h-12 object-cover' src={item.image[0]} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}{currency}</p>
              <p>{item.material}</p>
              <p>{item.size}</p>
              <p onClick={()=>removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg'><FontAwesomeIcon icon={faTrashCan} /></p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default List
