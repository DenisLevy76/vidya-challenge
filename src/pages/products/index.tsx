import { useSelector } from 'react-redux'
import { CreateProductDialog } from '../../components/create-product-dialog'
import { Header } from '../../components/header'
import { IconButton } from '../../components/icon-button'
import { SearchIcon } from '../../components/icons/search'
import { Input } from '../../components/input'
import { ProductCard } from '../../components/product-card'
import { Container } from '../../styles/container'
import { ProductList, Wrapper } from './styles'
import { RootState } from '../../states/store'
import { ProductAbout } from '../../components/product-about-dialog'

export const Products: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products)
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
            {products.map((product) => (
              <li key={product.id}>
                <ProductAbout product={product}>
                  <ProductCard
                    image={product.image}
                    name={product.name}
                    price={product.price}
                  />
                </ProductAbout>
              </li>
            ))}
          </ProductList>
        </Container>
      </main>
    </>
  )
}
