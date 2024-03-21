import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '../button'
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from '../dialog'
import { IconButton } from '../icon-button'
import { XIcon } from '../icons/x-icon'

import { useState } from 'react'
import { CreateProductDialogBody } from './styles'
import { Input } from '../input'
import { Textarea } from '../Textarea'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { IProduct } from '../../@types/product'

const CreateProductFormSchema = yup.object({
  name: yup.string().required('Este campo é obrigatório.'),
  price: yup
    .number()
    .typeError('O preço tem que ser um número.')
    .positive('O preço tem que ser maior que zero')
    .required('Este campo é obrigatório.'),
  description: yup.string().required('Este campo é obrigatório.'),
  image: yup.string().required('Este campo é obrigatório.'),
})

export const CreateProductDialog: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProduct>({
    resolver: yupResolver(CreateProductFormSchema),
  })
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onSubmit = (data: IProduct) => {
    console.log(data)
  }

  return (
    <Dialog.Root
      onOpenChange={setIsOpen}
      open={isOpen}
    >
      <Dialog.Trigger asChild>
        <Button>+ Novo Produto</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Cadastrar Produto</DialogTitle>
              <Dialog.Close asChild>
                <IconButton>
                  <XIcon />
                </IconButton>
              </Dialog.Close>
            </DialogHeader>
            <CreateProductDialogBody>
              <form
                id='create-product'
                onSubmit={handleSubmit(onSubmit)}
              >
                <fieldset>
                  <Input
                    label='Nome'
                    {...register('name')}
                    helperText={errors.name?.message}
                  />
                  <Input
                    label='Preço'
                    placeholder='0,00'
                    type='number'
                    {...register('price')}
                    helperText={errors.price?.message}
                  />
                </fieldset>
                <Textarea
                  label='Descrição'
                  {...register('description')}
                  helperText={errors.description?.message}
                />

                <input
                  type='text'
                  {...register('image')}
                />
              </form>
            </CreateProductDialogBody>
            <DialogFooter>
              <Button
                size='small'
                type='submit'
                form='create-product'
                formNoValidate
                style={{ marginLeft: 'auto' }}
              >
                Salvar
              </Button>
            </DialogFooter>
          </DialogContent>
        </DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
