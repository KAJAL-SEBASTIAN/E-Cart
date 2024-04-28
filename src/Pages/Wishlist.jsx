import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import { deleteFromWishlist } from '../Redux/Slice/wishlistSlice';
import { addToCart } from '../Redux/Slice/cartSlice';
import { Link } from 'react-router-dom';

function Wishlist() {

  const dispatch = useDispatch()
const wishlistArray = useSelector((state)=>state.wishlistReducer)
const handleCart=(item)=>{
  //add to cart
dispatch(addToCart(item))
  //remove the wishlist
  dispatch(deleteFromWishlist(item.id))

}


  return (
    <div>
      <Row>
        {
          wishlistArray.length>0?wishlistArray.map((item)=>(
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
                 <MDBBtn onClick={()=>dispatch(deleteFromWishlist(item.id)) } ><i className='fa-solid fa-trash text-danger fs-4'></i></MDBBtn>
                  <MDBBtn onClick={()=>handleCart(item)}><i className='fa-solid fa-cart-plus text-secondary fs-4'></i></MDBBtn>
                 </div>
                </MDBCardBody>
              </MDBCard>
            </Col>
          )):
          <div className='text-center'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAnFBMVEX////hHSbx8fHfAACkpKTn5+fPz8/CwsKnp6fMzMzgEx7hGiPgABHgAA3gDRrgBBXoZ2v97u/3ysz+9vfjMjnnXGHvmJvxoqXiIiv0trj63d7kOD/86OngAAj5+fmzs7OYmJja2tryrK7lRUv51tfukpXiKjHqdHj0u73tiYyPj4+xsbHrfH/nWF3lTlP4z9DpbnLHXmLYxcbMfX99vDdEAAAFOElEQVR4nO3caX+iOAAGcGg6dZpwCQoe0LHeTL129/t/twWPCkkQaFcJs8//XYVfJ88k5CJW0wAAAAAAAAAAAAAe5+1HRU9Nl/SLOr+ff1Yzmbw3Xdiv+PhV/d6nycv9CnIv78917n76/XavgtzNr3oN76N97fS5Xvfx2r5mWjfh653KcT9IyEFCBSEhBwkV9M2Eb+rPcYoTdqerWW/W3wy9zIeZhGHg9GxC2Dbo3rOA31aUMHSIaVHGqBWRvvv58WdCd0cMi+m6zqhBNp78lyihIOGQWPonSrbh+fNzwvmO0Ot13bb3DyruF8gTLoieY5nT04VTwjiXL61I4sp+jRKkCQMuYBphc7ySJvR2Jn9ZZ+boseWuTpZwLwRMRIf0UpKwu7Qkl+n40SWvSpawxyQRdBJr6erJG1DZVT0KHl72aiQJfbERniKu04QzWQ0e26miQ6OY0LOlVZiOC5728pctv6jrl85INWLCaUEVJhl87W/ZI3r+D1D0SRQTXp9CattW9qFjS21zaaMsuWjbuUeSqNmdCglHl1piVt8PFs4g02gjVz/9wOzlKvCD4GBkWrShZl8jJAyMS4UFK90YHHz/Ojqw3anSrGUQOGkNb6b0GpH2G0lQRkjYP7c8ezqwji11GTjXiKdLznRpHG+zxpmnltFGEpQREp4bpbWYnaMystjlele6DcjlA8uJr6MHCaX/RMP4hN75MbTi67Bgxrkx0A4yI4YZXHsbNSenfMLPjuYYihmEJHH4WUxSg9SMTr1MpnqjdTMZbuMT5uakjA274cLQRfZu7QY6NzUwh81kuI1POM8mNN11srYdRkJA6uyTFhnSfEQ1ZzWFrfSYY0zSiYo4E6c+IUkcPz+Fa0cdhpmE1oLYUVKJjvAcLgOSLjXcfO224znUcnW4d9LucSnUodWN070Zbgrbjr5UG2fikHn6yVR8Du2FcG96u5KbbkLCTWbsY0YQjmLZWoMsut5ol18qMr2RBGWEhMNcoNN4KGGbOr8d1ZZ5aVi8AswTHs62rC20mXwfplxb1oc31vglddprovzlxIRd2SytAlPNRirba9sUbjbdRBR9eSFJOBLHvwrsuIHSVyHbEV4VbIneZCo53GvyhKGsEqlppVMAs6CnNVStQvmbmVjsbKKd6+5d112viCHZMWYDRXe8i96uDfgQZOqOo8iMzJ4/P21RcdeVXFYcyROuuYlNNPTJZac0ckYO39vah0eXu7qCd8CHXAYrzka22Ci/+Za0UUVHilTRe/xcO6WH3BKRbrfcsmn+2ELXUpQwt1+jcxsy3I9Eyf2Zi8LTJuKb7iLR5qElrqv4PI3QnRQwFe5lUsUJvXGlZZSh5rr36sapL347tJ0Bb55rm5PSiKbyAW+f3HPLepvIeVhBv+z22UR+bsMhq0cV8xtKTl8Ob0RkxH9QIb+l7HzpsPBZpLaSW9yC0hO064KIxkzJN76i8jPCbiSLSNSeyGRUOAW9N8W3a5HSU9GcKue8RzY3uzHHLWmhqUon2bu97ByVksXdi/UfqnhWvx9lKlDN3fsiVb+NEJNLBbZiEMyo/H2L48DIjFm7KlCr842S+cCi9J8/+huW3nYcvvzh3wry/offe2oBJOQgoYKQkIOECkJCDhIqCAk5SKggJOS0MOHPH7Vu77Rvjf/aqXX7pH1/le6t1l+Z69T4427KeJp8vL5U03n+aLq0X/Peqei13jMLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABt9y+92kXUSpCz2AAAAABJRU5ErkJggg==" className='mt-4' alt="" />
            <h4>Back to Home</h4>
         <Link to={'/'}>
         <button className='btn m-4' > Home</button>
         </Link>
          </div>
        }
      </Row>
    </div>
  )
}

export default Wishlist