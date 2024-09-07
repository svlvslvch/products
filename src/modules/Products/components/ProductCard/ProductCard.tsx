'use client';

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ProductDeleteModal from '@components/Modals/ProductDeleteModal/ProductDeleteModal';

import { IProductCardProps } from './ProductCard.props';

const ProductCard: FC<IProductCardProps> = (props) => {
  const { product } = props;

  return (
    <div className="ProductCard group relative">
      <Link
        href={`/products/${product.id}`}
        className="flex h-full cursor-pointer flex-col rounded-lg border group-hover:shadow-blackRound"
      >
        <div className="relative block h-48 w-full overflow-hidden rounded-lg">
          <Image
            src={product.image}
            fill
            className="object-cover"
            alt={product.title}
          />
        </div>

        <div className="flex flex-col p-2">
          <h2 className="font-semibold group-hover:text-violet-600">
            {product.title}
          </h2>
        </div>

        {/* TODO: для валют я бы завёл next-intl, так же для дат и интернационализации */}
        <div className="mt-auto p-2 font-medium">{`${product.price} $`}</div>

        <div className="absolute bottom-6 right-6 flex h-6 w-6 items-center justify-center"></div>
      </Link>

      <ProductDeleteModal
        classNameBtn="absolute bottom-2 right-2"
        productId={product.id}
        productName={product.title}
      />
    </div>
  );
};

export default ProductCard;
