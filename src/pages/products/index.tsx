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
import { IProduct } from '../../@types/product'
import { useSearch } from '../../hooks/useSearch'

export const Products: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products)
  const { filteredList, setFilter } = useSearch<IProduct>(products)

  return (
    <>
      <Header />

      <main>
        <Container>
          <Wrapper>
            <Input
              placeholder='Pesquisar'
              onChange={(event) => setFilter(event.target.value)}
              suffix={
                <IconButton aria-label='Pesquisar'>
                  <SearchIcon />
                </IconButton>
              }
            />
            <CreateProductDialog />
          </Wrapper>
          <ProductList>
            {filteredList.map((product) => (
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
