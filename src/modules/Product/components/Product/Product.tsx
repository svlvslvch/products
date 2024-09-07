'use client';

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useGetProduct } from '@hooks/products/useGetProduct';

import { Button } from '@ui/button';

import { IProductProps } from './Product.props';

const Product: FC<IProductProps> = (props) => {
  const { id, initialData } = props;

  const { product, isLoading } = useGetProduct(initialData, id);

  return (
    <>
      <div className="Product relative mx-auto max-w-[1000px] rounded-lg bg-slate-100 p-4 md:p-6">
        {isLoading && !product ? (
          <div className="flex w-full items-center justify-center">
            {'Загрузка...'}
          </div>
        ) : product ? (
          <div className="relative">
            <div className="flex flex-col justify-between gap-2 md:flex-row md:gap-8">
              <h1 className="text-xl font-bold md:text-3xl">{product.title}</h1>

              {/* TODO: для валют я бы завёл next-intl, так же для дат и интернационализации */}
              <div className="whitespace-nowrap text-xl font-bold md:text-3xl">{`${product.price} $`}</div>
            </div>

            <div className="mt-4 flex flex-col gap-6 md:mt-8 md:flex-row">
              <div className="relative aspect-square flex-1">
                <Image
                  src={product.image}
                  fill
                  className="object-cover"
                  alt={product.title}
                />
              </div>

              <div className="flex flex-col">
                <ul className="flex flex-col gap-3 font-medium md:w-96">
                  <li className="flex gap-2 rounded-md bg-slate-200 p-2 md:p-4">
                    <div className="w-32 text-gray-500">{'Рейтинг'}</div>
                    <div>
                      {product.rating.rate}
                      <span className="ml-2">{`(${product.rating.count} оценок)`}</span>
                    </div>
                  </li>

                  <li className="flex gap-2 rounded-md bg-slate-200 p-2 md:p-4">
                    <div className="w-32 text-gray-500">{'Категория'}</div>
                    <div>{product.category}</div>
                  </li>

                  <li className="flex gap-2 rounded-md bg-slate-200 p-2 md:p-4">
                    <div>{product.description}</div>
                  </li>
                </ul>

                <Link
                  href={`${id}/edit`}
                  className="mt-4 block w-full lg:mt-auto"
                >
                  <Button className="w-full" variant="outline">
                    {'Редактировать'}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div>{'Товар не найден'}</div>
        )}
      </div>
    </>
  );
};

export default Product;
