'use client';

import { FC, useReducer } from 'react';
import map from 'lodash/map';

import { getLocalStore, setLocalStore } from '@utils/localStorage/localStorage';

import { useGetProducts } from '@hooks/products/useGetProducts';

import { IProduct } from '@shared/types/product/product.types';

import ProductCard from '../ProductCard/ProductCard';

import { IProductsListProps } from './ProductsList.props';

const ProductsList: FC<IProductsListProps> = (props) => {
  const { initialData } = props;

  const { products: _apiProducts, isLoading } = useGetProducts(initialData);

  // TODO: костыль
  let _products = getLocalStore('products');
  if (_apiProducts && !_products?.length) {
    setLocalStore('products', _apiProducts);
  }
  _products = getLocalStore('products');

  const reducer = (_: IProduct[], action: { type: string }) => {
    switch (action.type) {
      case 'update products': {
        return getLocalStore('products');
      }
    }
  };

  const [products, dispatch] = useReducer(reducer, _products);

  const handleUpdateProducts = () => {
    dispatch({
      type: 'update products',
    });
  };

  return (
    <section className="ProductsList py-8">
      {isLoading ? (
        <div className="mx-auto mt-8 w-fit font-semibold">{'Загрузка...'}</div>
      ) : products && products.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {map(products, (product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                onUpdateProducts={handleUpdateProducts}
              />
            );
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
