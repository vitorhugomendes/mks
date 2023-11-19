'use client';

import React from 'react';
import Link from 'next/link';
import { StyledHeader } from './styles';
import { useDarkMode } from '@/app/_hooks/useDarkMode';
import { TiShoppingCart } from 'react-icons/ti';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export default function Header() {
  const { darkMode, setDarkMode } = useDarkMode();

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
          <div className="cart-icon">
            <TiShoppingCart />
          </div>
          <span>1</span>
        </button>
      </div>
    </StyledHeader>
  );
}
