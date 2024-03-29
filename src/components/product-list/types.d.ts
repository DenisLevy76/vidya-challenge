export interface ProductListProps {
  onValueChange?: (value: number) => void
  name: string
  id: string
  image: string
  price: number
  quantity?: number
}
