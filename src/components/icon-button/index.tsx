import styled from 'styled-components'

export const IconButton = styled.button`
  border: none;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    scale: 1.1;
  }

  &:active {
    scale: 0.9;
  }
`