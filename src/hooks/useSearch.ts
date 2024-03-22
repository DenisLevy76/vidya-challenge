import { useState } from 'react'
import { search } from '../utils/search'

export const useSearch = <Type>(list: Type[]) => {
  const [filter, setFilter] = useState<string>('')
  const filteredList = search(filter, list)

  return {
    filteredList,
    setFilter,
  }
}
