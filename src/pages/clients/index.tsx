import { ClientCard } from '../../components/client-card'
import { CreateClientDialog } from '../../components/create-client-dialog'
import { Header } from '../../components/header'
import { IconButton } from '../../components/icon-button'
import { SearchIcon } from '../../components/icons/search'
import { Input } from '../../components/input'
import { Container } from '../../styles/container'
import { ClientsList, Wrapper } from './styles'

export const Clients: React.FC = () => {
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
          <CreateClientDialog />
        </Wrapper>

        <ClientsList>
          <li>
            <ClientCard />
          </li>
          <li>
            <ClientCard />
          </li>
          <li>
            <ClientCard />
          </li>
          <li>
            <ClientCard />
          </li>
        </ClientsList>
      </Container>
    </main>
  )
}
