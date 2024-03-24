export const CNPJValidation = (cnpj: string): boolean => {
  cnpj = cnpj.replace(/[^\d]+/g, '')

  if (cnpj.length != 14) return false

  let totalSize: number = cnpj.length - 2
  let cnpjWithoutDigits: string = cnpj.substring(0, totalSize)
  const verificationDigits: string = cnpj.substring(totalSize)
  let sum: number = 0
  let pos: number = totalSize - 7
  for (let i = totalSize; i >= 1; i--) {
    sum += parseInt(cnpjWithoutDigits.charAt(totalSize - i)) * pos--
    if (pos < 2) pos = 9
  }
  let result: number = sum % 11 < 2 ? 0 : 11 - (sum % 11)
  if (result != parseInt(verificationDigits.charAt(0))) return false

  totalSize = totalSize + 1
  cnpjWithoutDigits = cnpj.substring(0, totalSize)
  sum = 0
  pos = totalSize - 7
  for (let i = totalSize; i >= 1; i--) {
    sum += parseInt(cnpjWithoutDigits.charAt(totalSize - i)) * pos--
    if (pos < 2) pos = 9
  }

  result = sum % 11 < 2 ? 0 : 11 - (sum % 11)
  if (result != parseInt(verificationDigits.charAt(1))) return false

  return true
}
