import styled, { css } from 'styled-components'
import { pxToRem } from '../../utils/pxToRem'

export interface DropContainerProps {
  isDragActive: boolean
  isDragReject: boolean
}

const dragActive = css`
  border-color: ${({ theme }) => theme.colors.primary};
`

const dragReject = css`
  border-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.red};
  opacity: 0.5;
`

export const DropContainer = styled.div<DropContainerProps>`
  border: 1px dashed ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  ${({ isDragActive }) => isDragActive && dragActive}
  ${({ isDragReject }) => isDragReject && dragReject}

  cursor: pointer;
  margin-top: ${pxToRem(37)};

  width: 100%;
  height: ${pxToRem(131)};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    background-color: ${({ theme }) => theme.colors.primary};
    padding: ${pxToRem(4)} ${pxToRem(8)};
    color: ${({ theme }) => theme.colors.white};
    border-radius: ${pxToRem(10)};

    display: flex;
    align-items: center;
    margin-bottom: ${pxToRem(12)};

    transition: height 0.2s ease-in-out;
  }
`

export const ImagePreview = styled.img`
  width: 20%;
  border-radius: 0.5rem;
  margin-top: 1rem;
`
