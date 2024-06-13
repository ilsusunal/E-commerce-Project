import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../mockData';

function ProductPage() {
    const { id } = useParams();

    const product = products.find(p => p.id === parseInt(id));
  
    if (!product) {
        return <div>Product not found</div>;
    }
  
    return (
        <>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
        </>
    )
}

export default ProductPage