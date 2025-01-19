export interface ProductType {
  id: number;
  productName: string;
  price: number;
}

interface ProductProps {
  id: number;
  productName: string;
  price: number;
}

export default function Product({ id, productName, price }: ProductProps) {
  return (
    <div>
      <h2>
        {id}: {productName}
      </h2>
      <p>${price.toLocaleString()}</p>
    </div>
  );
}
