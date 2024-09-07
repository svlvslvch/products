'use client';

import { FC } from 'react';
import map from 'lodash/map';

import { useGetProducts } from '@hooks/products/useGetProducts';

import ProductCard from '../ProductCard/ProductCard';

import { IProductsListProps } from './ProductsList.props';

const ProductsList: FC<IProductsListProps> = (props) => {
  const { initialData } = props;

  const { products, isLoading } = useGetProducts(initialData);

  return (
    <section className="ProductsList py-8">
      {isLoading && !products ? (
        <div className="mx-auto mt-8 w-fit font-semibold">{'Загрузка...'}</div>
      ) : products && products.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {map(products, (product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      ) : (
        <div className="mx-auto mt-8 w-fit font-semibold">
          {'Товары не найдены'}
        </div>
      )}
    </section>
  );
};

export default ProductsList;
