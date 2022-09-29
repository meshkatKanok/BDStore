import React from 'react';
import './shop.css'

const Shop = (props) => {
    const{title,description,price,second,image}=props.product
    const {addtoTime}=props
   
    return (
        <div>
             <div className="card card-compact w-80 bg-base-100 shadow-xl card-size py-5 newart">
                <img className='img' src={image} alt="/" />
                <div className="card-body">
                    <h2 className="card-title font-semibold">{title}</h2>
                    <p>{description}</p>
                    <p className='font-bold price'>Price: ${price}</p>
                    <p className='font-bold time'>Delivery Time: {second}days</p>
                    <div className="card-actions justify-center card-btn">
                        <button onClick={()=>addtoTime(props.product)} className="btn bg-orange-600 btn-new">Add to cart</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Shop;