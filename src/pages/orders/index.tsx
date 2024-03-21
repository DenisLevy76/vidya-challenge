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

export const Orders: React.FC = () => {
  const orders = useSelector((state: RootState) => state.orders.orders)
  return (
    <>
      <Header />

      <Container>
        <Wrapper>
          <form action=''>
            <Input
              placeholder='Pesquisar'
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
          {orders.map((order) => (
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
