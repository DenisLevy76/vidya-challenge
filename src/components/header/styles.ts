import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  width: 100%;

  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }
`
