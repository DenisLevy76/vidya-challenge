import { CreateProductDialog } from '../../components/create-product-dialog'
import { Header } from '../../components/header'
import { IconButton } from '../../components/icon-button'
import { SearchIcon } from '../../components/icons/search'
import { Input } from '../../components/input'
import { ProductCard } from '../../components/product-card'
import { Container } from '../../styles/container'
import { ProductList, Wrapper } from './styles'

export const Products: React.FC = () => {
  return (
    <>
      <Header />

      <main>
        <Container>
          <Wrapper>
            <Input
              placeholder='Pesquisar'
              suffix={
                <IconButton aria-label='Pesquisar'>
                  <SearchIcon />
                </IconButton>
              }
            />
            <CreateProductDialog />
          </Wrapper>
          <ProductList>
            <li>
              <ProductCard />
            </li>
            <li>
              <ProductCard />
            </li>
            <li>
              <ProductCard />
            </li>
          </ProductList>
        </Container>
      </main>
    </>
  )
}
