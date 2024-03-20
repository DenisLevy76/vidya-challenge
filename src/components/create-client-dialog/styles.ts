import styled from 'styled-components'

export const CreateClientDialogBody = styled.div`
  padding: 1rem;

  form {
    display: grid;
    gap: 1rem;

    grid-template-columns: repeat(1, 1fr);

    @media (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`