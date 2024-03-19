import styled from 'styled-components'

const Container = styled.div`
  color: ${(props) => props.theme.colors.primary};
`

export const App: React.FC = () => {
  return (
    <>
      <Container>
        <h1>teste</h1>
      </Container>
    </>
  )
}
