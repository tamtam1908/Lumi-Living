// ProductItem.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);

    return (
        <Link 
            to={`/product/${id}`} 
            style={{
                color: '#000000',
                textDecoration: 'none',
                backgroundColor: '#F5F5DC',
                // padding: '15px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                display: 'block',
                transition: 'transform 0.3s ease-in-out',
                textAlign: 'center',
            }}
            className="cursor-pointer"
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <div style={{ overflow: 'hidden', borderRadius: '4px' }}>
                <img 
                    src={image[0]} 
                    alt={name} 
                    style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease-in-out',
                    }}
                    className="hover:scale-110"
                />
            </div>
            <p style={{ fontSize: '1rem', fontWeight: 'bold', color: '#333', marginTop: '10px' }}>
                {name}
            </p>
            <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '5px' }}>
                {price.toLocaleString('vi-VN')} VND
            </p>
        </Link>
    );
};

export default ProductItem;
