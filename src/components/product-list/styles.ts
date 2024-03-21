import styled from 'styled-components'

export const ProductListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  border: 1px solid ${({ theme }) => theme.colors.textMuted};
  border-radius: 0.5rem;

  img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    align-items: center;
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

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .counter {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;

    button {
      background-color: ${({ theme }) => theme.colors.primary}20;
      border-radius: 50%;
      width: 1.5rem;
      height: 1.5rem;
    }

    input {
      width: auto;
      max-width: 30px;
      text-align: center;
      padding: 0;
      border: none;
    }
  }

  .price {
    text-align: left;
    padding: 0.75rem;

    color: ${({ theme }) => theme.colors.title};
    font-weight: 900;
  }

  @media (min-width: 450px) {
    flex-direction: row;

    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 0.5rem;
      aspect-ratio: 1/1;
    }

    .product-info {
      align-items: start;
    }

    .counter {
      margin-top: 0px;
    }

    .price {
      text-align: right;
    }
  }
`
