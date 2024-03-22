/* eslint-disable @typescript-eslint/no-explicit-any */
export const search = (filter: string, list: any[]) => {
  const filteredList = list.filter((item) =>
    Object.keys(item).some(
      (key) =>
        item[key as keyof any]
          .toString()
          .toLowerCase()
          .indexOf(filter.toLocaleLowerCase().trim()) !== -1
    )
  )

  return filteredList
}
