import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  width: 100%;

  ul {
    display: flex;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  a.active {
    color: ${({ theme }) => theme.colors.primary};

    svg {
      stroke: ${({ theme }) => theme.colors.primary};
    }
  }
`
