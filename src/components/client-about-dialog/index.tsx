import { useSelector } from 'react-redux'
import { RootState } from '../../states/store'
import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'
import {
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from '../dialog'
import { IconButton } from '../icon-button'
import { XIcon } from '../icons/x-icon'
import { ClientAboutDialogBody } from './styles'

export const ClientAboutDialog: React.FC<{
  CNPJ: string
  children: ReactNode
}> = ({ CNPJ, children }) => {
  const client = useSelector((state: RootState) =>
    state.clients.clients.find((client) => client.CNPJ === CNPJ)
  )
  return (
    <Dialog.Root>
      <Dialog.DialogTrigger asChild>
        <IconButton full>{children}</IconButton>
      </Dialog.DialogTrigger>
      <Dialog.Portal>
        <DialogOverlay>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{client?.name}</DialogTitle>
              <Dialog.Close asChild>
                <IconButton>
                  <XIcon />
                </IconButton>
              </Dialog.Close>
            </DialogHeader>
            <ClientAboutDialogBody>
              <label>
                CNPJ
                <p>{client?.CNPJ}</p>
              </label>
              <label>
                Telefone
                <p>{client?.phone}</p>
              </label>
              <label>
                CEP
                <p>{client?.CEP}</p>
              </label>
              <label>
                Estado
                <p>{client?.state}</p>
              </label>
              <label>
                Cidade
                <p>{client?.city}</p>
              </label>
              <label>
                Bairro
                <p>{client?.neighborhood}</p>
              </label>
              <label>
                Número
                <p>{client?.number}</p>
              </label>
              <label>
                Endereço
                <p>{client?.address}</p>
              </label>
            </ClientAboutDialogBody>
          </DialogContent>
        </DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
