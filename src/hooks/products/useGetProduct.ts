import axios from 'axios';
import useSWR from 'swr';

import { getBaseUrl } from '@config/api.config';

import { IProduct } from '@shared/types/product/product.types';

export const useGetProduct = (initialData: IProduct, id: number) => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data, error, isLoading } = useSWR<IProduct>(
    getBaseUrl(`/products/${id}`),
    fetcher,
    { fallbackData: initialData }
  );

  return {
    product: data,
    isLoading,
    isError: error,
  };
};
