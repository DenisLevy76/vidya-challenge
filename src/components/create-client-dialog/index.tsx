import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '../button'
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from '../dialog'
import { IconButton } from '../icon-button'
import { XIcon } from '../icons/x-icon'
import { CreateClientDialogBody } from './styles'
import { Input } from '../input'

export const CreateClientDialog: React.FC = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button>+ Novo Cliente</Button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <DialogOverlay>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cadastrar Cliente</DialogTitle>
            <Dialog.Close asChild>
              <IconButton>
                <XIcon />
              </IconButton>
            </Dialog.Close>
          </DialogHeader>
          <CreateClientDialogBody>
            <form>
              <Input label='Nome' />
              <Input label='CNPJ' />
              <Input label='Telefone' />
              <Input label='CEP' />
              <Input label='Estado' />
              <Input label='Cidade' />
              <Input label='Bairro' />
              <Input label='Endereço' />
              <Input label='Número' />
            </form>
          </CreateClientDialogBody>
          <DialogFooter>
            <Button
              size='small'
              style={{ marginLeft: 'auto' }}
            >
              Salvar
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogOverlay>
    </Dialog.Portal>
  </Dialog.Root>
)
