import { Col, Row } from 'react-bootstrap'
import Product from '../Components/Product'
import { useGetProductsQuery } from '../slices/productsApiSlice'
import Loader from '../Components/Loader'


const HomeScreen = () => {
  const {data:products,isLoading,error}=useGetProductsQuery()

  return (
    <div>
      {isLoading ? (
      <Loader />)
      : error ?(
        <div>{error?.data?.message || error.error}</div>
      ) : (
        <>
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
      </>)}
        
    </div>
  )
}

export default HomeScreen
