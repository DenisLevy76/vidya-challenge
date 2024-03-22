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
import { IClient } from '../../@types/client'
import { useSearch } from '../../hooks/useSearch'

export const Clients: React.FC = () => {
  const clients = useSelector((state: RootState) => state.clients.clients)
  const { filteredList, setFilter } = useSearch<IClient>(clients)

  return (
    <>
      <Header />

      <Container>
        <Wrapper>
          <Input
            placeholder='Pesquisar'
            onChange={(event) => setFilter(event.target.value)}
            suffix={
              <IconButton aria-label='Pesquisar'>
                <SearchIcon />
              </IconButton>
            }
          />
          <CreateClientDialog />
        </Wrapper>

        <ClientsList>
          {filteredList?.map((client) => (
            <li key={client.CNPJ}>
              <ClientCard
                name={client.name}
                CNPJ={client.CNPJ}
              />
            </li>
          ))}
        </ClientsList>
      </Container>
    </>
  )
}
