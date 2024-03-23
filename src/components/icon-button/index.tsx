import styled, { css } from 'styled-components'

export const FullSize = css`
  width: 100%;
`

export const IconButton = styled.button<{ full?: boolean }>`
  border: none;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ full }) => full && FullSize}

  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    scale: 1.01;
  }

  &:active {
    scale: 0.9;
  }
`
