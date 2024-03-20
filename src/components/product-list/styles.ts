import styled from 'styled-components'

export const ProductListWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  max-width: 340px;

  border: 1px solid ${({ theme }) => theme.colors.textMuted};
  border-radius: 0.5rem;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    padding: 0.75rem;

    h3 {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.title};
      font-size: 0.75rem;
      margin-bottom: 0.3rem;
    }

    span {
      color: ${({ theme }) => theme.colors.textMuted};
      font-size: 0.75rem;
      margin-bottom: auto;
    }
  }

  .counter {
    display: flex;
    align-items: center;
    gap: 1rem;

    button {
      background-color: ${({ theme }) => theme.colors.primary}20;
      border-radius: 50%;
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  .price {
    display: flex;
    align-items: end;
    margin-left: auto;
    padding: 0.75rem;

    color: ${({ theme }) => theme.colors.title};
    font-weight: 900;
  }
`
