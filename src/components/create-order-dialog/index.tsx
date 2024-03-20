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
import { DialogBody, DialogFooterContent } from './styles'
import { Input } from '../input'
import { SearchIcon } from '../icons/search'
import { formatToCurrency } from '../../utils/convert-to-currency'

export const CreateOrderDialog: React.FC = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button>+ Novo Pedido</Button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <DialogOverlay>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cadastro de pedidos</DialogTitle>
            <Dialog.Close asChild>
              <IconButton>
                <XIcon />
              </IconButton>
            </Dialog.Close>
          </DialogHeader>
          <DialogBody>
            <form>
              <select
                name='clientSelect'
                id='clientSelect'
              >
                <option value=''>Selecionar cliente</option>
              </select>

              <strong>Produtos</strong>

              <Input
                placeholder='Pesquisar produtos'
                suffix={
                  <IconButton aria-label='Pesquisar produtos'>
                    <SearchIcon />
                  </IconButton>
                }
              />
            </form>
          </DialogBody>
          <DialogFooter>
            <DialogFooterContent>
              <p>
                Total: <strong>{formatToCurrency(49.99)}</strong>
              </p>
            </DialogFooterContent>
            <Button size='small'>Salvar</Button>
          </DialogFooter>
        </DialogContent>
      </DialogOverlay>
    </Dialog.Portal>
  </Dialog.Root>
)
