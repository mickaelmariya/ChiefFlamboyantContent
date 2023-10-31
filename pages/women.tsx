import HeaderCategories from '../containers/HeaderCategories';
import ProductList from '../containers/ProductList';
import { mockProducts } from '../db/productsDB';
import { db } from '../firebase';
import { useEffect, useState } from 'react';


function Women() {
  const [products, setProducts] = useState([]);
  const [isDatabaseLoaded, setIsDatabaseLoaded] = useState(false);
  // Filtrer les objets avec gender égal à 'WOMEN' ou type égal à 2
  const filteredProducts = mockProducts.filter((product) => {
    return (product.gender === 'WOMEN' || product.type === 2);
  });

  console.log(filteredProducts);
  useEffect(() => {
    db.collection('products').onSnapshot(snapshot => {
      const fetchedProducts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log("Fetched products:", fetchedProducts);  // Log pour vérifier les produits
      const filteredProducts = fetchedProducts.filter((product) => {
        return (product.gender === 'WOMEN' || product.type === 2);
      });
      setProducts(filteredProducts);
      setIsDatabaseLoaded(true);
    });
  });

  return (
    <>
      <HeaderCategories />

      <ProductList products={isDatabaseLoaded ? products : filteredProducts} />
    </>

  );
}

export default Women;