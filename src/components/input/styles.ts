import styled from 'styled-components'

export const InputWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;

  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;
  padding: 0.875rem;

  input {
    border: none;
    height: 100%;
    width: 100%;
    font-size: 1rem;
    outline: none;
    background-color: transparent;
  }

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`
