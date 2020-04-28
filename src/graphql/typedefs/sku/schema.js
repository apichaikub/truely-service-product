import { gql } from 'apollo-server-express'

export default gql`
    type Sku {
      skuId: String!,
      isAvailable: Boolean!,
      code: String,
      attributes: [AttributeType!],
      price: Float,
      inStock: Float,
      discountType: DiscountEnum,
      discountAmount: Float,
      imageSmall: String,
      imageMedium: String,
      imageLarge: String,
      createdAt: String,
      updatedAt: String,
      productId: String!,
    }

    type AttributeType {
      name: String!,
      option: String!,
    }

    type SkuCreateResponse {
      skus: [Sku!],
    }

    input AttributeInput {
      name: String!,
      option: String!,
    }

    input SkuCreateInput {
      isAvailable: Boolean,
      code: String,
      attributes: [AttributeInput!],
      price: Float,
      inStock: Float,
      discountType: DiscountEnum,
      discountAmount: Float,
      imageSmall: String,
      imageMedium: String,
      imageLarge: String,
      productId: String,
    }

    input SkuUpdateInput {
      skuId: String!,
      isAvailable: Boolean,
      code: String,
      attributes: [AttributeInput!],
      price: Float,
      inStock: Float,
      discountType: DiscountEnum,
      discountAmount: Float,
      imageSmall: String,
      imageMedium: String,
      imageLarge: String,
    }

    enum DiscountEnum {
      PERCENTAGE
      CURRENTCY
    }
`
