import React, { useEffect, useState } from 'react'
// import products from '../products'
import axios from 'axios'
import { Col, Row } from 'react-bootstrap'
import Product from '../Components/Product'
const HomeScreen = () => {
  const [products,setProducts]=useState([])
  useEffect(() => {
    const fetchData=async()=>{
      const {data}= await axios.get('/api/products');
      setProducts(data)
    }
  fetchData()
  }, [])

  return (
    <div>
        <h1>Latest Products</h1>
        <Row>
        {products.map((product)=>{
            return(
                <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                    <Product product={product}/>
                </Col>
            )
        })}
      </Row>
    </div>
  )
}

export default HomeScreen
