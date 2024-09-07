import { Metadata, NextPage } from 'next';

import { ProductForm } from '@modules/Product';

export const metadata: Metadata = {
  title: 'Добавление товара',
  description: 'Добавление товара',
};

const ProductAddPage: NextPage = () => {
  return <ProductForm />;
};

export default ProductAddPage;
