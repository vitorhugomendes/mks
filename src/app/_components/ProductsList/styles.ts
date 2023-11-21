'use client';

import styled from 'styled-components';

export const StyledProductsList = styled.ul`
  display: flex;
  margin: 0 auto;
  padding: 20px;
  gap: 20px;
  flex-direction: column;

  .product-card {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 251px;
    height: 285px;
    margin: 20px auto 0;
    border: 1px transparent;
    border-radius: 8px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    background-color: #ffffff;

    .product-img-container {
      position: relative;
      min-width: 60px;
      width: 60%;
      min-height: 158px;
      height: 158px;
      margin: 0 auto;
    }

    .product-info-container {
      display: flex;

      justify-content: space-between;
      gap: 10px;
      margin: 0 15px;

      h3 {
        font-size: 1rem;
        font-weight: 400;
        line-height: 19px;
        color: #2c2c2c;
      }

      .price-container {
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

    .product-description {
      margin: 0 15px;
      font-size: 0.625rem;
      font-weight: 300;
      line-height: 12px;
      color: #2c2c2c;
      min-height: 34px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }

    .product-button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      font-size: 0.875rem;
      font-weight: 600;
      line-height: 18px;
      background-color: ${({ theme }) => theme.colors.primary};
      color: #ffffff;
      padding: 5px;
      border-radius: 0 0 8px 8px;
    }
  }

  @media (min-width: 530px) {
    max-width: 1100px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
