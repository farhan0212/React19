import { useEffect, useState } from "react";
import Product, { ProductType } from "./Product";

export default function ProductList() {
  const [products, setProducts] = useState<Array<ProductType>>([]);
  const [load, setLoad] = useState<boolean>(false);

  function handleLoad() {
    setLoad(true);
  }
  async function fetchProduct() {
    try {
      const response = await fetch("/product.json");
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      throw new Error(`error ${error}`);
    }
  }

  useEffect(() => {
    if (load) {
      fetchProduct();
    }
  }, [load]);

  return (
    <>
      <h1>Product List</h1>
      <button onClick={handleLoad}>Load Product</button>
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          productName={product.productName}
          price={product.price}
        />
      ))}
    </>
  );
}
