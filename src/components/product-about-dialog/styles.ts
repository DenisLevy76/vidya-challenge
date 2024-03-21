import styled from 'styled-components'
import { pxToRem } from '../../utils/pxToRem'

export const ProductAboutArticle = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  flex-direction: column;
  padding: ${pxToRem(25)} ${pxToRem(15)};
  gap: ${pxToRem(36)};

  @media (min-width: 650px) {
    display: grid;
    grid-template-columns: 1fr 1.4fr;
  }

  img {
    aspect-ratio: 313/203;
    width: 100%;
    object-fit: cover;
    border-radius: ${pxToRem(7)};
  }

  div {
    h2 {
      font-weight: 900;
      font-size: ${pxToRem(18)};
      margin-bottom: ${pxToRem(8)};
    }

    strong {
      margin-bottom: ${pxToRem(24)};
      display: block;
    }

    p {
      color: ${({ theme }) => theme.colors.textMuted};
      font-size: ${pxToRem(12)};
    }
  }
`
