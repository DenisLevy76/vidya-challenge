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
import { useState } from 'react'
import { IClient } from '../../@types/client'

export const Clients: React.FC = () => {
  const [filter, setFilter] = useState<string>('')
  const clients = useSelector((state: RootState) => state.clients.clients)
  const filteredClients = clients.filter((client) =>
    Object.keys(client).some(
      (key) =>
        client[key as keyof IClient]
          .toString()
          .toLowerCase()
          .indexOf(filter) !== -1
    )
  )

  return (
    <>
      <Header />

      <Container>
        <Wrapper>
          <Input
            placeholder='Pesquisar'
            onChange={(event) => setFilter(event.target.value)}
            value={filter}
            suffix={
              <IconButton aria-label='Pesquisar'>
                <SearchIcon />
              </IconButton>
            }
          />
          <CreateClientDialog />
        </Wrapper>

        <ClientsList>
          {filteredClients?.map((client) => (
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
