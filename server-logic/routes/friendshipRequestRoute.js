const express = require('express');
const Friendship = require('../models/friendshipRequest')
const router = express.Router();


router.get('/', async (req, res) => {
    let Friendships = await Friendship.find()
    res.send(Friendships)
    res.end()
})

router.get('/:id', async (req, res) => {
    try {
        const friendship = await Friendship.find({ requestReceiver: req.params.requestReceiver });
        if (friendship) {
            res.json(friendship)
            // res.send(friendship)
        } else {
            res.json()
        }
    } catch (error) {
        res.status(500).send('An error occurred');
    }
    finally {
        res.end()
    }
});


router.post('/newRequest', async (req, res) => {

});


module.exports = router