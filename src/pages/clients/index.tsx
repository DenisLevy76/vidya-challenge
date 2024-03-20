import { ClientCard } from '../../components/client-card'
import { CreateClientDialog } from '../../components/create-client-dialog'
import { Header } from '../../components/header'
import { IconButton } from '../../components/icon-button'
import { SearchIcon } from '../../components/icons/search'
import { Input } from '../../components/input'
import { Container } from '../../styles/container'
import { ClientsList, Wrapper } from './styles'

import { useSelector } from 'react-redux'
import { RootState } from '../../states/store'

export const Clients: React.FC = () => {
  const clients = useSelector((state: RootState) => state.clients.clients)

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
          {clients?.map((client) => (
            <li key={client.CNPJ}>
              <ClientCard
                name={client.name}
                CNPJ={client.CNPJ}
              />
            </li>
          ))}
        </ClientsList>
      </Container>
    </main>
  )
}
