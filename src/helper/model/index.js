import { RESPONSE_STATUS } from '../../utils/enum'
import { getAllKeysExcept } from '../../utils/lib'

const updateMany = async (model, data, options) => {
  const { primaryId } = options
  const results = []

  for (const input of data) {
    const values = getAllKeysExcept(input, [primaryId])
    const options = {
      where: {
        [primaryId]: input[primaryId],
      },
    }

    const response = await model.update(values, options)

    const result = response[0]?
      RESPONSE_STATUS.SUCCESS :
      RESPONSE_STATUS.FAIL

    results.push(result)
  }

  return results
}

export {
  updateMany,
}
