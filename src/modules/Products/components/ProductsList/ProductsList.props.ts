import { IProduct } from '@shared/types/product/product.types';

export interface IProductsListProps {
  /**
   * Данные товаров, полученные на сервере.
   */
  initialData: IProduct[];
}
