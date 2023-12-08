import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './CardGroup.css'
import CardGroup from 'react-bootstrap/CardGroup';
import OneCard from '../Card/Card';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../components/firebase';



function Cards() {
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
  }, [])
  return (
    <CardGroup>
       
   {products.map(({ title, description,price, category, id,imageUrl }) => (
          <OneCard
            title={title}
            postId={id}
            key={id}
            image={imageUrl}
            description={description}
            price={price}
            category={category}
          ></OneCard>
        ))}
   
 
  </CardGroup>
  )
}

export default Cards