import styled from 'styled-components'
import { InputLabel, InputWrapper } from '../input/styles'
import { pxToRem } from '../../utils/pxToRem'

export const TextareaLabel = styled(InputLabel)``
export const TextareaWrapper = styled(InputWrapper)`
  textarea {
    min-height: ${pxToRem(90)};
    resize: none;
    width: 100%;
    border: none;
    outline: none;
  }
`
