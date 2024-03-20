import styled from 'styled-components'

export const DialogBody = styled.body`
  padding: 1.125rem 1.375rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1.375rem;

    select {
      padding: 0.875rem 1rem;
      border-radius: 0.5rem;
    }

    strong {
      font-weight: 900;
      font-size: 0.875rem;
    }
  }

  ul {
    margin-top: 1.375rem;
    display: flex;
    flex-wrap: wrap;
    grid-template-columns: repeat(1, 1fr);
    gap: 1.1875rem;
  }
`

export const DialogFooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: ${({ theme }) => theme.colors.green};
    font-size: 0.875rem;
    font-weight: bold;

    strong {
      font-size: 1rem;
      font-weight: 900;
      color: ${({ theme }) => theme.colors.title};
      margin-left: 0.4rem;
    }
  }
`
