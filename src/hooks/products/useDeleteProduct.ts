import axios from 'axios';
import useSWRMutation from 'swr/mutation';

import { getBaseUrl } from '@config/api.config';

export const useDeleteProduct = (id: number) => {
  const deleteFetcher = (url: string) =>
    axios.delete(url).then((res) => res.data);

  const { trigger, isMutating } = useSWRMutation(
    getBaseUrl(`/products/${id ? id : ''}`),
    deleteFetcher
  );

  return {
    trigger,
    isMutating,
  };
};
