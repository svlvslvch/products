import axios from 'axios';
import useSWR from 'swr';

import { getBaseUrl } from '@config/api.config';

import { IProduct } from '@shared/types/product/product.types';

export const useGetProducts = (initialData: IProduct[], limit = 16) => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data, error, isLoading } = useSWR<IProduct[]>(
    getBaseUrl(`/products?limit=${limit}`),
    fetcher,
    { fallbackData: initialData }
  );

  return {
    products: data,
    isLoading,
    isError: error,
  };
};
