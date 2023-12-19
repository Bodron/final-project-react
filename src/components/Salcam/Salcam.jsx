import React, { useEffect, useState } from 'react'
import './Salcam.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import GridCards from '../../features/GridCards/GridCards'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import { useParams } from 'react-router-dom'

function Salcam() {
  const { category } = useParams();
  console.log(category)
  const [products, setProducts] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = [];
        const q = query(collection(db, 'products'), where('category', '==', category));
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
  }, [category]);
  return (
    <div> 
  
    <div className='p-4 mb-5'>
   </div> 
   <h1 className='text-white p-4 mb-5'>{category}</h1>
    <hr className='white-line'/>
   <div className='container-fluid wrapper-products d-flex'>
   {products.map(({ title, description,price, category, id,imageUrl }) => (
          <GridCards
            title={title}
            postId={id}
            id={id}
            image={imageUrl}
            description={description}
            price={price}
            category={category}
          ></GridCards>
        ))}
  
   </div>
   
    </div>
  )
}

export default Salcam