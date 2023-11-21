import React from 'react';

import { Header, ProductsList, ShoppingCart, Footer } from './_components';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ProductsList></ProductsList>
      </main>
      <ShoppingCart />
      <Footer />
    </>
  );
}
