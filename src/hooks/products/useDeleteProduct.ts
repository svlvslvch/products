import axios from 'axios';
import useSWRMutation from 'swr/mutation';
import filter from 'lodash/filter';

import { getBaseUrl } from '@config/api.config';

import {
  getLocalStore,
  setLocalStore,
} from '../../utils/localStorage/localStorage';

export const useDeleteProduct = (id: number) => {
  const products = getLocalStore('products');

  const deleteFetcher = (url: string) => {
    // TODO: костыль
    if (products) {
      setLocalStore(
        'products',
        filter(products, (product) => {
          return product.id !== id;
        })
      );

      return axios.delete(url).then((res) => res.data);
    }
  };

  const { trigger, isMutating } = useSWRMutation(
    getBaseUrl(`/products/${id ? id : ''}`),
    deleteFetcher
  );

  return {
    trigger,
    isMutating,
  };
};
