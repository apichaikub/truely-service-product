const isNull = (value) => {
  return value === null
}

const isArray = (value) => {
  return Array.isArray(value)
}

const isObject = (value) => {
  if (typeof value !== 'object' || isArray(value) || isNull(value)) {
    return false
  }

  return true
}

const allkeysEqual = (value, dataType) => {
  if (!isObject(value)) {
    return false
  }

  for (const key in value) {
    if (typeof value[key] !== dataType) {
      return false
    }
  }

  return true
}

const getAllKeysExcept = (values = {}, keys = []) => {
  if (!isObject(values) || !isArray(keys)) {
    return
  }

  return Object.keys(values).reduce((result, key) => {
    if (!keys.includes(key)) {
      result[key] = values[key]
    }

    return result
  }, {})
}

export {
  isNull,
  isArray,
  isObject,
  allkeysEqual,
  getAllKeysExcept,
}
