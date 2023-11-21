import { useContext } from 'react';
import { ProductsContext } from '../_providers/ProductsProvider';

export default function useProducts() {
  const productsContext = useContext(ProductsContext);

  return productsContext;
}
