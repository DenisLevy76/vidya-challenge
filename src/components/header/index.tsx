import { CartIcon } from '../icons/cart-icon'
import { ListIcon } from '../icons/list-icon'
import { PeoplesIcon } from '../icons/people-icon'
import { HeaderWrapper } from './styles'

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <a href='/'>
        <PeoplesIcon /> Clientes
      </a>
      <a href='/orders'>
        <CartIcon /> Pedidos
      </a>
      <a href='/products'>
        <ListIcon />
        Produtos
      </a>
    </HeaderWrapper>
  )
}
