export interface IProductDeleteModalProps {
  /**
   * Кастомный класс для кнопки открытия модалки.
   */
  classNameBtn?: string;
  /**
   * Id товара.
   */
  productId: number;
  /**
   * Название товара.
   */
  productName: string;
  /**
   * Колбэк на удаление товара.
   */
  onApproved?: () => void;
}
