'use client';

import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.primary};

  .logo {
    display: flex;
    align-items: center;
    align-items: baseline;
    gap: 7px;

    a {
      font-size: 2.1875rem;
      text-decoration: none;
      color: #ffffff;
    }

    span {
      font-size: 20px;
      font-weight: 300;
      color: #ffffff;
    }
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 20px;

    svg,
    img {
      width: 100%;
      height: 100%;
    }

    .dark-mode-button {
      align-self: center;
      justify-self: center;
      width: 25px;
      height: 25px;
      color: #ffffff;
    }

    .cart-button {
      display: flex;
      justify-content: center;
      gap: 15px;
      padding: 6px;
      width: 80px;
      border: 1px solid transparent;
      border-radius: 8px;

      .cart-icon {
        width: 20px;
        height: 20px;
      }

      span {
        font-size: 1.125rem;
        font-weight: 700;
      }
    }
  }

  @media (min-width: 768px) {
    padding: 30px;
  }
`;
