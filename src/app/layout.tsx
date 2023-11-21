import React from 'react';
import type { Metadata } from 'next';
import StyledComponentsRegistry from './_lib/registry';
import ThemeClient from './_styles/theme';
import { Providers } from './_providers';

export const metadata: Metadata = {
  title: 'MKS',
  description: 'MKS teste técnico - Vitor Hugo Mendes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <StyledComponentsRegistry>
            <ThemeClient>{children}</ThemeClient>
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}
