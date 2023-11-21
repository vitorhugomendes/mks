'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ProductsProvider } from './ProductsProvider';
import { DarkModeProvider } from './DarkModeProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <ProductsProvider>
        <DarkModeProvider>{children}</DarkModeProvider>
      </ProductsProvider>
    </QueryClientProvider>
  );
}
