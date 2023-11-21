'use client';

import styled from 'styled-components';

export const StyledShoppingCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  min-width: 225px;
  width: 20%;
  height: 100%;
  padding: 20px;
  overflow: scroll;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: -5px 0px 6px 0px #00000021;

  .cart-header {
    display: flex;
    justify-content: space-between;

    .cart-title {
      font-size: 1.6875rem;
      font-weight: 700;
      line-height: 32px;
      color: #ffffff;
      max-width: 160px;
    }

    .close-button {
      width: 45px;
      height: 45px;
      background-color: transparent;
    }
  }

  .cart-list {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .cart-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      padding: 10px;
      position: relative;
      background-color: #ffffff;
      border-radius: 8px;

      .cart-img-container {
        position: relative;
        padding: 10px;
        align-self: center;
        width: 80px;
        height: 95px;
      }

      .remove-button {
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 1;
        background-color: transparent;
      }

      .product-name {
        font-size: 1rem;
        font-weight: 400;
        line-height: 19px;
        color: #2c2c2c;
      }

      .product-info-container {
        display: flex;
        justify-content: space-between;
        width: 100%;

        .product-quantity {
          display: flex;
          padding: 5px;
          width: 70px;
          gap: 10px;
          background-color: #ffffff;
          border: 0.3px solid #bfbfbf;
          border-radius: 4px;

          p,
          button {
            font-size: 24px;
            font-weight: 400;
            line-height: 30px;
            background-color: transparent;
          }

          p {
            border-left: 0.2px solid #bfbfbf;
            border-right: 0.2px solid #bfbfbf;
            width: 30px;
            text-align: center;
          }
        }

        .cart-price-container {
          display: flex;
          align-items: center;
          background-color: #373737;
          padding: 10px;
          border-radius: 5px;

          p {
            font-size: 0.975rem;
            font-weight: 700;
            line-height: 15px;
            color: #ffffff;
          }
        }
      }
    }
  }

  .cart-total {
    display: flex;
    gap: 10px;

    h2 {
      font-size: 1.3rem;
      font-weight: 700;
      line-height: 32px;
      color: #ffffff;
    }
  }

  .buy-button {
    position: sticky;
    bottom: 0;
    background-color: #000000;
    width: calc(100% + 40px);
    align-self: center;
    min-height: 65px;
    padding: 5px;

    font-size: 1.25rem;
    font-weight: 700px;
    line-height: 15px;
    color: #ffffff;
  }

  .empty {
    margin: auto;
    align-self: center;
    max-width: 300px;
  }
`;
