import React, { useEffect, useState } from 'react';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Adcart from '../addalldata/Adcart';
import Shop from '../shop/Shop';
import './Cart.css'
 

const Cart = () => {
    // console.log(props.product.image);
    const [store,setStore]=useState([]);
    useEffect(()=>{
        fetch('fakedb.json')
        .then(res=>res.json())
        .then(data=>setStore(data))
    },[])
const [newPro,setPro]=useState([])
    function addtoTime(pro){
      const newProduct=[...newPro,pro];
      setPro(newProduct);
    
    }
  
   
  

   
    
   
    return (
        <div>
            <div className='cart'>
                <div className='mt-20'>
                <FontAwesomeIcon className='text-8xl text-orange-600' icon={faStore}></FontAwesomeIcon>
                <span className='text-5xl font-bold text-orange-600'>BD Store</span> 
                <p className='text-5xl font-bold mt-10 mb-10 text-cyan-900'>All Catagory Product</p>
                <div className='all-cart'>
           
           {  
            store.map(product=><Shop addtoTime={addtoTime} key={product.id} product={product}></Shop>)
           }
           </div>
                </div>
          
             <Adcart newPro={newPro}></Adcart>
           
        </div>

        </div>
        
    );
};

export default Cart;