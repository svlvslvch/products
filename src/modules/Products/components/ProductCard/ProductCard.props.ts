import { IProduct } from '@shared/types/product/product.types';

export interface IProductCardProps {
  /**
   * Объект товара.
   */
  product: IProduct;
  /**
   * Колбэк обновления списка товаров при удалении айтема.
   */
  onUpdateProducts: () => void;
}
