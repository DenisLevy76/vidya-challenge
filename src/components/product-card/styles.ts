import styled from 'styled-components'
import { pxToRem } from '../../utils/pxToRem'

export const ProductCardWrapper = styled.article`
  border-radius: 1rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.white};
  text-align: left;

  img {
    width: 100%;
    aspect-ratio: 125/81;
    object-fit: contain;
  }

  .about {
    padding: ${pxToRem(9)} ${pxToRem(12)};

    h2 {
      margin-top: 1.375rem;
      margin-bottom: 0.25rem;
      font-size: 0.75rem;
    }

    strong {
      font-weight: bold;
      font-size: 0.875rem;
    }
  }
`
