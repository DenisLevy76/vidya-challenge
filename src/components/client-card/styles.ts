import styled from 'styled-components'

export const ClientsCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  padding: 1rem;

  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.colors.white};

  & .about {
    text-align: left;
    & > h3 {
      color: ${({ theme }) => theme.colors.title};
      font-weight: bold;
      font-size: 0.75rem;
    }

    & > span {
      color: ${({ theme }) => theme.colors.textMuted};
      font-size: 0.75rem;
    }
  }

  & .price {
    color: ${({ theme }) => theme.colors.title};
    font-weight: bold;
    font-size: 0.875rem;
  }
`
