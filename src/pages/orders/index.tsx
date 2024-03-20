import { CreateOrderDialog } from '../../components/create-order-dialog'
import { Header } from '../../components/header'
import { IconButton } from '../../components/icon-button'
import { SearchIcon } from '../../components/icons/search'
import { Input } from '../../components/input'
import { OrderCard } from '../../components/order-card'
import { Container } from '../../styles/container'
import { OrdersList, Wrapper } from './styles'

export const Orders: React.FC = () => {
  return (
    <main>
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
          <li>
            <OrderCard />
          </li>
          <li>
            <OrderCard />
          </li>
          <li>
            <OrderCard />
          </li>
          <li>
            <OrderCard />
          </li>
        </OrdersList>
      </Container>
    </main>
  )
}
