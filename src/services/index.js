export const normalizeRequest = ({ items, value_from, code_from }) => {
  return [...items].map((val) => {
    return {
      code_from,
      value_from: value_from.toFixed(2),
      code_to: val.code,
    }
  })
}

export const normalizeResponse = (items) => {
  return [...items].map(val => {
    return {
      code: val.code_to,
      value: val.value_to.toFixed(2)
    }
  })
}
