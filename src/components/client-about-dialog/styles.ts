import styled from 'styled-components'

export const ClientAboutDialogBody = styled.main`
  padding: 1rem;

  display: grid;
  flex-wrap: wrap;
  gap: 1rem;
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

  label {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.title};

    p {
      color: ${({ theme }) => theme.colors.textMuted};
      margin-top: 0.5rem;
    }
  }
`
