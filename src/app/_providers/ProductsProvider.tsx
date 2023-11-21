/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { ReactNode, createContext, useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { api } from '../_services/api';

interface IProductsProviderProps {
  children: ReactNode;
}

interface IProduct {
  brand: string;
  createdAt: string;
  description: string;
  id: number;
  name: string;
  photo: string;
  price: string;
  updatedAt: string;
  quantity?: number;
}

interface IData {
  products: IProduct[];
  count: number;
}

interface IProductsContextValues {
  cartOpen: boolean;
  toggleCart: () => void;
  products: IProduct[] | undefined;
  cartProducts: IProduct[];
  addProductToCart: (product: IProduct, quantity: number) => void;
  removeProductFromCart: (productId: number) => void;
  toggleCartItemQuantity: (productId: number, type: 'inc' | 'dec') => void;
  totalPrice: number;
}

export const ProductsContext = createContext({} as IProductsContextValues);

export const ProductsProvider = ({ children }: IProductsProviderProps) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState<IProduct[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [productQuantity, setProductQuantity] = useState(1);

  const { data } = useQuery<IData>({
    queryKey: ['products'],
    queryFn: async () => {
      return api
        .get('/products?page=1&rows=8&sortBy=id&orderBy=ASC')
        .then((res) => res.data);
    },
  });

  const products: IProduct[] | undefined = data?.products;

  const toggleCart = () => setCartOpen(!cartOpen);

  const addProductToCart = (product: IProduct, quantity: number) => {
    const checkProductInCart = cartProducts.find(
      (item) => item.id === product.id
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + Number(product.price) * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      const updatedCartProducts = cartProducts.map((cartProduct) => {
        if (cartProduct.id === product.id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity! + quantity,
          };
        return cartProduct;
      });

      setCartProducts(updatedCartProducts);
    } else {
      const newCartItem = { ...product };
      newCartItem.quantity = quantity;

      setCartProducts([...cartProducts, { ...newCartItem }]);
    }
  };

  const removeProductFromCart = (productId: number) => {
    const foundProduct = cartProducts.find((item) => item.id === productId)!;
    const newCartProducts = cartProducts.filter(
      (item) => item.id !== productId
    );

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - Number(foundProduct.price) * foundProduct.quantity!
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity!
    );

    setCartProducts(newCartProducts);
  };

  const toggleCartItemQuantity = (productId: number, type: 'inc' | 'dec') => {
    const foundProduct = cartProducts.find((item) => item.id === productId)!;
    const index = cartProducts.findIndex((product) => product.id === productId);
    const newCartProducts = cartProducts.filter(
      (item) => item.id !== productId
    );

    if (type === 'inc') {
      foundProduct.quantity! += 1;
      setTotalPrice(
        (prevTotalPrice) => prevTotalPrice + Number(foundProduct.price)
      );
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (type === 'dec') {
      if (foundProduct.quantity! > 1) {
        foundProduct.quantity! -= 1;
        setTotalPrice(
          (prevTotalPrice) => prevTotalPrice - Number(foundProduct.price)
        );
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
      setCartProducts([
        ...newCartProducts.slice(0, index),
        foundProduct,
        ...newCartProducts.slice(index),
      ]);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        cartOpen,
        toggleCart,
        products,
        cartProducts,
        addProductToCart,
        removeProductFromCart,
        toggleCartItemQuantity,
        totalPrice,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
