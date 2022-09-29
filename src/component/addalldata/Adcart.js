import './Adcart.css'
import Image from '../image/image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Adcart = (props) => {
 console.log(props.newPro);
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
          <div className='cart-all'>
          <h1 className='text-2xl text-white mx-3 mb-4 font-bold'>AlReay Added List</h1>
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


        <div>
        <h1 className='text-white font-bold text-2xl m-5'>Product Details</h1>
        <div className='product-details'>
            <h1 className='font-bold text-lg'>Time required: {total}s</h1>
          </div>
        </div>
            
        </div>
    );
};

export default Adcart;