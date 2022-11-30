export const mapWizardState = (wizardState) => {
  const state = {}
  Object.keys(wizardState).forEach(item => {
    if (typeof wizardState[item] === 'object') {
      state[item] = wizardState[item][item]
    } else {
      state[item] = wizardState[item]
    }
  })

  return state
}

export const calculateResult = (actualFlags) => {
  const flags = { green: [], orange: [], red: [] }
  const values = { green: 0, orange: 0, red: 0 }

  const validateColor = (item, color) => {
    if (actualFlags[item] === color) {
      flags[color].push(item)
      values[color] = values[color] + 1
    }
  }

  Object.keys(actualFlags || {}).forEach(item => {
    validateColor(item, 'green')
    validateColor(item, 'orange')
    validateColor(item, 'red')
  })

  const total = Object.keys(actualFlags || {}).length
  values.green = (values.green * 100 / total).toFixed(2)
  values.orange = (values.orange * 100 / total).toFixed(2)
  values.red = (values.red * 100 / total).toFixed(2)

  const newResult = {
    flags,
    values,
  }

  return newResult
}
