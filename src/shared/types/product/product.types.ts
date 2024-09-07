export interface IProduct {
  /**
   * Id товара.
   */
  id: number;
  /**
   * Название товара.
   */
  title: string;
  /**
   * Цена товара.
   */
  price: number;
  /**
   * Описание товара.
   */
  description: string;
  /**
   * Категория товара.
   */
  category: string;
  /**
   * Изображение товара.
   */
  image: string;
  /**
   * Рейтинг товара.
   */
  rating: {
    /**
     * Значение рейтинга.
     */
    rate: number;
    /**
     * Кол-во оценок.
     */
    count: number;
  };
}

export interface IProductForm {
  /**
   * Id товара.
   */
  id?: number;
  /**
   * Название товара.
   */
  title?: string;
  /**
   * Цена товара.
   */
  price?: number;
  /**
   * Описание товара.
   */
  description?: string;
  /**
   * Категория товара.
   */
  category?: string;
  /**
   * Изображение товара.
   */
  image?: string;
}
