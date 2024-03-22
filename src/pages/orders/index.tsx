import { useSelector } from 'react-redux'
import { CreateOrderDialog } from '../../components/create-order-dialog'
import { Header } from '../../components/header'
import { IconButton } from '../../components/icon-button'
import { SearchIcon } from '../../components/icons/search'
import { Input } from '../../components/input'
import { OrderCard } from '../../components/order-card'
import { Container } from '../../styles/container'
import { OrdersList, Wrapper } from './styles'
import { RootState } from '../../states/store'
import { useState } from 'react'
import { IClient } from '../../@types/client'

export const Orders: React.FC = () => {
  const orders = useSelector((state: RootState) => state.orders.orders)

  const [filter, setFilter] = useState<string>('')
  const filteredProducts = orders.filter((order) =>
    Object.keys(order.client).some(
      (key) =>
        order.client[key as keyof IClient]
          .toString()
          .toLowerCase()
          .indexOf(filter.toLocaleLowerCase().trim()) !== -1
    )
  )

  return (
    <>
      <Header />

      <Container>
        <Wrapper>
          <form action=''>
            <Input
              placeholder='Pesquisar'
              onChange={(event) => setFilter(event.target.value)}
              suffix={
                <IconButton aria-label='Pesquisar'>
                  <SearchIcon />
                </IconButton>
              }
            />
          </form>
          <CreateOrderDialog />
        </Wrapper>

        <OrdersList>
          {filteredProducts.map((order) => (
            <li>
              <OrderCard
                nQty={order.nItems}
                name={order.client.name}
                totalPrice={order.totalPrice}
              />
            </li>
          ))}
        </OrdersList>
      </Container>
    </>
  )
}
