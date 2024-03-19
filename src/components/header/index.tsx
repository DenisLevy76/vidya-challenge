import { NavLink } from 'react-router-dom'
import { CartIcon } from '../icons/cart-icon'
import { ListIcon } from '../icons/list-icon'
import { PeoplesIcon } from '../icons/people-icon'
import { HeaderWrapper } from './styles'

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>
              <PeoplesIcon /> Clientes
            </NavLink>
          </li>
          <li>
            <NavLink to='/orders'>
              <CartIcon /> Pedidos
            </NavLink>
          </li>
          <li>
            <NavLink to='/products'>
              <ListIcon />
              Produtos
            </NavLink>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  )
}
