'use client';

import styled from 'styled-components';

export const StyledHomePage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  height: min-content;
  gap: 10px;
  overflow: hidden;
  border: transparent;
  border-radius: 30px;
  padding: 15px 32px;
  margin: 15px auto;
  background-color: ${({ theme }) => theme.colors.background};
`;
