import styled from 'styled-components'

export const Button = styled.button<{ size?: 'default' | 'small' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ size = 'default' }) =>
    size === 'default' ? '10px 1.5rem' : '5px 1.5rem'};
  border: none;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: 0.875rem;

  transition: all 0.2s ease-in-out;

  &:not(:disabled):hover {
    filter: brightness(1.1);
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
