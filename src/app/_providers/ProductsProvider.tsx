'use client';

import React, { ReactNode, createContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { api } from '../_services/api';

interface IProductsProviderProps {
  children: ReactNode;
}

interface Products {
  brand: string;
  createdAt: string;
  description: string;
  id: number;
  name: string;
  photo: string;
  price: string;
  updatedAt: string;
}

interface Data {
  products: Products[];
  count: number;
}

interface IProductsContextValues {
  products: Products[] | undefined;
}

export const ProductsContext = createContext({} as IProductsContextValues);

export const ProductsProvider = ({ children }: IProductsProviderProps) => {
  const { data } = useQuery<Data>({
    queryKey: ['products'],
    queryFn: () => {
      return api
        .get('/products?page=1&rows=8&sortBy=id&orderBy=ASC')
        .then((res) => res.data);
    },
  });

  const products: Products[] | undefined = data?.products;

  return (
    <ProductsContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
