const express = require('express');
const router = express.Router();
const Clothes = require('../model/clothes');

/**
 * GET - http://locahost:9000/api/clothes
 */
router.get('/', async (req, res) => {
    try {
        var items = await Clothes.find();
        res.status(200).json(items);
    } catch (err) {
        res.status(404).send(`Error in GET : ${err.message}`);
    }
});


/**
 * GET - http://locahost:9000/api/electronics/id
 */
router.get('/:id', async (req, res) => {
    try {
        var id = req.params['id'];
        var item = await Clothes.findById(id);
        res.status(200).send(item);
    } catch (err) {
        res.status(404).send(`Error in GET : ${id} : ${err.message}`);
    }
})


/**
 * POST - http://locahost:9000/api/electronics
 */
router.post('/', async (req, res) => {
    var obj = new Clothes({
        color: req.body.color,
        size: req.body.size
    });
    try {
        const a1 = await obj.save();
        res.status(201).json(a1);
    } catch (err) {
        res.status(500).send(`Error in post : ${err.message}`)
    }
})


/**
 * PUT - http://locahost:9000/api/clothes/id
 */
router.put('/:id', async (req, res) => {
    try {
        var id = req.params['id'];
        var item = await Clothes.findById(id);
        item.color = req.body.color;
        item.size = req.body.size;
        const a1 = await item.save();
        res.status(202).json(a1);
    } catch (err) {
        res.status(500).send(`Error in PUT : ${err.message}`)
    }
})


/**
 * DELETE - http://locahost:9000/api/clothes/id
 */
router.delete('/:id', async (req, res) => {
    try {
        var id = req.params['id'];
        var item = await Clothes.findById(id);
        var a1 = await item.remove();
        res.status(204).json(a1)
    } catch (err) {
        res.status(500).send(`Error in DELETE : ${id} : ${err.message}`);
    }
})

module.exports = router;