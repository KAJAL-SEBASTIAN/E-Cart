import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBRipple
  } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div>
        <MDBFooter className='text-center text-white' bgColor='light' >
      <MDBContainer className='p-4'>
        <section className=''>
          <MDBRow>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='data:image/jpeg;base64,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' style={{height:'250px'}} className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQQbWVBR9UpHT4fQmIoxMZd9muZi4dqlu7V-BNiumUnCwIypHZxE3YgGprK3xNZsskh5HzSNcV0QV664bnckGOl4cJaBjB9xbTDf_iqwN3zrWzH9UMYUBk9&usqp=CAc' style={{height:'250px'}}  className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNlIQec1QP-iGjiKFuSDJoWHn09kW0yCgynA&s' style={{height:'250px'}}  className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGKxQbvha6nTAxUk8O2AvoAnB5APzanM-dwg&s' style={{height:'250px'}}  className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF0Cp6qWsZ_Cjw0MuFod9FhIKJfJeSfzEb4w&usqp=CAU' style={{height:'250px'}}  className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiJCdvur75N_LxYk2woUFj3i09dwy5gHYeeg&s' style={{height:'250px'}}  className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center text-dark p-3' style={{ backgroundColor:'silver' }}>
        © 2024 Copyright:
        <a className='text-dark' style={{textDecoration:'none'}} href='/'>
          ebuy.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer