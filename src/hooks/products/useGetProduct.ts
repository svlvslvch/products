import axios from 'axios';
import useSWR from 'swr';

import { IProduct } from '@shared/types/product/product.types';

export const useGetProduct = (initialData: IProduct, id: number) => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data, error, isLoading } = useSWR<IProduct>(
    `https://fakestoreapi.com/products/${id}`,
    fetcher,
    { fallbackData: initialData }
  );

  return {
    product: data,
    isLoading,
    isError: error,
  };
};
