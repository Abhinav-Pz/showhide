import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  


function Header() {
  return (
    <div>
         <MDBNavbar light bgColor='primary'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://i.gifer.com/QHTn.gif'
              height='50'
              alt=''
              loading='lazy'
            />
            <b>SHOW - HIDE</b>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header