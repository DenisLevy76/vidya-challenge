import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (min-width: 500px) {
    flex-direction: row;
  }
`

export const ProductList = styled.ul`
  display: grid;
  gap: 1rem;
  margin-top: 2rem;

  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
