export default {
  Query: {
    users: (parent, args, { models }) => {
      return models.User.findAll()
    },
  },
}
