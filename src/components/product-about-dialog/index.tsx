import * as Dialog from '@radix-ui/react-dialog'
import {
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from '../dialog'
import { IconButton } from '../icon-button'
import { XIcon } from '../icons/x-icon'
import { ReactNode } from 'react'
import { ProductAboutArticle } from './styles'
import { IProduct } from '../../@types/product'
import { formatToCurrency } from '../../utils/convert-to-currency'

export const ProductAbout: React.FC<{
  children: ReactNode
  product: IProduct
}> = ({ children, product }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <IconButton data-testid='product-about-dialog-trigger'>
          {children}
        </IconButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Detalhes do produto</DialogTitle>
              <Dialog.Close asChild>
                <IconButton>
                  <XIcon />
                </IconButton>
              </Dialog.Close>
            </DialogHeader>
            <ProductAboutArticle>
              <img
                src={product.image}
                data-testid='product-image'
                alt=''
              />

              <div className='article-body'>
                <h2>{product.name}</h2>
                <strong data-testid='product-price'>
                  {formatToCurrency(product.price)}
                </strong>
                <p>{product.description}</p>
              </div>
            </ProductAboutArticle>
          </DialogContent>
        </DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
