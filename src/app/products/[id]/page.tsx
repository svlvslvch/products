import { Metadata, NextPage } from 'next';

import { Product } from '@modules/Product';

import { IPageParams } from '@shared/types';

export const metadata: Metadata = {
  title: 'Информация о товаре',
  description: 'Детальная информация о товаре',
};

const ProductPage: NextPage<IPageParams> = async ({ params }) => {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const initialData = await res.json();

  return <Product id={Number(params.id)} initialData={initialData} />;
};

export default ProductPage;
