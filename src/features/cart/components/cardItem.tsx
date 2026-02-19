'use client'
import { faMinus, faPlus, faTrashRestore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { CartProduct } from "../types/cart.type";
import Swal from "sweetalert2";
import {deleteFromCart, updateProductQuantity } from "../server/cart.action";
import { removeProduct, setCartInfo } from "../store/cart.slice";
import { useDispatch } from "react-redux";


export default function CardItem({info}:{info:CartProduct}) {
    const {product,price,count} = info;
    const{title,category,imageCover,id,quantity} = product;
const dispatch = useDispatch();

   const handleDelete =async ()=>{
const result =await Swal.fire({
  html:`  <div class="flex items-center gap-4 p-4 rounded-xl bg-red-50 border border-red-200 shadow-md">
      
      <div class="w-12 h-12 flex items-center justify-center rounded-full bg-red-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>

      <div class="text-left">
        <h3 class="text-lg font-semibold text-red-700">Remove Item?</h3>
      </div>

    </div>`,

    showCancelButton:true,
    showConfirmButton:true,
    confirmButtonText:'Remove',
    cancelButtonText:'Cancel',
    buttonsStyling:false,
    customClass:{
      confirmButton:'bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl duration-300 cursor-pointer',
      cancelButton:'bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl duration-300 cursor-pointer',
      htmlContainer:'p-6 m-0',
      actions:'px-6 pb-6 pt-0 gap-3 flex-row-reverse'
    }
})
if(result.isConfirmed){
    dispatch(removeProduct({id}))
  await deleteFromCart(id)
}
  } 

const handleUpdate = async (newCount:number)=>{
    if(newCount < 1) return;
try {
const response = await updateProductQuantity(id,newCount)
dispatch(setCartInfo(response))
} catch (error) {
    throw error
}

}



  return <>
                    <div className="flex bg-white rounded-lg shadow-md p-4">
                    <div className="bg-gray-50 rounded-2xl shadow flex items-center justify-center w-35 h-35">
                      <Image
                        src={imageCover}
                        alt={title}
                        height={80}
                        width={80}
                      />
                    </div>
                    <div className="ml-8 flex flex-col w-full">
                      <div className="flex items-start flex-col gap-2">
                        <Link href={`/products/${id}`} className="hover:text-green-600 duration-300">
                          {" "}
                          <h2 className="font-semibold">
                            {title}
                          </h2>
                        </Link>
                        <span className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded-xl">
                          {category.name}
                        </span>
                        <p className="text-lg font-bold mt-2 text-green-700">
                          {price} EGP
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border rounded-lg px-1 py-1 bg-gray-50 border-gray-300 gap-2">
                          <button
                            className="px-2 py-2 bg-white rounded-lg shadow flex items-center justify-center cursor-pointer text-gray-400 hover:text-gray-600 duration-300"
                            disabled={count <= 1}
                            onClick={() => {
                              handleUpdate(count-1)
                            }} 
                          >
                            <FontAwesomeIcon
                              icon={faMinus}
                              className=" text-xs"
                            />
                          </button>
                          <span className="px-2">{count}</span>
                          <button
                            className="px-2 py-2 bg-green-600 rounded-lg shadow flex items-center justify-center cursor-pointer text-white hover:bg-green-700 duration-300"
                             disabled={count >= quantity}
                            onClick={() => {
                              handleUpdate(count+1)
                            }} 
                          >
                            <FontAwesomeIcon
                              icon={faPlus}
                              className=" text-xs"
                            />
                          </button>
                        </div>
                        <div className=" ">
                          <h3 className="font-semibold text-gray-400 mb-0">
                            Total
                          </h3>
                          <div className="flex items-center gap-4 justify-center">
                            <p className="text-lg font-bold mt-2 text-green-700">
                              {price * count} EGP
                            </p>
                            <button className="px-3 py-3 rounded-lg shadow flex items-center justify-center bg-red-100 cursor-pointer text-red-500  hover:bg-red-500 hover:text-white duration-300"  onClick={handleDelete} >
                              <FontAwesomeIcon icon={faTrashRestore} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  </>
}
