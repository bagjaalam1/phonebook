var models = require("../models/index");

const resolvers = {
  getContacts: async () => {
    try {
      const data = await models.Contact.findAll();
      return data;
    } catch (e) {
      return console.error(e);
    }
  },
  addContact: async ({ input }) => {
    try {
      const { name, phone } = input;
      const data = await models.Contact.create({ name, phone });
      return data;
    } catch (e) {
      return console.error(e);
    }
  },
  updateContact: async ({ id, input }) => {
    try {
      const { name, phone } = input;
      const [_, { dataValues }] = await models.Contact.update(
        { name, phone },
        { where: { id }, returning: true, plain: true }
      );
      return dataValues;
    } catch (e) {
      return console.error(e);
    }
  },
  deleteContact: async ({id}) => {
    try {
      await models.Contact.destroy({ where: { id } });
      return true
    } catch (e) {
      return console.error(e)
    }
  },
};

module.exports = resolvers;