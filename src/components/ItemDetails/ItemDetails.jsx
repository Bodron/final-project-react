import React, { useEffect, useState } from 'react'
import './ItemDetails.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Carousel from 'react-bootstrap/Carousel';
import Cards from '../../features/CardGroup/CardGroup';
import { doc, getDoc, } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { useStateValue } from '../../StateProvider';
import { toast } from 'react-toastify';


function ItemDetails() {
  const [{basket},dispatch] = useStateValue()
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cantitate, setCantitate] = useState()

  const addToBasket = () => {
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id:product.id,
        title:product.title,
        price:product.price,
        image:product.image,
        cantitate:cantitate
      }
    })
    toast.success('Ai adaugat cu succes in cos!')
  }
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const docRef = doc(db, 'products', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const postData = docSnap.data();
          setProduct({
            id,
            image: postData.image,
            title: postData.title,
            description: postData.descritpion,
            price: postData.price,
            category: postData.category,
          });
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error getting product details:', error);
      }
    };

    fetchProductDetails();
  }, [id]);

  function handleChange(e){
    setCantitate(e.target.value)
  }

  if (!product) {
    // Poate afișa un mesaj de încărcare sau redirecționa către o pagină de eroare
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className='mb-5 p-3'><Header/></div>
      <div className=' container-fluid  imgopc  '>
        <div className='container-fluid containerabs p-5 ' >
            <h1 className='text-white'>{product.title}</h1> 
            <hr className='white-line'/>
            <div className='row d-flex '>

            <div className='col-md-6 p-4 mb-5 d-flex align-item-center justify-content-center'>
            <img id='imgDetails'
              alt=""
              src={product.image}
              width="500"
              height="500"
              className="d-inline-block align-top "
              style={{objectFit:'contain'}}
            />
            </div>
            <div className='col-md-4 p-5 '>
              <div className='item-price'>
                <h4 className='text-white '>{product.price} RON</h4>
                <p className='text-white' >Status:</p>
              </div>
              <hr className='white-line'/>
              <div className='description p-3'>
                <p className='text-white h4'>{product.description}</p>
              </div>
              <hr className='white-line'/>
              <div className='buttons-details'>
              <label  className="text-white m-3" >Cantitate: </label>
              <input type="number" id="quantitydetails"  name="quantity" onChange={handleChange}/>
              <button  className='btn-card btn-details m-2' onClick={addToBasket}>Adauga in cos</button>
             <FavoriteBorderIcon className='text-white'/> 
              </div>
              <hr className='white-line'/>
              <div className='item-price  m-4'>
                
                <p className='text-white ' >Categorie:{product.category}</p>
              </div>
            </div>
            </div>
        </div>
    </div> 
        
          
      <Footer/>
    </div>
  )
}

export default ItemDetails