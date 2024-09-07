import axios from 'axios';
import useSWRMutation from 'swr/mutation';

export const useDeleteProduct = (id: number) => {
  const deleteFetcher = (url: string) =>
    axios.delete(url).then((res) => res.data);

  const { trigger, isMutating } = useSWRMutation(
    `https://fakestoreapi.com/products/${id ? id : ''}`,
    deleteFetcher
  );

  return {
    trigger,
    isMutating,
  };
};
