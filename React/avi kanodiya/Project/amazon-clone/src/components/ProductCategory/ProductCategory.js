import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/action'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom';
import { useStateValue } from '../../stateProvider'
import Product from '../Product/Product'

const ProductCategory = () => {
    const { products } = useSelector(state => state.getproductsdata)
    const [product, setProduct] = useState([])
    const [{ state, basket }, dispatch] = useStateValue();
    const { categoryId } = useParams("")
    console.log(products);
    const dispach = useDispatch();
    useEffect(() => {
        dispach(getProducts());
    }, [dispach])

    const getProductByCatId = async () => {
        const res = await fetch(`/products/getcategory/${categoryId}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json();
        console.log(data);
        if (res.status !== 201) {
            console.log('data not available');
        } else {
            setProduct(data)
            console.log(data);
        }
    } 

    useEffect(() => {
        setTimeout(getProductByCatId, 1000)
    })

    return (
        <>
            {product.map((product) => (
                <Product
                    key={product._id}
                    id={product._id}
                    title={product.title}
                    price={product.price}
                    image={product.imageUrl}
                    specification={product.specification} />
            ))}
        </>
    );
};

export default ProductCategory;
