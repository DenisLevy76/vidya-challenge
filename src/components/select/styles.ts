import styled from 'styled-components'
import { pxToRem } from '../../utils/pxToRem'
import { Input } from '../input'

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;

  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
      color: ${({ theme }) => theme.colors.title};
      font-size: 0.75rem;
      font-weight: bold;
    }

    select {
      border-radius: 0.5rem;
      border: 1px solid ${({ theme }) => theme.colors.textMuted};
      overflow: hidden;
      padding: 0.875rem;
      font-size: 1rem;
    }
  }

  span {
    font-size: ${pxToRem(12)};
    color: ${({ theme }) => theme.colors.red};
  }
`

export const StyledSelect = styled(Input)
