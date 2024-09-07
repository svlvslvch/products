import { FC, useState } from 'react';
import { TrashIcon } from '@radix-ui/react-icons';

import { useDeleteProduct } from '@hooks/products/useDeleteProduct';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@ui/dialog';
import { Button } from '@ui/button';

import { IProductDeleteModalProps } from './ProductDeleteModal.props';

const ProductDeleteModal: FC<IProductDeleteModalProps> = (props) => {
  const { classNameBtn = '', productId, productName, onApproved } = props;

  const [open, setOpen] = useState(false);

  const { trigger } = useDeleteProduct(productId);

  const handleOpenChange = (flag: boolean) => {
    setOpen(flag);
  };

  const handleDelete = async () => {
    await trigger();

    handleOpenChange(false);
    onApproved?.();
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className={classNameBtn}>
          <TrashIcon className="h-7 w-7" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{'Удаление товара'}</DialogTitle>
          <DialogDescription>
            {`Вы уверены что хотите удалить - ${productName}`}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" className="mt-2 sm:mt-0">
              {'Нет, отменить'}
            </Button>
          </DialogClose>

          <Button type="button" variant="secondary" onClick={handleDelete}>
            {'Да, удалить'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDeleteModal;
