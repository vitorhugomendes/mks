'use client';

import React from 'react';
import { StyledShoppingCart } from './styles';
import Image from 'next/image';
import closeCart from '@/app/_assets/Close_cart.svg';
import removeProduct from '@/app/_assets/x.svg';
import { useProducts } from '@/app/_hooks';

export default function ShoppingCart() {
  const {
    cartOpen,
    toggleCart,
    cartProducts,
    removeProductFromCart,
    toggleCartItemQuantity,
    totalPrice,
  } = useProducts();

  if (cartOpen) {
    return (
      <StyledShoppingCart>
        <div className="cart-header">
          <h2 className="cart-title">Carrinho de compras</h2>
          <button className="close-button" onClick={() => toggleCart()}>
            <Image
              src={closeCart}
              alt="Fechar carrinho"
              title="Fechar carrinho"
            />
          </button>
        </div>

        {cartProducts.length > 0 ? (
          <>
            <ul className="cart-list">
              {cartProducts.map((product) => {
                const { id, photo, name, price, quantity } = product;
                return (
                  <li key={id} className="cart-card">
                    <div className="cart-img-container">
                      <Image
                        fill={true}
                        sizes="100%"
                        src={photo}
                        alt={name}
                        title={name}
                      />
                    </div>
                    <button
                      className="remove-button"
                      onClick={() => removeProductFromCart(id)}
                    >
                      <Image
                        src={removeProduct}
                        alt="Remover produto do carrinho"
                        title="Remover produto do carrinho"
                      />
                    </button>

                    <h3 className="product-name">{name}</h3>

                    <div className="product-info-container">
                      <div className="product-quantity">
                        <button
                          onClick={() => toggleCartItemQuantity(id, 'dec')}
                        >
                          -
                        </button>
                        <p>{quantity}</p>
                        <button
                          onClick={() => toggleCartItemQuantity(id, 'inc')}
                        >
                          +
                        </button>
                      </div>
                      <div className="cart-price-container">
                        <p>
                          {Number(price).toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          })}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="cart-total">
              <h2 className="cart-title">Total:</h2>
              <h2 className="cart-title">
                {totalPrice.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </h2>
            </div>
            <button className="buy-button">Finalizar Compra</button>
          </>
        ) : (
          <h2 className="cart-title empty">O carrinho está vazio.</h2>
        )}
      </StyledShoppingCart>
    );
  }
}
