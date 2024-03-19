import styled from 'styled-components'

export interface PhotoWrapperProps {
  variant?: 'primary' | 'secondary'
}

export const PhotoWrapper = styled.div<PhotoWrapperProps>`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: 1.125rem;

  pointer-events: none;
  user-select: none;

  background-color: ${({ variant = 'primary', theme }) =>
    variant === 'primary' ? theme.colors.primary : theme.colors.red};
`
