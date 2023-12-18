import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { doc, updateDoc } from 'firebase/firestore';
import { db, storage } from '../../components/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { toast } from 'react-toastify';

function PanelItem({ title, description, price, category, id, image,onDelete }) {
  const [showModalError, setShowModalError] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [updateImage, setUpdateImage] = useState(null);
    const [formValues, setFormValues] = useState({
      title: title,
      description: description,
      price: price,
      category: category,
    });
    const handleUpdateImageChange = (e) => {
      if (e.target.files[0]) {
        setUpdateImage(e.target.files[0]);
      }
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    };

    const handleDelete = () => {
      onDelete(id); 
    };

    const handleUpdate = async (e) => {
      e.preventDefault();
    
      try {
        const productRef = doc(db, 'products', id);

        let updatedImageUrl = image; 
        if (updateImage) {
          const storageRef = ref(storage, `images/${updateImage.name}`);
          const uploadTask = uploadBytesResumable(storageRef, updateImage);
          await uploadTask;
          updatedImageUrl = await getDownloadURL(storageRef);
        }
    

        await updateDoc(productRef, {
          title: formValues.title,
          description: formValues.description,
          price: formValues.price,
          category: formValues.category,
          image: updatedImageUrl,
        });
        toast.success('Ai modificat produsu cu succes!')
        handleClose();
      } catch (error) {
        console.error('Error updating product:', error);
       
      }
    };
    const handleDeleteModal = async () => {
      try {
        await onDelete(id);
        toast.success('Ai sters produsul cu succes!');
      } catch (error) {
        console.error('Error deleting product:', error);
      } finally {
        // Close the delete modal
        setShowModalError(false);
      }
    };
    const handleCloseModalError = () => setSsetShowModalErrorhow(false);
    const handleShowModalError = () => setShowModalError(true);
  return (
    <>
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
    <div className='d-flex justify-content-evenly'>
      <button  className='btn-card' onClick={handleShowModalError}>Delete</button>
      <button  className='btn-cardfav'  onClick={handleShow}>Update</button>
      </div>
   
   {/* Modal for delete */}
   <Modal show={showModalError} onHide={() => setShowModalError(false)}>
        <Modal.Body>
          <p className='mt-2 errofield'>
            Esti sigur ca vrei sa stergi produsul {title}?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModalError(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

    {/* Modal for update */}
    <Modal show={show} onHide={handleClose}>
         <Modal.Header closeButton>
         <h4 className='text-white mb-5'>Update item</h4>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleUpdate}>

<Form.Group className="mb-3" controlId="updateAdminTitle">
<Form.Label className='text-white bold'>Titlu</Form.Label>
<Form.Control type="text" placeholder="Title" name='title' value={formValues.title} onChange={handleInputChange} />
</Form.Group>
<Form.Group className="mb-3" controlId="updateAdminDescription">
<Form.Label className='text-white bold'>Description</Form.Label>
<Form.Control type="text" placeholder="Description" name='description' value={formValues.description} onChange={handleInputChange} />
</Form.Group>
<Form.Group className="mb-3" controlId="updateAdminPrice">
<Form.Label className='text-white bold'>Price</Form.Label>
<Form.Control type="text" placeholder="Price"  name='price' value={formValues.price} onChange={handleInputChange} />
</Form.Group>
<Form.Group className="mb-3" controlId="updateAdminCategory">
<Form.Label className='text-white bold'>Category</Form.Label>
<Form.Control type="text" placeholder="Category" name='category' value={formValues.category} onChange={handleInputChange} />
</Form.Group>
<Form.Group className="mb-3" controlId="updateAdminImage">
  <Form.Label className='text-white bold'>Image</Form.Label>
  <Form.Control type="file" onChange={handleUpdateImageChange} />
</Form.Group>



<Button variant="primary" type="submit">
Update
</Button>
</Form>            
</Modal.Body>
</Modal>
    </div>
  </div>
    </>
  )
}

export default PanelItem