export const normalizeRequest = ({ items, value_from, code_from }) => {
  return [...items].map((val) => {
    return {
      code_from,
      value_from: value_from,
      code_to: val.code,
    }
  })
}

export const normalizeResponse = (items) => {
  return [...items].map((val) => {
    return {
      code: val.code_to,
      value: val.value_to,
    }
  })
}

export const parserNumber = (val) => {
  if (!val) return 0
  return Number.parseFloat(
    val.replace(/\$\s?|(\.*)/g, '').replace(/(\,{1})/g, '.'),
  ).toFixed(2)
}

export const formatterNumber = (val) => {
  if (!val) return 0
  return `${val}`
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    .replace(/\.(?=\d{0,2}$)/g, '.')
}
