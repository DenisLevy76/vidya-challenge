import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const DialogOverlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.59);
  position: fixed;
  inset: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const DialogContent = styled(Dialog.Content)`
  width: 90vw;
  max-width: 1366px;

  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 0.5rem;
`

export const DialogHeader = styled.header`
  padding: 1rem 1.375rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey100};
`

export const DialogFooter = styled.footer`
  padding: 0.625rem 1.375rem 0.875rem 1.375rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: 1px solid ${({ theme }) => theme.colors.grey100};
`

export const DialogTitle = styled(Dialog.Title)`
  font-size: 0.875rem;
  font-weight: 900;
`
