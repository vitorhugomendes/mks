'use client';

import React from 'react';
import { StyledProductsList } from './styles';
import Image from 'next/image';
import { LuShoppingBag } from 'react-icons/lu';
import { useProducts } from '@/app/_hooks';

export default function ProductsList() {
  const { products } = useProducts();

  return (
    <StyledProductsList>
      {products?.map((product) => {
        const { id, photo, name, price, description } = product;
        return (
          <li key={id}>
            <div className="product-img-container">
              <Image fill={true} src={photo} alt={name} title={name} />
            </div>
            <div className="product-info-container">
              <h3>{name}</h3>
              <div className="price-container">
                <p>
                  {Number(price).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </p>
              </div>
            </div>
            <p className="product-description">{description}</p>
            <button className="product-button">
              <LuShoppingBag />
              <span>COMPRAR</span>
            </button>
          </li>
        );
      })}
    </StyledProductsList>
  );
}
