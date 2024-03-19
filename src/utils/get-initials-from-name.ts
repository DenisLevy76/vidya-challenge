export const getInitial = (name: string): string => {
  const chunks = name.trim().split(' ')
  const [firstName, lastName] = [chunks[0], chunks[chunks.length - 1]]

  return `${firstName[0]}${lastName ? lastName[0] : ''}`
}
