import styled from 'styled-components'
import { pxToRem } from '../../utils/pxToRem'

export const CreateProductDialogBody = styled.main`
  padding: ${pxToRem(12)} ${pxToRem(24)};
  padding-bottom: ${pxToRem(58)};

  display: flex;
  flex-direction: column;

  fieldset {
    display: flex;
    gap: ${pxToRem(32)};
    width: 100%;

    label {
      width: 100%;
    }

    margin-bottom: ${pxToRem(27)};
  }
`
