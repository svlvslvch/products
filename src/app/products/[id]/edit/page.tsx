import { Metadata, NextPage } from 'next';

import { ProductForm } from '@modules/Product';

import { IPageParams } from '@shared/types';
import { IProduct } from '@shared/types/product/product.types';

export const metadata: Metadata = {
  title: 'Редактирование информации о товаре',
  description: 'Редактирование информации о товаре',
};

const ProductEditPage: NextPage<IPageParams> = async ({ params }) => {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = (await res.json()) as IProduct;

  return (
    <ProductForm
      description={product.description}
      id={product.id}
      price={product.price}
      title={product.title}
    />
  );
};

export default ProductEditPage;
