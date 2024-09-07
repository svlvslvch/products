import axios from 'axios';
import useSWRMutation from 'swr/mutation';

import { IProductForm } from '@shared/types/product/product.types';

export const useMutationProduct = (id?: number) => {
  const postFetcher = (url: string, { arg }: { arg: IProductForm }) =>
    axios.post(url, arg).then((res) => res.data);

  const patchFetcher = (url: string, { arg }: { arg: IProductForm }) =>
    axios.patch(url, arg).then((res) => res.data);

  const { trigger, isMutating } = useSWRMutation(
    `https://fakestoreapi.com/products/${id ? id : ''}`,
    id ? patchFetcher : postFetcher
  );

  return {
    trigger,
    isMutating,
  };
};
