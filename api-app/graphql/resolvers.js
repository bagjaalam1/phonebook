var models = require("../models/index");
const { Response } = require("../helpers/util");

const resolvers = {
  Query: {
    phonebook: async () => {
      try {
        const data = await models.Contact.findAll();
        return new Response(data);
      } catch (e) {
        return new Response(e, false);
      }
    },
  },
  Mutation: {
    addPhonebook: async (_, { name, phone }) => {
      try {
        const data = await models.Contact.create({ name, phone });
        return new Response(data);
      } catch (e) {
        return new Response(e, false);
      }
    },
    updatePhonebook: async (_, { id, name, phone }) => {
      try {
        const [_, [updatedData]] = await models.Contact.update(
          { name, phone },
          { where: { id }, returning: true, plain: true }
        );
        return new Response(updatedData);
      } catch (e) {
        return new Response(e, false);
      }
    },
    deletePhonebook: async (_, { id }) => {
      try {
        await models.Contact.destroy({ where: { id } });
        return new Response();
      } catch (e) {
        return new Response(e, false);
      }
    },
  },
};

module.exports = resolvers;

// exports.getPhonebook = async (req, res) => {
//     try {
//         const data = await models.Contact.findAll()
//         res.json(new Response(data))
//     } catch (e) {
//         res.json(new Response(e, false))
//     }
// }

// exports.postPhonebook = async (req, res) => {
//     try {
//         const {name, phone} = req.body
//         const data = await models.Contact.create({name, phone})
//         res.json(new Response(data))
//     } catch (e) {
//         res.json(new Response(e, false))
//     }
// }

// exports.putPhonebook = async (req, res) => {
//     try {
//         const {name, phone} = req.body
//         const {id} = req.params
//         const data = await models.Contact.update({name, phone}, {where: {id}, returning: true, plain: true})
//         res.json(new Response(data[1]))
//     } catch (e) {
//         res.json(new Response(e, false))
//     }
// }

// exports.deletePhonebook = async (req, res) => {
//     try {
//         const {id} = req.params
//         const data = await models.Contact.destroy({where: {id}})
//         res.json(new Response())
//     } catch (e) {
//         res.json(new Response(e, false))
//     }
// }