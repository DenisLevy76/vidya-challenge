import styled from 'styled-components'
import { Header } from './components/header'
import { Button } from './components/button'

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
      </Container>
    </>
  )
}
