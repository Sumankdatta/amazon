import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './ReviewContainer.css'

const ReviewContainer = ({product,handleDelete}) => {

    const {img,name,price,shipping,quantity,id}=product;
    return (
        <div className='review-container'>
            <div className='image'>
                <img src={img} alt="name" />
            </div>
            <div className='name-container'>
                <div>
                    <p>{name}</p>
                    <p><small>Price:{price}</small></p>
                    <p><small>Shipping:{shipping}</small></p>
                    <p><small>Quantity:{quantity}</small></p>
                </div>
                <div>
                    <button onClick={()=>handleDelete(id)} className='button-delete'>
                        <FontAwesomeIcon className='button-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewContainer;


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React from 'react';
// import './ReviewContainer.css'
// import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

// const ReviewContainer = ({product,handleDelete}) => {
    
//     const {img,name,price,quantity,shipping,id}=product;
//     return (
//         <div className='review-container'>
//             <div>
//                 <img src={img} alt="" />
//             </div>
//             <div className='name-container'>
//                 <div className='review-details'>
//                     <p>{name}</p>
//                     <p><small>Price:${price}</small></p>
//                     <p><small>Shipping:${shipping}</small></p>
//                     <p><small>Quantity:{quantity}</small></p>
//                 </div>
//                 <div>
//                     <button onClick={()=>handleDelete(id)} className='btn-delete'>
//                         <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ReviewContainer;