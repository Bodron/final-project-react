import React, { useEffect, useState } from 'react'
import './Salcam.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import GridCards from '../../features/GridCards/GridCards'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

function Salcam() {
  const [products, setProducts] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = []
        const querySnapshot = await getDocs(
          collection(db, 'products'),
        )

        querySnapshot.forEach((doc) => {
          const postData = doc.data()
          const productId = doc.id

          // Adaugă fiecare post în array-ul postsData
          productsData.push({
            id: productId,
            imageUrl:postData.image,
            title:postData.title,
            description:postData.descritpion,
            price:postData.price,
            category:postData.category
          })
        })

        setProducts(productsData)
      } catch (error) {
        console.error('Eroare la preluarea datelor:', error)
      }
    }

    fetchData()
    console.log(products.image)
  }, [])
  return (
    <div> 
    <Header/>
    <div className='wrapper-img container-md'>
     <img src="./images/bees-logo.jpeg" alt="logo" />
   </div> 
   <h1 className='text-white p-4'>Salcam</h1>
    <hr className='white-line'/>
   <div className='container-fluid p-4 d-flex'>
   {products.map(({ title, description,price, category, id,imageUrl }) => (
          <GridCards
            title={title}
            postId={id}
            key={id}
            image={imageUrl}
            description={description}
            price={price}
            category={category}
          ></GridCards>
        ))}
  
   </div>
   <Footer/>
    </div>
  )
}

export default Salcam