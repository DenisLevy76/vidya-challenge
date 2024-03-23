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
import { DialogBody, DialogFooterContent } from './styles'
import { Input } from '../input'
import { SearchIcon } from '../icons/search'
import { formatToCurrency } from '../../utils/convert-to-currency'
import { ProductList } from '../product-list'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../states/store'
import { useCallback, useState } from 'react'
import { IProduct } from '../../@types/product'
import { Cart, CreateOrderInputForm } from './types'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { createOrder } from '../../states/ordersSlice'
import { Select } from '../select'
import { useSearch } from '../../hooks/useSearch'
import { PlusIcon } from '../icons/plus-icon'

const schema = yup.object({
  client: yup.string().required('Este campo é obrigatório.'),
})

export const CreateOrderDialog: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateOrderInputForm>({
    resolver: yupResolver(schema),
  })
  const clients = useSelector((state: RootState) => state.clients.clients)
  const dispatch = useDispatch()

  const products = useSelector((state: RootState) => state.products.products)
  const { filteredList, setFilter } = useSearch<IProduct>(products)

  const onValueChange = useCallback(
    (product: IProduct, quantity: number) =>
      setCart((prev) => {
        const item = prev.findIndex((item) => item.product.id === product.id)

        if (item >= 0) {
          prev[item].quantity = quantity
        } else {
          prev.push({
            product,
            quantity,
          })
        }

        return [...prev]
      }),
    []
  )

  const [cart, setCart] = useState<Cart>([])
  const finalCart = cart.filter((item) => item.quantity !== 0)

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const totalPrice = finalCart.reduce((acc, curr) => {
    return (acc += curr.product.price * curr.quantity)
  }, 0)

  const onSubmit = (data: CreateOrderInputForm) => {
    const clientIndex = clients.findIndex(
      (client) => client.CNPJ === data.client
    )

    if (clientIndex >= 0) {
      dispatch(
        createOrder({
          client: clients[clientIndex],
          cart: finalCart,
          totalPrice,
          nItems: finalCart.reduce((acc, curr) => {
            return (acc += curr.quantity)
          }, 0),
        })
      )

      setIsOpen(false)
      setCart([])
      reset()
    }
  }

  return (
    <Dialog.Root
      onOpenChange={setIsOpen}
      open={isOpen}
    >
      <Dialog.Trigger asChild>
        <Button data-testid='create-order-dialog-trigger'>
          <PlusIcon /> Novo Pedido
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Cadastro de pedidos</DialogTitle>
              <Dialog.Close asChild>
                <IconButton>
                  <XIcon />
                </IconButton>
              </Dialog.Close>
            </DialogHeader>
            <DialogBody>
              <form
                id='create-order'
                onSubmit={handleSubmit(onSubmit)}
              >
                <Select
                  {...register('client')}
                  placeholder='Selecionar cliente'
                  helperText={errors.client?.message}
                >
                  {clients.map((client) => (
                    <option
                      value={client.CNPJ}
                      key={client.CNPJ}
                    >
                      {client.name}
                    </option>
                  ))}
                </Select>

                <strong>Produtos</strong>
                <Input
                  placeholder='Pesquisar produtos'
                  onChange={(event) => setFilter(event.target.value)}
                  suffix={
                    <IconButton aria-label='Pesquisar produtos'>
                      <SearchIcon />
                    </IconButton>
                  }
                />
              </form>

              <ul>
                {filteredList.map((product) => (
                  <li key={product.id}>
                    <ProductList
                      id={product.id}
                      image={product.image}
                      name={product.name}
                      price={product.price}
                      onValueChange={(quantity) =>
                        onValueChange(product, quantity)
                      }
                    />
                  </li>
                ))}
              </ul>
            </DialogBody>
            <DialogFooter>
              <DialogFooterContent>
                <p>
                  Total: <strong>{formatToCurrency(totalPrice)}</strong>
                </p>
              </DialogFooterContent>
              <Button
                type='submit'
                form='create-order'
                size='small'
                disabled={totalPrice <= 0}
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
