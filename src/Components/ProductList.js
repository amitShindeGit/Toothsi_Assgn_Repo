import React, {useEffect, useState} from 'react'
import Product from './Product';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from '../state-management/action/action';


const ProductList = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => (state.productReducer.productList));
  const isFilterOn = useSelector((state) => (state.productReducer.isFitlerOn));
  const filteredProductData = useSelector((state) => (state.productReducer.productListOnType_Size));
  const isSearching = useSelector((state) => (state.productReducer.isSearching));
  const searchList = useSelector((state) => (state.productReducer.searchList));

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [])
  

  return (
    <div>
        {productData && !isFilterOn && !isSearching && productData.map((item) => {
            return <Product key={item.id} id={item.id} img={item.image} name={item.name} color={item.color[0]} inStock={item.instock} price={item.price} size={item.size} allColors={item.color} totalQuantity={item.totalQuantity} />
        })}
        {filteredProductData && isFilterOn && !isSearching && filteredProductData.map((item) => {
            return <Product key={item.id} id={item.id} img={item.image} name={item.name} color={item.color[0]} inStock={item.instock} price={item.price} size={item.size} allColors={item.color} totalQuantity={item.totalQuantity} />
        })}
        {productData && isSearching && searchList.map((item) => {
            return <Product key={item.id} id={item.id} img={item.image} name={item.name} color={item.color[0]} inStock={item.instock} price={item.price} size={item.size} allColors={item.color} totalQuantity={item.totalQuantity} />
        })}
    </div>
  )
}

export default ProductList