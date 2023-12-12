import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function PanelItem({ title, description, price, category, id, image }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div className='row mb-4' key={id}>
    <div className='col'>
    <img
  alt=""
  src={image}
  width="200"
  height="150"
  className="d-inline-block align-top "
  style={{objectFit:'contain'}}
/>
    </div>
    <div className='col d-flex align-items-start justify-content-center flex-column'>
      <h5 className='text-white'>{title}</h5>
      <p  className='text-white'>{price} RON</p>
    </div>
    <div className='col-md-5 d-flex align-items-start justify-content-center flex-column'>
    <div className='d-flex justify-content-evenly'><button  className='btn-card'>Delete</button><button  className='btn-cardfav'  onClick={handleShow}>Update</button></div>
    <Modal show={show} onHide={handleClose}>
         <Modal.Header closeButton>
         <h4 className='text-white mb-5'>Update item</h4>
        </Modal.Header>
        <Modal.Body>
        <Form>

<Form.Group className="mb-3" controlId="updateAdminTitle">
<Form.Label className='text-white bold'>Titlu</Form.Label>
<Form.Control type="text" placeholder="Title"  />
</Form.Group>
<Form.Group className="mb-3" controlId="updateAdminDescription">
<Form.Label className='text-white bold'>Description</Form.Label>
<Form.Control type="text" placeholder="Description" />
</Form.Group>
<Form.Group className="mb-3" controlId="updateAdminPrice">
<Form.Label className='text-white bold'>Price</Form.Label>
<Form.Control type="text" placeholder="Price"  />
</Form.Group>
<Form.Group className="mb-3" controlId="updateAdminCategory">
<Form.Label className='text-white bold'>Category</Form.Label>
<Form.Control type="text" placeholder="Category" />
</Form.Group>
<Form.Group className="mb-3" controlId="updateAdminImage">
<Form.Label className='text-white bold'>Image</Form.Label>
<Form.Control type="file"  />

</Form.Group>

<Button variant="primary" type="submit">
Update
</Button>
</Form>            
</Modal.Body>
</Modal>
    </div>
  </div>
  )
}

export default PanelItem