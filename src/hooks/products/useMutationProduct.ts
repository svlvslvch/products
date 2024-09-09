import axios from 'axios';
import useSWRMutation from 'swr/mutation';
import map from 'lodash/map';

import { getLocalStore, setLocalStore } from '@utils/localStorage/localStorage';

import { getBaseUrl } from '@config/api.config';

import { IProductForm } from '@shared/types/product/product.types';

export const useMutationProduct = (id?: number) => {
  const products = getLocalStore('products');

  const postFetcher = (url: string, { arg }: { arg: IProductForm }) => {
    // TODO: костыль
    setLocalStore('products', [
      ...products,
      {
        ...arg,
        id: products[products.length - 1].id + 1,
        rating: { rate: 0, count: 0 },
        image:
          'https://img.freepik.com/free-photo/deliveryman-with-cap-holding-cardboard-box_1156-612.jpg?t=st=1725839836~exp=1725843436~hmac=e2c4402c914fa97eb24c20e97d006a7b9b07a6eca741b4b50e37ceb61198d868&w=1380',
      },
    ]);

    return axios.post(url, arg).then((res) => res.data);
  };

  const patchFetcher = (url: string, { arg }: { arg: IProductForm }) => {
    // TODO: костыль
    const updateProducts = map(products, (product) => {
      if (product.id === id) {
        return { ...product, ...arg };
      }
      return product;
    });
    setLocalStore('products', updateProducts);

    return axios.patch(url, arg).then((res) => res.data);
  };

  const { trigger, isMutating } = useSWRMutation(
    getBaseUrl(`/products/${id ? id : ''}`),
    id ? patchFetcher : postFetcher
  );

  return {
    trigger,
    isMutating,
  };
};
