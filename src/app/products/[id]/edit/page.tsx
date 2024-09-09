import { Metadata, NextPage } from 'next';
import { notFound } from 'next/navigation';

import { getBaseUrl } from '@config/api.config';

import { ProductForm } from '@modules/Product';

import { IPageParams } from '@shared/types';
import { IProduct } from '@shared/types/product/product.types';

export const metadata: Metadata = {
  title: 'Редактирование информации о товаре',
  description: 'Редактирование информации о товаре',
};

const ProductEditPage: NextPage<IPageParams> = async ({ params }) => {
  try {
    const res = await fetch(getBaseUrl(`/products/${params.id}`));
    const product = (await res.json()) as IProduct;

    return (
      <ProductForm
        description={product.description}
        id={product.id}
        price={product.price}
        title={product.title}
      />
    );
  } catch (err) {
    notFound();
  }
};

export default ProductEditPage;
