import { NextPage } from 'next';

import MainContainer from '@components/MainContainer/MainContainer';

import { ProductsList } from '@modules/Products';

const MainPage: NextPage = async () => {
  const res = await fetch(`https://fakestoreapi.com/products?limit=16`);
  const initialData = await res.json();

  return (
    <MainContainer>
      <ProductsList initialData={initialData} />
    </MainContainer>
  );
};

export default MainPage;
