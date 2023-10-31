import { useEffect, useState } from 'react';
import { db } from '../firebase';

import Header from '../containers/Header';
import ProductList from '../containers/ProductList';
import Footer from '../containers/Footer';

import { mockProducts } from '../db/productsDB';




function Home() {

  const [products, setProducts] = useState([]);
  const [isDatabaseLoaded, setIsDatabaseLoaded] = useState(false);

  useEffect(() => {
    db.collection('products').onSnapshot(snapshot => {
      const fetchedProducts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log("Fetched products:", fetchedProducts);  // Log pour vérifier les produits
      setProducts(fetchedProducts);
      setIsDatabaseLoaded(true);
    });
  });

  return (
    <>
      <Header />
      <ProductList products={isDatabaseLoaded ? products : mockProducts} />
      <Footer />
    </>
  );
}
export default Home;