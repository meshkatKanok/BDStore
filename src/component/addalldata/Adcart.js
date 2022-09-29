import './Adcart.css'
import Image from '../image/image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
 

const Adcart = (props) => {
  const [add,setAdd]=useState(0);
  const HandleaddClick=(ok)=>{
     setAdd(ok)

  }
  
 const {newPro}=props
 let total=0;
 for(const Product of newPro){
  total=total+Product.second
 }
 
   
    
    return (
        <div className='addcart bg-orange-600 w-100 setcart'>
         
          <div className='personal-information'>
            <img src={Image} alt="" />
                <span className='text-white text-2xl font-bold '>Zahid Hossain <br />
                <span className='text-lg text-gray-200'>
                  <FontAwesomeIcon className='mx-1' icon={faLocationDot}></FontAwesomeIcon>
                  Sydney, Australia
                </span></span> 
            </div>
            <div className='already-added'>
          </div>  
          <div className='cart-all mt-10'>
          <h1 className='text-2xl text-white mx-3 mb-4 font-bold'>AllReay Added List</h1>
          <div className='all-adedcart'>
            
               <div className='addedCart'>
                <span className='font-bold'> No. 1 Backpackc</span><br />
               <span>Price: $109.95</span>
                </div>
                <div className='addedCart'>
                <span className='font-bold'>Fit T-Shirts</span><br />
                <span>Price: $22.3</span>
                </div>
                <div className='addedCart'>
                <span className='font-bold'>Mens Cotton Jacket</span><br />
 <span>Price: $55.99</span>                
 </div>
               </div>
          </div>
 {/* Add a break time-------------------------- */}
<div >
  <h1 className='text-2xl text-white mx-3 mb-4 font-bold mt-20'>Add A Break</h1>
 <div className='product-details'>
 <button onClick={()=>HandleaddClick(10)}   className=' btn-add btn'>10s</button>
  <button onClick={()=>HandleaddClick(20)}  className='btn-add btn'>20s</button>
  <button onClick={()=>HandleaddClick(30)} className='btn-add btn'>30s</button>
  <button onClick={()=>HandleaddClick(40)}  className='btn-add btn'>40s</button>
  <button onClick={()=>HandleaddClick(50)}  className='btn-add btn'>50s</button>
 </div>
</div>
{/* Add a break time--------------------------end */}


        <div className='mt-10'>
        <h1 className='text-white font-bold text-2xl m-5'>Product Details</h1>
        <div className='product-details flex justify-between'>
            <h1 className='font-bold text-lg text-orange-600'>Time required:</h1>
            <span className='font-bold text-lg text-orange-400'>{total} seconds</span>
          </div>
         
        </div>


        <div>
        <div className='product-details flex justify-between'>
            <h1 className='font-bold text-lg  font-bold text-lg text-orange-600'>Break time:</h1>
            <span className='font-bold text-lg font-bold text-lg text-orange-400'>{add}seconds</span>
          </div>
        </div>
        <div className='card-actions justify-center mt-7'>
        <button className='btn bg-cyan-900 activity-btn'>Activity Completed</button>
        </div>
            
        </div>
    );
};

export default Adcart;