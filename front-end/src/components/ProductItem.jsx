// ProductItem.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);

    return (
        <Link 
            to={`/product/${id}`} 
            className="product-item cursor-pointer"
            style={{
                color: '#000000',
                textDecoration: 'none',
                backgroundColor: '#EEE9E4',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                padding: '20px',
                transition: 'transform 0.3s ease-in-out',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <div style={{ overflow: 'hidden' }}>
                <img 
                    src={image[0]} 
                    alt={name} 
                    style={{
                        width: '100%',
                        height: '250px', // Increased height to make the card taller
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease-in-out',
                    }}
                    className="hover:scale-110"
                />
            </div>
            <p style={{ fontSize: '1rem', fontWeight: 'bold', color: '#333', marginTop: '15px' }}>
                {name}
            </p>
            <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '5px' }}>
                {price} {currency}
            </p>
        </Link>
    );
};

export default ProductItem;
