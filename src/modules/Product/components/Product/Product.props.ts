import { IProduct } from '@shared/types/product/product.types';

export interface IProductProps {
  /**
   * Id товара.
   */
  id: number;
  /**
   * Данные товара, полученные на сервере.
   */
  initialData: IProduct;
}
