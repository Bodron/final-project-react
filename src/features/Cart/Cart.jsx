import React from 'react'
import { useState } from 'react';
import style from './Cart.module.css'
import CartItem from '../CartItem/CartItem';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import SubTotal from '../SubTotal/SubTotal';

function Cart({ show, handleClose,handleOpen }) {
   
  return (
    
     <div> 
      <Button  onClick={handleOpen} className={style["me-2"]}>
        <ShoppingCartOutlinedIcon />
      </Button>   
    
      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton className={style["offcanvas-header"]} >
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={style["offcanvas-body"]}>
       <CartItem/>
       <hr/>
      <SubTotal/>
        </Offcanvas.Body>
      </Offcanvas>
    </div>

  )
}

export default Cart