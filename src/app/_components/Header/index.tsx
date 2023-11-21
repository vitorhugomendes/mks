'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StyledHeader } from './styles';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import cartIcon from '@/app/_assets/cart-icon.svg';
import { useDarkMode, useProducts } from '@/app/_hooks';

export default function Header() {
  const { darkMode, setDarkMode } = useDarkMode();
  const { cartProducts, toggleCart } = useProducts();

  return (
    <StyledHeader>
      <div className="logo">
        <Link href="/">MKS</Link>
        <span>Sistemas</span>
      </div>
      <div className="buttons">
        <div
          title="Modo escuro/claro"
          role="button"
          className="dark-mode-button"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <MdLightMode /> : <MdDarkMode />}
        </div>
        <button title="Acessar carrinho" className="cart-button">
          <div className="cart-icon" onClick={() => toggleCart()}>
            <Image src={cartIcon} alt="Carrinho" />
          </div>
          <span>{cartProducts.length}</span>
        </button>
      </div>
    </StyledHeader>
  );
}
