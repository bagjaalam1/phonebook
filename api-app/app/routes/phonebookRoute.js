module.exports = (app) => {
    const router = require('express').Router();
    const controller = require('../controllers/phonebookController')
    
    router.get('/phonebook', controller.getPhonebook)
    router.post('/phonebook', controller.postPhonebook)
    router.put('/phonebook/:id', controller.putPhonebook)
    router.delete('/phonebook/:id', controller.deletePhonebook)

    app.use('/api', router)
    return router;
}