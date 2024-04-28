import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import { Col, Row } from 'react-bootstrap'
import useFetch from '../Hooks/UseFetch';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../Redux/Slice/wishlistSlice';
import { addToCart } from '../Redux/Slice/cartSlice';

function Home() {

const data = useFetch('https://dummyjson.com/products')
console.log(data);

const dispatch=useDispatch()

const wishlistArray = useSelector((state)=>state.wishlistReducer)

const handleAddToWishlist =(item)=>{
//check if the product available in wishlist
const isItem = wishlistArray.some((wishlistItem)=>wishlistItem.id === item.id)
if(isItem){
  alert("Product available in wishlist")
}
else{
  dispatch(addToWishlist(item))
}
}



  return (
    <div>
      <MDBRipple
        rippleColor='light'
        className='bg-image hover-overlay shadow-1-strong rounded w-100' >
        <img src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHNob3BwaW5nfGVufDB8fDB8fHww" style={{ width: '100%', height: '600px' }} alt="" />
      </MDBRipple>

      <Row>
        {
        data?.length > 0 ? data.map((item)=>(
            <Col>
              <MDBCard className='m-3 shadow' style={{width:'300px',height:'350px'}} >
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                  <MDBCardImage src={item.thumbnail} style={{width:'300px',height:'280px'}}  fluid alt='...' />
                  <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </a>
                </MDBRipple>
                <MDBCardBody>
                  <MDBCardTitle> {item.title} </MDBCardTitle>
                  <MDBCardText>
                    Price: ${item.price}
                  </MDBCardText>
                 <div className='d-flex justify-content-evenly'>
                 <MDBBtn onClick={()=>handleAddToWishlist(item)}><i className='fa-solid fa-heart text-danger fs-4'></i></MDBBtn>
                  <MDBBtn onClick={()=>dispatch(addToCart(item))}><i className='fa-solid fa-cart-plus text-light fs-4'></i></MDBBtn>
                 </div>
                </MDBCardBody>
              </MDBCard>
            </Col>
          )) : "No data found"
        }
      </Row>

    </div>
  )
}

export default Home