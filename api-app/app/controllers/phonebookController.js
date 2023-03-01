var models = require('../../models/index');
const { Response } = require('../../helpers/util')

exports.getPhonebook = async (req, res) => {
    try {
        const data = await models.Contact.findAll()
        res.json(new Response(data))
    } catch (e) {
        res.json(new Response(e, false))
    }
}

exports.postPhonebook = async (req, res) => {
    try {
        const {name, phone} = req.body
        const data = await models.Contact.create({name, phone})
        res.json(new Response(data))
    } catch (e) {
        res.json(new Response(e, false))
    }
}

exports.putPhonebook = async (req, res) => {
    try {
        const {name, phone} = req.body
        const {id} = req.params
        const data = await models.Contact.update({name, phone}, {where: {id}, returning: true, plain: true})
        res.json(new Response(data[1]))
    } catch (e) {
        res.json(new Response(e, false))
    }
}

exports.deletePhonebook = async (req, res) => {
    try {
        const {id} = req.params
        const data = await models.Contact.destroy({where: {id}})
        res.json(new Response())
    } catch (e) {
        res.json(new Response(e, false))
    }
}