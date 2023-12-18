import React, { useEffect } from 'react'
import './Admin.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { toast } from 'react-toastify'

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage'
import { collection, addDoc, serverTimestamp, query, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { storage, db } from '../firebase'
import PanelItem from '../../features/PanelItem/PanelItem';

function Admin() {
  
    const [products, setProducts] = useState([])
    const [image, setImage] = useState(null)
    const [uploadProgress, setUploadProgress] = useState(0)
    const [values, setValues] = useState({
      title:'',
      descritpion:'',
      price:0,
      category:''
    })

    const handleChange = (e) => {
      if (e.target.files[0]) {
        setImage(e.target.files[0])
      }
    }
    function handleInputChange(e){
      const newValues = {...values}
    newValues[e.target.name] = e.target.value
    setValues(newValues) 
 }
  async function handleSubmit(e){
    e.preventDefault()
    if (image) {
      try {
        const storageRef = ref(storage, `images/${image.name}`)
        const uploadTask = uploadBytesResumable(storageRef, image)

        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            setUploadProgress(progress)
          },
          (error) => {
            console.error('Error uploading image:', error)
          },
          async () => {
            const imageUrl = await getDownloadURL(storageRef)

            const docRef = await addDoc(collection(db, 'products'), {
              title: values.title,
              descritpion: values.descritpion,
              image: imageUrl,
              price:values.price,
              category:values.category
            })

            setUploadProgress(0)
            setValues('')
            setImage(null)
            toast.success('Produs adaugat cu succes')
            console.log('Document written with ID: ', docRef.id)
          }
        )
      } catch (error) {
        console.error('Error uploading image:', error)
      }
    }
  
  }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  


    useEffect(() => {
      const fetchData = async () => {
        try {
          const productsData = [];
          const q = query(collection(db, 'products'))
          const querySnapshot = await getDocs(q);
  
          querySnapshot.forEach((doc) => {
            const postData = doc.data();
            const productId = doc.id;
  
           
            productsData.push({
              id: productId,
              imageUrl: postData.image,
              title: postData.title,
              description: postData.descritpion,
              price: postData.price,
              category: postData.category,
            });
          });
  
          setProducts(productsData);
        } catch (error) {
          console.error('Eroare la preluarea datelor:', error);
        }
      };
  
      fetchData();
    }, []);
    const handleDelete = async (itemId) => {
      try {
        await deleteDoc(doc(db, 'products', itemId));
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== itemId));
  
        toast.success('Produs sters cu succes!');
      } catch (error) {
        console.error('Error deleting product:', error);
        toast.error('Error deleting product');
      }
    };
  
  return (
    <div>
    <div className='mb-5 p-5'></div>
    <div className='p-5'><h1 className='text-white text-center'>Admin Panel</h1></div>
    <h1 className='textWhite'>{values.title}</h1>
    <div className='container-md p-5'>

    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav  className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first" className='bold profile-btn'>All items</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second" className='bold profile-btn'>Add new Item</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
                <h4 className='text-white mb-4'>All items</h4>
                <div className='mb-4'>
                    <h1 className='textWhite'>{values.title}</h1>
                <Form.Select aria-label="Default select example">
                    <option value="0" >All items</option>
                    <option value="1">Tei</option>
                    <option value="2">Salcam</option>
                    <option value="3">Poliflora</option>
                    <option value="4">Accesorii</option>
                </Form.Select>
                </div>
                {products.map(({ title, description,price, category, id,imageUrl }) => (
          <PanelItem
            title={title}
            postId={id}
            id={id}
            image={imageUrl}
            description={description}
            price={price}
            category={category}
            onDelete={handleDelete}
          ></PanelItem>
        ))}
             
            </Tab.Pane>
            <Tab.Pane eventKey="second">
               
                <Form onSubmit={handleSubmit}>
            <h4 className='text-white mb-5'>Add new item</h4>
          <Form.Group className="mb-3" controlId="adminTitle">
        <Form.Label className='text-white bold'>Titlu</Form.Label>
        <Form.Control type="text" placeholder="Title" name='title'  value={values.title} onChange={handleInputChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="adminDescription">
        <Form.Label className='text-white bold'>Description</Form.Label>
        <Form.Control type="text" placeholder="Description" name='descritpion'  value={values.descritpion}  onChange={handleInputChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="adminPrice">
        <Form.Label className='text-white bold'>Price</Form.Label>
        <Form.Control type="text" placeholder="Price" name='price' value={values.price}  onChange={handleInputChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="adminCategory">
        <Form.Label className='text-white bold'>Category</Form.Label>
        <Form.Control type="text" placeholder="Category" name='category' value={values.category}   onChange={handleInputChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="adminImage">
        <Form.Label className='text-white bold'>Image</Form.Label>
        <Form.Control type="file"  onChange={handleChange}   />
        <progress
        className="imageUpload_progress"
        value={uploadProgress}
        max="100"
      />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
        </div>
      
    </div>
  )
}

export default Admin