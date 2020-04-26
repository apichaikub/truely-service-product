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

export {
  isNull,
  isArray,
  isObject,
  allkeysEqual,
}
