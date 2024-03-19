import styled from 'styled-components'
import { Header } from './components/header'
import { Button } from './components/button'
import { OrderCard } from './components/order-card'
import { Input } from './components/input'
import { IconButton } from './components/icon-button'
import { SearchIcon } from './components/icons/search'

const Container = styled.div`
  color: ${(props) => props.theme.colors.primary};
`

export const App: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <h1>teste</h1>

        <Button>
          <span>+</span> Salvar
        </Button>

        <OrderCard />

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
      </Container>
    </>
  )
}
