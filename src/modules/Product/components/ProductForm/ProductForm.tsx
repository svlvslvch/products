'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import find from 'lodash/find';

import { getLocalStore } from '@utils/localStorage/localStorage';

import { useMutationProduct } from '@hooks/products/useMutationProduct';

import ProductDeleteModal from '@components/Modals/ProductDeleteModal/ProductDeleteModal';

import { Button } from '@ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@ui/form';
import { Input } from '@ui/input';
import { Textarea } from '@ui/textarea';

import { IProductForm } from '@shared/types/product/product.types';

import { IProductFormProps } from './ProductForm.props';

const ProductForm: FC<IProductFormProps> = (props) => {
  const { description = '', id, price, title = '' } = props;

  // TODO: Костыль
  const product = find(getLocalStore('products'), (p) => {
    return p.id === id;
  });

  const { push } = useRouter();

  const initValues = {
    description: product?.description || description,
    price: product?.price || price,
    title: product?.title || title,
  };

  const { trigger, isMutating } = useMutationProduct(id);

  const form = useForm<IProductForm>({
    defaultValues: initValues,
  });

  const onSubmit: SubmitHandler<IProductForm> = async (formData) => {
    const sendData = formData;

    try {
      if (id) {
        sendData.id = id;

        await trigger(sendData);
      } else {
        await trigger(sendData);
      }

      push(`/products/${id ? id : ''}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="EditProduct relative mx-auto max-w-[1000px] rounded-lg bg-slate-100 p-4 md:p-6">
      <Form {...form}>
        <form
          // eslint-disable-next-line react/jsx-handler-names
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <FormField
            control={form.control}
            name="title"
            rules={{
              required: {
                message: 'Введите название',
                value: true,
              },
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{'Название товара'}</FormLabel>
                <FormControl>
                  <Input placeholder="Название" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            rules={{
              required: {
                message: 'Введите описание товара',
                value: true,
              },
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{'Описание товара'}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Описание"
                    className="h-36 resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            rules={{
              required: {
                message: 'Введите цену товара',
                value: true,
              },
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{'Цена товара'}</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Цена" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-2">
            <Button
              type="button"
              onClick={() => push(`/products/${id ? id : ''}`)}
            >
              {'Отмена'}
            </Button>

            <Button disabled={isMutating} type="submit">
              {id ? 'Сохранить' : 'Добавить'}
            </Button>
          </div>
        </form>
      </Form>

      {id && (
        <ProductDeleteModal
          classNameBtn="absolute bottom-6 right-6"
          productId={id}
          productName={title}
          onApproved={() => push('/products')}
        />
      )}
    </div>
  );
};

export default ProductForm;
