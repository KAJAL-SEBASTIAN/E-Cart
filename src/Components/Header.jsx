import React, { useState } from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
  } from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    const [openBasic, setOpenBasic] = useState(false);

const wishlistArray = useSelector((state)=>state.wishlistReducer)
const cartArray = useSelector((state)=>state.cartReducer)
  return (
    <div>
         <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>

        <MDBNavbarBrand href='/'> <i class="fa-solid fa-cart-shopping fa-bounce m-3 fs-1 "></i>
        <h1>EBuy</h1>
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
        </MDBNavbarNav>
        <form className='d-flex  w-auto'>
    <Link to={'/wishlist'}>
    <a> <i className='fa-solid fa-heart fs-2 text-danger me-4'></i> </a>
    <Badge bg="secondary" className='' style={{width:'30px',height:'25px'}} > {wishlistArray.length} </Badge>
    </Link>
    <Link to={'/cart'}>
    <a> <i className='fa-solid fa-cart-plus fs-2 text-primary me-4'></i> </a>
    <Badge bg="secondary" className='' style={{width:'30px',height:'25px'}} > {cartArray.length} </Badge>
    </Link>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </div>
  )
}

export default Header