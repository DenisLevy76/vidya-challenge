import styled from 'styled-components'

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .label {
    font-weight: bold;
    font-size: 0.75rem;
  }

  .helper-text {
    color: ${({ theme }) => theme.colors.red};
  }
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.textMuted};
  overflow: hidden;
  padding: 0.875rem;

  input {
    border: none;
    height: 100%;
    width: 100%;
    font-size: 0.875rem;
    outline: none;
    background-color: transparent;
  }

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`
